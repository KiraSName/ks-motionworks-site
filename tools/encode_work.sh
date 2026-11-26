#!/bin/bash
# Готує роботу для сайту: media/<id>/{full.mp4, preview.mp4, poster.jpg}
# full.mp4 — 720p з водяним знаком KS (правий нижній кут), preview — 6 с без звуку, poster — кадр.
# usage: tools/encode_work.sh <оригінал.mp4> <id> <vertical 0|1> <старт превʼю, с> <час постера, с> [overlay-позиція]
# позиція за замовчуванням: W-w-26:H-h-26 (для вертикальних W-w-22:H-h-22); інша, напр. W-w-26:14 — правий верхній.
set -e
in="$1"; id="$2"; v="$3"; ps="$4"; pt="$5"
dir="$(cd "$(dirname "$0")/.." && pwd)"; out="$dir/media/$id"; wm="$dir/tools/watermark.png"
mkdir -p "$out"
if [ "$v" = 1 ]; then S="720:1280"; P="360:640"; WW=200; M=22; else S="1280:720"; P="640:360"; WW=240; M=26; fi
pos="${6:-W-w-$M:H-h-$M}"
A=(); ffprobe -v error -select_streams a -show_entries stream=index -of csv=p=0 "$in" | grep -q . && A=(-map 0:a:0 -c:a aac -b:a 96k -ac 2 -ar 48000)
ffmpeg -v error -y -i "$in" -i "$wm" -filter_complex "[0:v]scale=$S:flags=lanczos,fps=25,format=yuv420p[b];[1]scale=$WW:-1:flags=lanczos,format=rgba,colorchannelmixer=aa=0.85[w];[b][w]overlay=$pos:format=auto,format=yuv420p[v]" -map "[v]" "${A[@]}" -c:v libx264 -preset slow -crf 24 -maxrate 2000k -bufsize 4000k -movflags +faststart "$out/full.mp4"
ffmpeg -v error -y -ss "$ps" -t 6 -i "$in" -vf "scale=$P:flags=lanczos,fps=25,format=yuv420p" -an -c:v libx264 -preset slow -crf 30 -movflags +faststart "$out/preview.mp4"
ffmpeg -v error -y -ss "$pt" -i "$in" -frames:v 1 -vf "scale=$S:flags=lanczos" -q:v 4 "$out/poster.jpg"
echo "$id: $(du -k "$out/full.mp4" | cut -f1) KB (ліміт Cloudflare 25 МБ)"
