# Old Colony Anglers — Website Admin Guide

This guide explains how to maintain and update the club website. No coding experience required — everything is plain HTML that you edit like a text document. Use any text editor (Notepad, VS Code, etc.).

---

## TODO — Placeholder Data

Everything in this list needs real content before the site is ready to share publicly.

### Site-wide
- [ ] **Club logo** — waiting on graphic designer. Swap into all 9 pages when received (see One-Time Setup below)
- [ ] **Merch tab** — hidden until merchandise is ready. See "Enabling the Merch Tab" below to turn it on.
### Waters — Silver Lake
- [ ] **Verify fishing access** — Silver Lake is Brockton's primary drinking water supply. No boating is permitted. Shore fishing appears accessible from Silver Lake Sanctuary (Barses Lane, Kingston) but confirm current rules and whether any permit beyond a state license is required. Contact Kingston Town Hall at 781-585-0537.
- [ ] **Verify town(s)** — currently set to Halifax, Kingston, Plympton; confirm all towns
- [ ] **Update Town field** — once access is confirmed, update to reflect which town the access point is in

### Gallery
- [ ] **April 2026 outing** — add description and photos (`images/gallery/`)

---

## Enabling the Merch Tab

The Merch tab is hidden in the navigation on all pages. When you're ready to launch merchandise:

1. Open **every** `.html` file (all 9: `index.html`, `waters.html`, `species.html`, `gallery.html`, `about.html`, `quickstart.html`, `licenses.html`, `regulations.html`, `merch.html`)
2. In each file, find this commented-out line in the `<nav>` block:
   ```html
   <!-- <a href="merch.html">Merch</a> -->
   ```
3. Remove the `<!--` at the start and `-->` at the end so it reads:
   ```html
   <a href="merch.html">Merch</a>
   ```

The tab will appear in the navigation on every page. Make sure `merch.html` has real content before you do this.

---

## One-Time Setup

Complete these steps once when you first receive your assets from the designer.

### Adding Your Logo

When you receive your logo from the graphic designer:

1. Save the file as `images/logo.png` (PNG with transparent background works best)
2. Open **every** `.html` file
3. Find this line and delete it:
   ```html
   <div class="site-logo-placeholder" aria-hidden="true"></div>
   ```
4. Uncomment the line above it:
   ```html
   <img src="images/logo.png" alt="Old Colony Anglers logo" class="site-logo">
   ```

The logo will appear as a circle in the header on every page. The CSS already handles the circular crop.

> **Favicon bonus:** The favicon (browser tab icon) is already wired up on every page pointing to `images/logo.png`. Once you drop the logo file in, it will appear in the tab automatically — no extra steps needed.

---

## Folder Structure

```
OCA_Website/
│
├── index.html          ← Home page and news feed
├── waters.html         ← Club fishing waters (one section per water)
├── species.html        ← Local fish species guide
├── gallery.html        ← Photo gallery (one section per outing)
├── about.html          ← Club history and organizer list
├── quickstart.html     ← Beginner's fishing guide (cards + YouTube embeds)
├── licenses.html       ← MA fishing license information
├── regulations.html    ← MA freshwater fishing regulations table
├── merch.html          ← Club merchandise (placeholder, nav hidden)
│
├── css/
│   └── style.css       ← ALL colors and styles — one file controls the whole site
│
└── images/
    ├── gallery/        ← Drop outing photos here (referenced in gallery.html)
    ├── waters/         ← Drop lake map images here (referenced in waters.html)
    └── species/        ← Drop species photos here (referenced in species.html)
```

---

## Changing the Site Colors

Open `css/style.css`. The very first section looks like this:

```css
:root {
  --color-primary:    #9B2335;  /* cranberry red — main brand color */
  --color-primary-dk: #6e1826;  /* darker red — used for hover states */
  ...
}
```

Change any hex color value (e.g. `#9B2335`) and save. That color updates everywhere on the site instantly. You do not need to touch any HTML file.

---

## Adding a News Item (Home Page)

Open `index.html`. Find the `<!-- Latest News -->` section. Copy one `<li>` block and paste it above the `<!-- COPY FROM HERE` comment. Fill in the date and text. Newest items go at the top.

**Copy this:**
```html
<li>
  <span class="news-date">Month Year</span>
  Your news item here.
</li>
```

---

## Adding or Updating an Event

Events live in two places — **both must be kept in sync**:
- `events.html` — full event cards with details
- `index.html` — short one-line summary in the Upcoming Events list

### Adding a new event to `events.html`

Find the `<!-- COPY FROM HERE` comment near the bottom of `events.html`. Copy the template block and paste it **above** that comment, in chronological order (earliest date first).

```html
<section class="water-section">
  <h2>Event Name</h2>
  <table class="water-info">
    <tr><th>Date</th><td>Day, Month DD, YYYY</td></tr>
    <tr><th>Time</th><td>0:00 AM – 0:00 PM</td></tr>
    <tr><th>Location</th><td>Location Name</td></tr>
  </table>
  <p class="water-notes">
    Description of the event.
  </p>
</section>
```

If the location is one of the club's waters, link it:
```html
<tr><th>Location</th><td><a href="waters.html#burrage-pond">Burrage Pond</a>, Hanson</td></tr>
```

### Adding the matching entry to `index.html`

Open `index.html` and find the Upcoming Events `<ul class="news-list">` section. Add a `<li>` in chronological order:

```html
<li>
  <span class="news-date">Saturday, Month DD, YYYY · Time · Location</span>
  Event name — one-line description.
</li>
```

### Moving a past event

Once an event has passed, move its `<section>` block below the active events (but above the copy-paste template comment). Remove it from the Upcoming Events list on `index.html`.

---

## Adding a New Water

### Step 1 — Get the depth map image from MA DFW

MA DFW publishes free bathymetric (depth) maps for most MA ponds as single-page PDFs.

1. Search for your pond at [mass.gov](https://www.mass.gov) — e.g. search "East Monponsett Pond DFW"
   - East Monponsett PDF: `https://www.mass.gov/doc/east-monponsett-pond/download`
2. Go to **ilovepdf.com** → "PDF to JPG" (free, no account needed)
3. Upload the PDF and download the JPG
4. Save it to `images/waters/` using a clear name, like `east-monponsett-map.jpg`
5. In `waters.html`, find the pond's `<div class="water-map">` block:
   - Delete the `<div class="water-map-placeholder">Lake map coming soon</div>` line
   - Uncomment the `<!-- <img src="images/waters/..."> -->` line above it and update the filename

If you can't find a DFW PDF, you can also use a screenshot from Navionics Web App or save any other lake map image to the same folder.

### Step 2 — Get a Google Maps link

1. Go to [maps.google.com](https://maps.google.com)
2. Search for the water
3. Click **Share** → **Copy link**
4. Paste that URL into the waters entry (see below)

*Optional — embedded map:*
Click **Share** → **Embed a map** → copy the `<iframe>` code. You can paste this instead of (or in addition to) the link.

### Step 3 — Add the water section to `waters.html`

Open `waters.html`. Find the comment that says `<!-- COPY FROM HERE`. Copy the template block below it and paste it **in alphabetical order** among the existing water sections.

Fill in each field:

```html
<section class="water-section" id="quabbin-reservoir">

  <h2>Quabbin Reservoir</h2>

  <div class="water-layout">
    <div class="water-info">
      <table>
        <tbody>
          <tr><th>Town</th><td>Belchertown / Ware</td></tr>
          <tr><th>Acres</th><td>39 square miles</td></tr>
          <tr><th>Max Depth</th><td>~150 ft</td></tr>
          <tr><th>Species</th><td>Lake Trout, Smallmouth Bass, Yellow Perch</td></tr>
          <tr><th>Stocked</th><td>Yes — Lake Trout by MA DFW</td></tr>
          <tr><th>Special Regs</th><td>Fly fishing only in some areas — check MA regs</td></tr>
          <tr><th>Access</th><td>Members only — Gate 8</td></tr>
          <tr><th>Parking</th><td>Gravel lot at the gate</td></tr>
          <tr><th>Boat Launch</th><td>No motorized boats</td></tr>
        </tbody>
      </table>
    </div>
    <div class="water-map">
      <img src="images/waters/quabbin-reservoir-map.jpg" alt="Lake map of Quabbin Reservoir">
    </div>
  </div>

  <div class="water-google-maps">
    <a href="https://maps.google.com/YOUR_LINK_HERE" target="_blank" rel="noopener">→ View on Google Maps</a>
  </div>

  <p class="water-notes">
    <strong>Notes:</strong> Your notes about this water.
  </p>

</section>
<hr>
```

> **The `id=` value** (e.g. `id="quabbin-reservoir"`) must be lowercase with hyphens instead of spaces. No special characters. This is what the TOC links use.
>
> **The `data-towns` attribute** lists every town the water touches (comma-separated). The **Town** row in the table should show where parking/access is. The `data-towns` attribute is what tells you which town groups to add the water to in the TOC — check it before updating the jump links.
> Example: `<section class="water-section" id="west-monponsett" data-towns="Halifax, Hanson">`

### Step 4 — Add a link to the TOC

At the top of `waters.html`, find the `<nav class="toc">` block. Waters are grouped by town — each town is a `<details>` block that expands when clicked.

- **If the town already exists**, find its `<details>` block and add a link **in alphabetical order** inside the `<div class="toc-town-waters">`:

```html
<a href="#quabbin-reservoir">Quabbin Reservoir</a>
```

- **If it's a new town**, copy an entire `<details>` block, update the town name and link, and insert it **alphabetically** among the existing towns.

- **If the water spans two towns**, add a link under each town's `<details>` block.

---

## Adding a Species Entry

### Step 1 — Add a photo (optional but recommended)

1. Save the photo as `images/species/[species-id].jpg` — e.g. `images/species/yellow-perch.jpg`
   (use lowercase with hyphens, matching the section `id` you'll set in Step 2)
2. Skip this for now if you don't have a photo — the placeholder box will show automatically

### Step 2 — Add the species section to `species.html`

Open `species.html`. Find an existing species entry to use as a model. Copy the block from
`<!-- ==================== SPECIES ENTRY =================== -->` through the closing `</section>` and
paste it **in alphabetical order** among the existing entries (above the `<hr>` that separates sections).

Then fill in each field:

```html
<!-- ==================== SPECIES ENTRY =================== -->
<section class="water-section" id="yellow-perch">

  <h2>Yellow Perch</h2>

  <div class="water-map">
    <!--
      SPECIES PHOTO: When ready —
      1. Save photo as  images/species/yellow-perch.jpg
      2. Delete the <div class="water-map-placeholder"> line below
      3. Uncomment the <img> line
    -->
    <!-- <img src="images/species/yellow-perch.jpg" alt="Yellow Perch"> -->
    <div class="water-map-placeholder" aria-hidden="true"></div>
  </div>

  <div class="water-info">
    <table>
      <tbody>
        <tr>
          <th>Common Name</th>
          <td>Yellow Perch</td>
        </tr>
        <tr>
          <th>Scientific Name</th>
          <td><em><a href="https://www.fishbase.se/summary/Perca-flavescens.html" target="_blank" rel="noopener">Perca flavescens</a></em></td>
        </tr>
        <tr>
          <th>Baits &amp; Lures</th>
          <td>Nightcrawlers, small jigs, inline spinners, small minnows</td>
        </tr>
        <tr>
          <th>Local Waters</th>
          <td>
            <a href="waters.html#burrage-pond">Burrage Pond</a>,
            <a href="waters.html#silver-lake">Silver Lake</a>
          </td>
        </tr>
        <tr>
          <th>Best Season</th>
          <td>Spring and fall; active year-round</td>
        </tr>
        <tr>
          <th>Typical Local Size</th>
          <td>6–9 inches</td>
        </tr>
        <tr>
          <th>Bag/Size Limit</th>
          <td>No limit — <a href="https://www.mass.gov/masswildlife" target="_blank" rel="noopener">verify current regs</a></td>
        </tr>
      </tbody>
    </table>
  </div>

  <p class="water-notes">
    <strong>Fishing Tips:</strong> Your practical beginner-friendly tips here.
  </p>

</section>
<!-- ================= END SPECIES ENTRY ================== -->
```

**Key details:**
- The `id=` value (e.g. `id="yellow-perch"`) must be lowercase with hyphens. This is what the TOC link and waters.html links use.
- **FishBase link:** The scientific name links to `https://www.fishbase.se/summary/[Genus]-[species].html` — replace `[Genus]` and `[species]` with the two-part scientific name, capitalized as shown (e.g. `Perca-flavescens`).
- **Local Waters links** use `waters.html#[water-id]` format — the water's `id` from `waters.html`.
- **Bag/Size Limit** should reflect current MA statewide regs and always include the "verify current regs" link.

### Step 3 — Add a link to the TOC

At the top of `species.html`, find the `<ul class="toc-list">` block. Add a link **in alphabetical order**:

```html
<li><a href="#yellow-perch">Yellow Perch</a></li>
```

### Step 4 — Update `waters.html`

For each water where the new species is present, open `waters.html` and add the species name to that water's Species `<td>` cell, linked to the new species anchor:

```html
<a href="species.html#yellow-perch">Yellow Perch</a>
```

Keep the species list within each water entry in a consistent order (roughly: bass, pickerel, perch, panfish, catfish, trout).

---

## Adding a Gallery Outing

### Step 1 — Save your photos

Save all outing photos to the `images/gallery/` folder.
Use descriptive names, e.g. `june2026-quabbin-01.jpg`, `june2026-quabbin-02.jpg`.

### Step 2 — Add the outing section to `gallery.html`

Open `gallery.html`. Find the comment that says `<!-- COPY FROM HERE`. Copy the template block and paste it **above** the previous outing (newest outing goes first).

Fill in the heading and add one `<img>` line per photo:

```html
<section class="outing" id="outing-june-2026">

  <h2>June 2026 — Quabbin Reservoir</h2>

  <p class="outing-description">
    Brief description of the outing (optional — delete this paragraph if not needed).
  </p>

  <div class="gallery">
    <img src="images/gallery/june2026-quabbin-01.jpg" alt="John with a nice lake trout">
    <img src="images/gallery/june2026-quabbin-02.jpg" alt="The crew at the launch">
  </div>

</section>
<hr>
```

> **The `id=` value** must be lowercase with hyphens, e.g. `id="outing-june-2026"`.

### Step 3 — Add a link to the TOC

At the top of `gallery.html`, find the `<nav class="toc">` block. Outings are grouped by year using expandable `<details>` blocks.

- **If the year already exists**, find its `<details>` block and add a link at the **top** of the `<div class="toc-town-waters">` (newest first):

```html
<a href="#outing-june-2026">June 2026 — Quabbin Reservoir</a>
```

- **If it's a new year**, copy an entire `<details>` block, update the year in the `<summary>`, and place it above the previous year's block.

---

## Updating Club organizers

Open `about.html`. Find the organizers table. Edit the text inside each `<td>` cell.

To add a new organizer row, copy one `<tr>` block:

```html
<tr>
  <td>Sergeant at Arms</td>
  <td>Jane Smith</td>
  <td><a href="mailto:jane@example.com">jane@example.com</a></td>
</tr>
```

Paste it inside the `<tbody>` section, above the `<!-- COPY FROM HERE` comment.

---

## Adding a New Page

1. **Copy an existing page** (e.g. copy `merch.html`, rename it to `newpage.html`)
2. **Update the `<title>`** tag at the top
3. **Update the `<h1>`** heading inside `<main>`
4. **Add your content** inside the `<div class="container">` block
5. **Update the nav in every page** — open each `.html` file and add your new link inside the `<nav>` block:
   ```html
   <a href="newpage.html">New Page</a>
   ```
   Files to update: `index.html`, `waters.html`, `species.html`, `gallery.html`, `about.html`, `quickstart.html`, `licenses.html`, `regulations.html`, `merch.html`, and your new page itself.
6. **Mark the active page** — in your new page's nav, add `class="active"` to its own link:
   ```html
   <a href="newpage.html" class="active">New Page</a>
   ```

---


## After Pushing Changes — Purge Cloudflare Cache

The site runs behind Cloudflare. After pushing to GitHub, Cloudflare may serve visitors a cached (older) version of the page. If changes aren't showing up after a minute or two:

1. Log into **dash.cloudflare.com**
2. Select the `oldcolonyanglers.com` domain
3. Go to **Caching → Configuration**
4. Click **Purge Everything**

Then do a hard refresh in your browser (**Ctrl+Shift+R**) to clear your local cache too.

---

## Updating the Quickstart Page

The quickstart page (`quickstart.html`) is organized as 6 cards using the site's standard `.water-section` card style. Steps 1–5 are live; Step 6 (Join the Club) is commented out pending a Google Form.

### To replace or add a YouTube video

1. Find a video on YouTube that allows embedding — open `https://www.youtube.com/embed/VIDEO_ID` directly in your browser to confirm it plays (if it says "Watch on YouTube" it's blocked)
2. Use the clean embed URL format — **do not include the `?si=...` parameter** that YouTube sometimes appends:
   ```
   https://www.youtube-nocookie.com/embed/VIDEO_ID
   ```
3. Paste it into the `src` attribute of the relevant `<iframe>` in `quickstart.html`

---

## Updating Fishing Regulations Each Year

MassWildlife publishes a new regulation summary each January or February.
Do this once per year to keep the MA Regs page current:

1. Go to [mass.gov/masswildlife](https://www.mass.gov/masswildlife) and download the current **Freshwater Fishing Regulation Summary** PDF
2. Feed the PDF to an AI (Claude, ChatGPT, etc.) with this prompt:
   > "Extract all freshwater fishing species from this PDF into a list with these columns:
   > Species, Open Season, Minimum Size, Daily Bag Limit, Notes.
   > Include every species listed."
3. Open `regulations.html` and find the `<tbody>` inside the regulations table
4. Update each `<td>` cell with the new values — one row per species, keeping rows in alphabetical order
5. Update the season year in the `<h2>` near the top (e.g. change `2026 Season` to `2027 Season`)
6. Update the `Last updated` line just below it

---

## Quick Reference

| Task | File to edit |
|---|---|
| Add/update an event | `events.html` + `index.html` (Upcoming Events list) |
| Add news item | `index.html` |
| Add a water | `waters.html` + add image to `images/waters/` |
| Add a species | `species.html` + `waters.html` + add image to `images/species/` |
| Add gallery outing | `gallery.html` + add images to `images/gallery/` |
| Update contacts | `about.html` |
| Update regulations | `regulations.html` (see "Updating Fishing Regulations" above) |
| Change colors | `css/style.css` (top of file, `:root` block) |
| Update license info | `licenses.html` |
| Update getting started guide | `quickstart.html` |
