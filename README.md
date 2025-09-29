Clarinet App - Minimal Static Web Scaffold

What this is

- A tiny static Single Page App scaffold for `clarinet_app`.
- Provides a header with a main menu and three sub-menus (Menu 1, Menu 2, Menu 3).
- Purpose: quick starting point for a clarinet practice web app.

Files created

- index.html - main entry file
- css/styles.css - simple styling
- js/app.js - minimal routing and UI injection
- README.md - this file

How to run

Option A - Open directly
- Double-click `index.html` in your file explorer. Works for simple demos but some browsers restrict local file features.

Option B - Start a simple local server (recommended)

If you have Python 3 installed, run from the project folder:

```powershell
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Deploying publicly (Netlify)

There are a few easy ways to publish this folder to a public URL using Netlify:

1) GitHub/GitLab/Bitbucket + Netlify (recommended)
	- Create a repository (e.g., on GitHub) and push the `clarinet_app` folder.
	- In Netlify, choose "New site from Git" and connect your repo.
	- Set the build command to blank and the publish directory to `/` (root). Netlify will deploy the static files and give you a public URL.

2) Netlify CLI (quick, from your machine)
	- Install the Netlify CLI: `npm install -g netlify-cli`
	- From the project folder run:

```powershell
netlify deploy --dir . --prod
```

	- The CLI will ask you to login or link an account and then publish the folder. It prints a public URL when finished.

3) Drag & drop (manual)
	- On Netlify's Sites page you can drag-and-drop the contents of this folder into the UI to deploy a one-off site.

Notes
- Because this project is purely static there is no build step required. Netlify's default settings will serve the files as-is.
- After deployment Netlify gives you a random site subdomain (e.g., `https://some-name.netlify.app`). You can add a custom domain in the Netlify dashboard if you own one.

Next steps / ideas

- Convert to a real framework (React/Vue/Angular/Flutter Web) if you want components, routing, and state management.
- Add instrumentation, persistence (localStorage), and real clarinet features (metronome, tuner, exercises).

