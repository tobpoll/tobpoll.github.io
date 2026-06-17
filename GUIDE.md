# Portfolio Website — Setup Guide

This guide walks you through everything: understanding the files, editing your content, publishing on GitHub Pages, and connecting your domain name. No prior experience needed.

---

## Part 1 — Understanding the files

Your site is made of these files:

```
portfolio/
├── index.html        ← homepage (shows your project list)
├── about.html        ← about page
├── contact.html      ← contact page
├── project-01.html   ← your first project (duplicate for more)
├── style.css         ← all visual design (colours, fonts, spacing)
├── script.js         ← small helper script (don't edit)
└── images/           ← folder for all your photos
```

All the text and images you need to change are marked with comments like:
```
<!-- EDIT: Change this to your name -->
```
Search for `EDIT:` in any file to find every place that needs your input.

---

## Part 2 — Editing your content

### Changing your name
Open `index.html`. Find `Your Name` and replace it with your real name.
Do the same in `about.html`, `contact.html`, and each project file.

### Adding projects
1. Duplicate `project-01.html` and rename it (e.g. `project-02.html`)
2. Open it and update the title, year, category, images, and text
3. Add a new line in the sidebar list in **every** HTML file:
   ```html
   <li><a href="project-02.html">Your New Project Title</a></li>
   ```

### Adding images
1. Put your image files in the `images/` folder
   — Recommended formats: JPG for photos, PNG for graphics
   — Keep file sizes under 500KB per image (use squoosh.app to compress)
2. In your project file, update the `src=""` to match:
   ```html
   <img src="images/your-image-filename.jpg" alt="Brief description" />
   ```

### Changing fonts
Open `style.css`. Near the top, find `--font-main:` and replace the value.
Example options:
```css
--font-main: "Helvetica Neue", Helvetica, Arial, sans-serif;
--font-main: "Georgia", Georgia, serif;
--font-main: "Courier New", Courier, monospace;
```

To use a Google Font (free):
1. Go to fonts.google.com, pick a font, click "Get font" → "Get embed code"
2. Paste the `<link>` tag into the `<head>` of each HTML file
3. Use the font name in `--font-main:`

### Changing colours
Open `style.css`. Find the `:root {` block and change the hex values:
```css
--color-bg:    #ffffff;   /* page background */
--color-text:  #111111;   /* main text */
--color-muted: #888888;   /* lighter secondary text */
```

---

## Part 3 — Publishing on GitHub Pages (free hosting)

GitHub Pages hosts your website for free, directly from your files.

### Step 1 — Create a GitHub account
Go to github.com and sign up for a free account.

### Step 2 — Install GitHub Desktop (recommended for beginners)
Download from desktop.github.com — this gives you a simple visual interface
instead of typing commands.

### Step 3 — Create a repository
A repository is like a folder on GitHub that holds your site.

1. Open GitHub Desktop → click **File → New Repository**
2. Name it exactly: `yourusername.github.io`
   (replace `yourusername` with your actual GitHub username)
3. Choose a local path where you want to keep it on your computer
4. Click **Create Repository**

### Step 4 — Copy your files in
Copy all your portfolio files into the folder GitHub Desktop just created.
The folder is at whatever path you chose in step 3.

### Step 5 — Publish to GitHub
1. In GitHub Desktop, you'll see all your files listed on the left
2. At the bottom left, type a short message like `Initial upload`
3. Click **Commit to main**
4. Click **Publish repository** (top right) — make sure **Keep this code private** is unchecked
5. Click **Publish Repository**

### Step 6 — Your site is live
Wait 1–2 minutes, then visit:
`https://yourusername.github.io`

Your portfolio is now live on the internet.

### Updating your site in future
Whenever you change files:
1. Open GitHub Desktop — it shows what changed
2. Write a short note (e.g. "Added project 3")
3. Click **Commit to main** then **Push origin**
The live site updates automatically within a minute.

---

## Part 4 — Connecting your own domain name

If you have bought a domain (e.g. `yourname.com`), here's how to connect it.

### Step 1 — Add a CNAME file to your repository
1. Create a plain text file called `CNAME` (no file extension) inside your portfolio folder
2. On the first (and only) line, type your domain:
   ```
   yourname.com
   ```
3. Save it, then commit and push it to GitHub (same as step 5 above)

### Step 2 — Set up DNS at your domain registrar
Log in to wherever you bought your domain (Namecheap, GoDaddy, Squarespace Domains, Google Domains, etc.).
Find the **DNS settings** or **DNS records** section.

Add these four **A records** (they point your domain at GitHub's servers):

| Type | Name | Value          |
|------|------|----------------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

Also add a **CNAME record**:

| Type  | Name | Value                        |
|-------|------|------------------------------|
| CNAME | www  | yourusername.github.io       |

### Step 3 — Tell GitHub your domain
1. Go to github.com → your repository → **Settings** → **Pages**
2. Under **Custom domain**, type your domain (e.g. `yourname.com`)
3. Click **Save**
4. Tick **Enforce HTTPS** (this gives your site the padlock / secure connection)

### Step 4 — Wait
DNS changes take between 30 minutes and 48 hours to fully propagate.
Once done, visiting `yourname.com` will show your portfolio.

---

## Quick-reference: most common edits

| What to change | Where to find it |
|----------------|-----------------|
| Your name | Top of every HTML file — look for `Your Name` |
| Navigation links | `<nav>` section in every HTML file |
| Project list in sidebar | `<aside id="sidebar">` in every HTML file |
| Project images | `<figure>` blocks in each project file |
| Project title & year | `<div class="project-header">` in project file |
| Project description | `<div class="project-text">` in project file |
| Page background colour | `--color-bg` in style.css |
| Font | `--font-main` in style.css |
| Your email address | about.html and contact.html |

---

## Getting help

- **GitHub Pages docs**: docs.github.com/pages
- **Image compression**: squoosh.app (free, runs in browser)
- **Free fonts**: fonts.google.com
- **Check your DNS**: dnschecker.org (paste your domain to see if it's pointing correctly)
