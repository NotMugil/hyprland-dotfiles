#!/bin/bash

set -euo pipefail
IFS=$'\n\t'

# Define directories

waybar_config="$HOME/.config/waybar/layouts"
waybar_style="$HOME/.config/waybar/layouts"
waybar_style_file="$HOME/.config/waybar/config.css"
waybar_config_file="$HOME/.config/waybar/config"
SCRIPTSDIR="$HOME/.config/hypr/scripts"
rofi_config="$HOME/.config/rofi/config-waybar-layout.rasi"

# Function to display menu options
menu() {
    options=()
    while IFS= read -r file; do
        options+=("$(basename "$file")")
    done < <(find "$waybar_config" -maxdepth 1 -mindepth 1 -type d -exec basename {} \; | sort)

    printf '%s\n' "${options[@]}"
}

# Apply selected configuration
apply_config() {
    ln -sf "$waybar_config/$1/config" "$waybar_config_file" && ln -sf "$waybar_style/$1/config.css" "$waybar_style_file"
    ~/.config/hypr/scripts/refresh_waybar.sh &
}

# Main function
main() {
    choice=$(menu | rofi -i -dmenu -config "$rofi_config")

    if [[ -z "$choice" ]]; then
        echo "No option selected. Exiting."
        exit 0
    fi

    case $choice in
        "no panel")
            pgrep -x "waybar" && pkill waybar || true
            ;;
        *)
            apply_config "$choice"
            ;;
    esac
}

# Kill Rofi if already running before execution
if pgrep -x "rofi" >/dev/null; then
    pkill rofi
    exit 0
fi

main
