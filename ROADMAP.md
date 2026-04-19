# Old Colony Anglers — Site Roadmap

Status as of April 2026. This is a living document — check items off as they're completed.

---

## Phase 1 — Pre-Launch Blockers

These must be resolved before sharing the site with members.

- [ ] **Logo** — waiting on graphic designer. When received, swap into all 11 pages (see README for exact steps). Also unlocks the favicon.
- [x] **West Monponsett** — Max Depth, Access, Parking, Boat Launch, and Notes fields are all blank. Matt to fill in.
- [x] **Silver Lake** — Confirm shore fishing access rules. Lake is Brockton's primary drinking water supply; a permit beyond a state license may be required. Contact Kingston Town Hall: 781-585-0537. Once confirmed, update the Town field and Access/Notes fields in `waters.html`.
- [x] **East Monponsett** — Verify ~239 acres and ~16 ft max depth against the MA DFW lake survey PDF before publishing.
- [x] **Clean up README TODO** — Remove the "April 2026 outing" gallery TODO from the README (the April event didn't happen; first outing is May).
- [x] **Remove Google Form reference** — In `quickstart.html`, Step 6 ("Join the Club") is commented out pending a Google Form that isn't planned. Either remove the step entirely or rewrite it to point to the Facebook group instead.

---

## Phase 2 — Launch

These steps are gated on the logo arriving. Do them in order once it's in hand.

### 2a — Social Media Setup (before going public)
The Facebook group is currently private. Get both platforms ready before going public so new followers don't land on empty pages.

**Facebook**
- [ ] Set the logo as the group profile picture
- [x] Add a cover photo (a good fishing photo — hero shot or outing photo)
- [ ] Fill in the group description / About section with 1–2 sentences about the club
- [ ] Write and pin a welcome post — introduce the club, link to the website, mention the May 16 outing
- [ ] Make the group public

**Instagram**
- [ ] Set the logo as the profile picture
- [ ] Write a short bio (club name, location, link to website)
- [ ] Post at least 1–2 photos before going public so the feed isn't empty (a fishing photo, the logo, or a teaser for the May outing)
- [ ] Make the account public

### 2b — May Outing Promotion
Do these at the same time as the site launch announcement.

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

---

## Phase 3 — Early Season (May–July 2026)

Routine content updates as the season gets going.

- [ ] **May outing** — After May 16 event, add outing section to `gallery.html` with photos. Create `images/gallery/` folder first.
- [ ] **June outing** — After June 20 event, add to gallery.
- [ ] **July outing** — After July 18 event, add to gallery.
- [ ] **Move past events** — After each outing date passes, move its `<section>` in `events.html` below the active events block. Remove it from the Upcoming Events list on `index.html`.

---

## Phase 4 — Mid-Season (Late Summer 2026)

- [ ] **Merch** — Build out `merch.html` with actual products. When ready, uncomment the Merch nav link in all 11 HTML files (see README: "Enabling the Merch Tab").
- [ ] **Membership roster** — If club interest grows through the season, consider adding a free sign-up form (Google Form embedded in `membership.html`) to maintain a headcount going into 2027.

---

## Phase 5 — End of Season / Annual

- [ ] **August and September outings** — Add to gallery after Aug 15 and Sep 19 events.
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
