import { App } from "astal/gtk3"
import { Variable, GLib, bind } from "astal"
import { Astal, Gtk, Gdk } from "astal/gtk3"
import Hyprland from "gi://AstalHyprland"
import Mpris from "gi://AstalMpris"
import Battery from "gi://AstalBattery"
import Wp from "gi://AstalWp"
import Network from "gi://AstalNetwork"
import Tray from "gi://AstalTray"

function Launcher(): JSX.Element {
    return <button onClicked="/home/rei/.config/ags/scripts/launcher.sh">
        <label label="󰣇" />
    </button>
}

function SysTray() {
    const tray = Tray.get_default()

    return <box>
        {bind(tray, "items").as(items => items.map(item => {
            if (item.iconThemePath)
                App.add_icons(item.iconThemePath)

            const menu = item.create_menu()

            return <button
                tooltipMarkup={bind(item, "tooltipMarkup")}
                onDestroy={() => menu?.destroy()}
                onClickRelease={self => {
                    menu?.popup_at_widget(self, Gdk.Gravity.SOUTH, Gdk.Gravity.NORTH, null)
                }}>
                <icon gIcon={bind(item, "gicon")} />
            </button>
        }))}
    </box>
}

function Wifi() {
    const { wifi } = Network.get_default()

    return <icon
        tooltipText={bind(wifi, "ssid").as(String)}
        className="Wifi"
        icon={bind(wifi, "iconName")}
    />
}

function AudioSlider() {
    const speaker = Wp.get_default()?.audio.defaultSpeaker!

    return <box className="AudioSlider" css="min-width: 140px">
        <icon icon={bind(speaker, "volumeIcon")} />
        <slider
            hexpand
            onDragged={({ value }) => speaker.volume = value}
            value={bind(speaker, "volume")}
        />
    </box>
}

function BatteryLevel() {
    const bat = Battery.get_default()

    return <box className="Battery"
        visible={bind(bat, "isPresent")}>
        <icon icon={bind(bat, "batteryIconName")} />
        <label label={bind(bat, "percentage").as(p =>
            `${Math.floor(p * 100)}%`
        )} />
    </box>
}

function Workspaces() {
    const hypr = Hyprland.get_default()

    return <box className="Workspaces">
        {bind(hypr, "workspaces").as(wss => wss
            .sort((a, b) => a.id - b.id)
            .map(ws => (
                <button
                    className={bind(hypr, "focusedWorkspace").as(fw =>
                        ws === fw ? "focused" : "")}
                    onClicked={() => ws.focus()}>
                    {ws.id}
                </button>
            ))
        )}
    </box>
}

function truncateText(text: string, limit: number) {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
}


function Media({ titleLimit = 20 }) {
    const mpris = Mpris.get_default();

    return (
        <button onClicked="/home/rei/.config/ags/scripts/mediaplayer.sh">
            <box className="Media">
                {bind(mpris, "players").as(ps => ps[0] ? (
                    <box>
                        <box
                            className="Cover"
                            valign={Gtk.Align.CENTER}
                            css={bind(ps[0], "coverArt").as(cover =>
                                `background-image: url('${cover}');`
                            )}
                        />
                        <label
                            label={bind(ps[0], "title").as(() =>
                                truncateText(`${ps[0].title} - ${ps[0].artist}`, titleLimit)
                            )}
                        />
                    </box>
                ) : null)}
            </box>
        </button>
    );
}
	

function FocusedClient({ titleLimit = 20 }) {
    const hypr = Hyprland.get_default()
    const focused = bind(hypr, "focusedClient")

    return <box
        className="Focused"
        visible={focused.as(Boolean)}>
        {focused.as(client => (
            client && <label label={bind(client, "title").as(title => 
                truncateText(title, titleLimit)
            )} />
        ))}
    </box>
}

function Time({ format = "%H:%M" }) {
    let currentFormat = format;

    const time = Variable<string>("").poll(1000, () =>
        GLib.DateTime.new_now_local().format(currentFormat)!
    );

    function switchTime() {
        if (currentFormat === "%H:%M") {
            currentFormat = "%a %d"; // Day and date
        } else {
            currentFormat = "%H:%M"; // Hours and minutes
        }
        time.set(GLib.DateTime.new_now_local().format(currentFormat)!);
    }

    return <button onClicked={switchTime}>
	<label
        	className="Time"
        	onDestroy={() => time.drop()}
        	label={time()}
    	/>
   </button>
}

export default function Bar(monitor: Gdk.Monitor) {
    const anchor = Astal.WindowAnchor.TOP
        | Astal.WindowAnchor.LEFT
        | Astal.WindowAnchor.RIGHT

    return <window
        className="Bar"
        gdkmonitor={monitor}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        anchor={anchor}>
        <centerbox>
            <box hexpand halign={Gtk.Align.START}>
		<Launcher />
                <Workspaces />
            </box>
            <box>
                <Media />
            </box>
            <box hexpand halign={Gtk.Align.END} >
                <SysTray />
                <Wifi />
                <AudioSlider />
                <BatteryLevel />
                <Time />
            </box>
        </centerbox>
    </window>
}
