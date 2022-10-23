# StreamCollection "Frontend"


## Wofür ist StreamCollection?

StreamCollection ist ein Streammanagementprogramm für Livestreams auf Twitch und Youtube.
Der User kann seinen Twitch- und Youtubekanal via oAuth mit der App verbinden um die Aktuellen Livedaten sowie die Statistiken der letzten Streams einsehen zu können.
Zu den normalen Livestreamdaten gibt es auch eine Livechat Verwaltung mit der Möglichkeit direkt über die App Nachrichten an beide Livechats zu verteilen, sowie die Nachrichtenverwaltung (ban user, delete msg and find userInfo)

Streamer haben oft 3-6 verschiedene Webseiten um die verschiedennen Tools zu haben um ihren Livestream ideal und individuell managen zu können. StreamCollection soll dies ändern. Stream Collection bietet schon jetzt die Möglichkeiten von 2 der 6 Tools an und wird weiter ausgebaut.


## Alle Funktionen

### Tool 1:
- Datenanalyse (bisheriger Daten)
- Live Datenanalys (noch im Aufbau)

### Tool 2
- Livechat
- Message-Management
- AutoMod: durch vordefinierte und selbst erstellte Filter werden Nachrichten bereits eingehende Nachrichten geprüft und automatisch blockiert, falls sie nicht den Filterrichtlinienn entsprechen.

### Tool 3
- 20x img, 10x Sound und 10x Videoclip upload (bis zu 400mb/User)
- erstellen von Alerts und Overlays mit den hochgeladenen MediaDatein (noch im Aufbau)

### Tool 4
- Einbinden des Livechats in ein Overlay und/oder als OBS-Dock (noch in Planung)

### Tool 5
- Individuell einstellbarer Discord-Bot (noch in Planung)

### Tool 6
- Stelle deiner Community Aufgaben die durch Emojis, Cheers und Subscriptions bewältigt werden können (noch in Planung)

### Tool 7
- Soundmanagement (bisher nur ne grobe Idee)


## Verwendete Technologien

### Frontend:
| Style | Framework | Statemanagement | Livechat | Visualisierung | Paymentsystem | Deployment |
|-------|-------|-------|-------|-------|-------|-------|
| SCSS | React | useContext | Client-socket-io | ChartJS | Paypal | Netlify |

### Backend:
| Testing | Server | Security | Datenverwaltung | Deployment |
|-------|-------|-------|-------|
| Rest || Node | Bcrypt | MongoDB | Heroku (old) |
| |Express|JWT|Cloudinary| cyclic.sh |
| |Socket.io|oAuth| | |
