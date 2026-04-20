# Old Colony Anglers — Site Roadmap

Status as of April 2026. This is a living document — check items off as they're completed.

---

## Phase 1 — Pre-Launch Blockers

These must be resolved before sharing the site with members.

- [ ] **Logo** — waiting on graphic designer. When received, swap into all 11 pages (see README for exact steps). Also unlocks the favicon. Also update the `og:image` and `twitter:image` meta tags across all 11 pages from `hero-pond.jpg` to the logo or a dedicated 1200×630px landscape crop.
- [ ] **Pre-launch site review** — go through all 11 pages and check for broken links, leftover placeholder text, and typos before going live.
- [x] **Mobile test** — open the site on a phone and verify all pages render correctly, especially the hamburger nav.
- [x] **Confirm club email** — verify `oldcolonyanglers@gmail.com` is set up and actively monitored before the site goes live. It's linked on the Contact page.
- [x] **Open Graph meta tags** — add OG tags to all 11 pages so shared links on Facebook, Instagram, and iMessage show a proper preview card (title, description, image) instead of a generic or broken one.
- [x] **West Monponsett** — Max Depth, Access, Parking, Boat Launch, and Notes fields are all blank. Matt to fill in.
- [x] **Silver Lake** — Confirm shore fishing access rules. Lake is Brockton's primary drinking water supply; a permit beyond a state license may be required. Contact Kingston Town Hall: 781-585-0537. Once confirmed, update the Town field and Access/Notes fields in `waters.html`.
- [x] **East Monponsett** — Verify ~239 acres and ~16 ft max depth against the MA DFW lake survey PDF before publishing.
- [x] **Clean up README TODO** — Remove the "April 2026 outing" gallery TODO from the README (the April event didn't happen; first outing is May).
- [x] **Remove Google Form reference** — In `quickstart.html`, Step 6 ("Join the Club") is commented out pending a Google Form that isn't planned. Either remove the step entirely or rewrite it to point to the Facebook group instead.

---

## SEO Optimization

Do these before going live. Items 1–3 can be done immediately (no logo dependency).

- [x] **`sitemap.xml`** — Create a static sitemap listing all 11 page URLs with `<lastmod>` dates. Helps Google discover every page. Highest-leverage item missing from the site.
- [x] **`robots.txt`** — Add a minimal `robots.txt` (`User-agent: * / Allow: /`) that welcomes crawlers and references the sitemap.
- [x] **Structured data (JSON-LD)** — Add a `<script type="application/ld+json">` block to `index.html` with the club name, URL, and location. Helps Google surface the site for local searches like "fishing club Halifax MA."
- [x] **Alt text audit (water maps)** — Bathymetric map images on `waters.html` updated with descriptive alt text including pond name, town, and state.
- [x] **Alt text audit (remaining images)** — Hero image (`alt="East Monponsett"` is too vague), species photos, and gallery photos still need descriptive alt text.
- [x] **Fix home page title** — Change `<title>Home — Old Colony Anglers</title>` to `<title>Old Colony Anglers | Freshwater Fishing Club, Halifax MA</title>`. Google weights the first words; "Home" is wasted space.
- [x] **Page titles on other pages** — Other pages could be more keyword-rich. Example: `waters.html` → `Freshwater Fishing Spots on the South Shore | Old Colony Anglers`.
- [x] **Heading hierarchy** — Verify each page has exactly one `<h1>` that includes a keyword phrase. Waters and species pages especially benefit from descriptive `<h1>` text.
- [x] **Internal linking** — Add links to specific water names in the `index.html` news/events section to build topical depth between pages.
- [x] **Meta descriptions on every page** — Each page should have a unique `<meta name="description">` with relevant keywords. Currently most pages share the same description or may have none.
- [x] **Event structured data (JSON-LD) on `events.html`** — Google has a specific `Event` schema type that can surface outings directly in search results with date, time, and location.
- [x] **Sitemap `lastmod` maintenance** — `sitemap.xml` dates are hardcoded. Add a note in the README reminding Matt to update `<lastmod>` for any page he edits before pushing.
- [ ] **Google Search Console** — Submit the domain and sitemap at search.google.com/search-console. Free; shows what queries surface the site and flags crawl errors. Do this at launch.
- [ ] **Backlinks** — Get listed on local town websites, MA fishing forums, or the MassWildlife club directory. Bigger long-term SEO driver than any on-page tweak.

---

## Phase 2 — Launch

These steps are gated on the logo arriving. Do them in order once it's in hand.

### 2a — Social Media Setup (before going public)
The Facebook group is currently private. Get both platforms ready before going public so new followers don't land on empty pages.

**Facebook**
- [ ] Set the logo as the group profile picture
- [x] Add a cover photo (a good fishing photo — hero shot or outing photo)
- [x] Fill in the group description / About section with 1–2 sentences about the club
- [ ] Write and pin a welcome post — use the copy below, then pin it to the top of the Page:

  > Old Colony Anglers is a freshwater fishing club based in Halifax, MA, welcoming anglers from Halifax and surrounding towns. We organize monthly outings with good fishing and good company.
  >
  > Membership is free and open to all. Whether you've been fishing your whole life or you're just getting started, you're welcome here.
  >
  > Outings run monthly from May through October, every third Saturday, 6 AM to Noon. Check our website for fishing spots, local species info, and a beginner's guide to freshwater fishing.
  >
  > 🌐 oldcolonyanglers.com
- [ ] Make the group public

**Instagram**
- [ ] Set the logo as the profile picture
- [x] Write a short bio (club name, location, link to website)
- [ ] Post at least 1–2 photos before going public so the feed isn't empty (a fishing photo, the logo, or a teaser for the May outing)
- [ ] Make the account public
- [ ] **Establish a hashtag set** — build a consistent list of tags to use on every Instagram post for organic discovery. Suggested starting point: `#OldColonyAnglers, #MassachusettsFishing #SouthShoreFishing #FreshwaterFishing #MAFishing #BassFishing #NewEnglandFishing #FishingClub`. Add or swap based on what gets traction.

### 2b — May Outing Promotion
Do these at the same time as the site launch announcement.

- [ ] **Create a Facebook Event** — Create an official FB Event for the May 16 outing so people can RSVP and get automatic reminders. Events are more visible than posts and show up in Facebook's event discovery feed.
- [ ] **Facebook group post** — Dedicated post for the May 16 outing with date, time, location, and what to expect. Keep it casual and welcoming to newcomers.
- [ ] **Instagram post** — Same info, photo of the water or a fishing shot to catch attention while scrolling.
- [ ] **Cross-post to local MA fishing groups** — Share the outing post (or a link to the events page) in relevant public Facebook fishing groups (e.g. Massachusetts Fishing, Southeast MA fishing groups).
- [ ] **Cross-post to local town groups** — Share in Facebook community groups for Halifax and surrounding towns (Hanson, Pembroke, Plympton, etc.) where people may not already be in the fishing groups.
- [ ] **Word of mouth** — Ask current members to share the Facebook group and invite anyone they think would enjoy it.

### 2c — Site Launch
- [ ] Swap logo into all 11 pages (see README: "Adding Your Logo")
- [ ] Push to GitHub Pages and verify the site renders correctly at `oldcolonyanglers.com`
- [ ] Purge Cloudflare cache (dash.cloudflare.com → Caching → Purge Everything)
- [ ] Post the site link to the Facebook group
- [ ] Add a launch news item to `index.html` — a brief entry in the news feed welcoming members to the site and linking to the May outing.

---

## Phase 3 — Early Season (May–July 2026)

Routine content updates as the season gets going.

- [ ] **May outing** — After May 16 event, add outing section to `gallery.html` with photos. Create `images/gallery/` folder first. Post photos to Instagram and Facebook.
- [ ] **June outing** — Create FB Event ahead of Jun 20. After the event, add to gallery and post photos to Instagram and Facebook.
- [ ] **July outing** — Create FB Event ahead of Jul 18. After the event, add to gallery and post photos to Instagram and Facebook.
- [ ] **Move past events** — After each outing date passes, move its `<section>` in `events.html` below the active events block. Remove it from the Upcoming Events list on `index.html`.
- [x] **Custom 404 page** — Add a `404.html` page matching the site's style for when someone hits a bad URL. GitHub Pages picks it up automatically. Keep it simple — just the header, nav, and a short message.
- [ ] **Map of club waters** — Create a Google My Maps with all 10 club waters pinned, then embed it on `waters.html`. Gives members a quick geographic overview and makes it easy to plan a trip. Free via Google My Maps; the embed code drops in as an `<iframe>`.
- [ ] **Resources section** — Add a curated list of useful links to an existing page (likely `licenses.html` or a new `resources` section). Good candidates: MA DFW stocking schedule, license purchasing (MassFishHunt), regulation PDF, local bait shops, weather/wind forecast links.

---

## Phase 4 — Mid-Season (Late Summer 2026)

- [ ] **Merch** — Build out `merch.html` with actual products. When ready, uncomment the Merch nav link in all 11 HTML files (see README: "Enabling the Merch Tab").
- [ ] **Membership roster** — If club interest grows through the season, consider adding a free sign-up form (Google Form embedded in `membership.html`) to maintain a headcount going into 2027.

---

## Phase 5 — End of Season / Annual

- [ ] **August and September outings** — Create FB Events ahead of Aug 15 and Sep 19. After each event, add to gallery and post photos to Instagram and Facebook.
- [ ] **October outing** — Tentatively at Long Pond, Plymouth. Confirm once MA DFW announces fall trout stocking. Verify at mass.gov/masswildlife, then update the October event in both `events.html` and `index.html`.
- [ ] **2027 regulations** — MassWildlife publishes updated regs each January or February. Update `regulations.html` (or the regulations section of `licenses.html`) once the new summary is out. See README: "Updating Fishing Regulations Each Year."
- [ ] **2027 events** — Add the new season's monthly outings to `events.html` and `index.html` (third Saturday of each month, 6 AM–Noon).

---

## Backlog / Future Ideas

No commitment on timeline — just ideas worth keeping track of.

- **Google Form for membership sign-up** — A simple form embedded in `membership.html` to collect a roster (name, email, town). Useful for headcounts, merch orders, and making the case for private water access. Free via Google Forms; no backend needed.
- **Species leaderboard** — A "biggest fish per species caught by a member" page would be a fun keepsake. Worth revisiting once the club has a roster and a season of catches. Note: frame it as a record wall or hall of fame rather than a live competition, to keep the non-tournament spirit of the club intact.
- **New waters** — No additions planned yet, but the template is in `waters.html` whenever a new spot gets added.
- **Private waters** — If the club requests access to private waters in the area, a free membership roster would help make the case. See `membership.html`.
- **Contact form** — Replace the plain email link on `about.html` with an embedded Google Form for general inquiries. Lowers the barrier for new members who don't want to send a cold email. Free via Google Forms; no backend needed.
- **Ongoing social cadence** — Keep Instagram and Facebook active between outings with occasional posts: species spotlights, fishing tips, water conditions, or throwback outing photos. Helps grow the following without waiting for the next event.
- **Beginner gear buyer's guide** — Price out a few entry-level rod/reel setups at Walmart and document them on the site. Give new members a concrete starting point so they're not overwhelmed before their first outing. Would fit naturally as a section in `quickstart.html` or its own page.
- **Kids fishing tips page** — A short, beginner-focused page aimed at parents bringing kids to their first outing. Fits the club's mission and targets a specific search audience ("kids fishing South Shore MA"). Could live as a new page or as an extra section in `quickstart.html`.
- **Printable PDFs** — Once the logo is in hand, design a set of printable PDFs (outing checklist, species ID card, etc.) exactly how you want them. Host them on the site as downloadable links.
- **Local bait shops** — Names, addresses, and hours for bait shops near the club waters. Pure utility for members, and good for local SEO. Would fit naturally as a section in `licenses.html` alongside the resources links, or in a dedicated resources section.
- **Club etiquette page** — Catch and release expectations, kid-safe and alcohol-free environment, general conduct. Hold off until the club has formal membership and a few seasons under its belt — easier to write from experience than to guess at edge cases upfront.
