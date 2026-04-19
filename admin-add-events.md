# How to Add or Update Events

Events on this site live in **three places** that must all be kept in sync:

1. **`events.html`** — the full event cards that visitors see on the Events page
2. **`index.html`** — the short Upcoming Events list on the home page
3. **The JSON-LD block in `events.html`** — structured data that Google uses to show events in search results

Missing any of these will cause the site or search results to show stale or inconsistent information.

---

## Step 1 — Add the event card to `events.html`

Open `events.html` and find the block of `<section class="water-section">` cards. They should always be in chronological order — soonest event first.

Copy and paste this template, then fill it in:

```html
<section class="water-section">
  <h2>Event Name</h2>
  <table class="water-info">
    <tr><th>Date</th><td>Saturday, Month DD, YYYY</td></tr>
    <tr><th>Time</th><td>6:00 AM – Noon</td></tr>
    <tr><th>Location</th><td><a href="waters.html#water-id">Water Name</a>, Town</td></tr>
  </table>
  <p class="water-notes">
    Description of the event. Keep it casual and welcoming.
  </p>
</section>
```

**Linking the location to the waters page:** If the location is one of the club's waters, link it using the water's ID anchor. This helps SEO and makes it easy for members to look up directions and access info.

Here are the IDs for all current club waters:

| Water | Link |
|---|---|
| Burrage Pond | `waters.html#burrage-pond` |
| Cleveland Pond | `waters.html#cleveland-pond` |
| East Monponsett Pond | `waters.html#east-monponsett` |
| Furnace Pond | `waters.html#furnace-pond` |
| Long Pond (Plymouth) | `waters.html#long-pond-plymouth` |
| Robbins Pond | `waters.html#robbins-pond` |
| Sampsons Pond | `waters.html#sampsons-pond` |
| Silver Lake | `waters.html#silver-lake` |
| Stetson Pond | `waters.html#stetson-pond` |
| West Monponsett Pond | `waters.html#west-monponsett` |

Example of a linked location:
```html
<tr><th>Location</th><td><a href="waters.html#burrage-pond">Burrage Pond</a>, Hanson</td></tr>
```

If the location is TBD, just write:
```html
<tr><th>Location</th><td>TBD</td></tr>
```

---

## Step 2 — Add the event to the Upcoming Events list on `index.html`

Open `index.html` and find the `<ul class="news-list">` under the "Upcoming Events" heading. Add a `<li>` for the new event, keeping things in chronological order.

```html
<li>
  <span class="news-date">Saturday, Month DD, YYYY · 6:00 AM – Noon · <a href="waters.html#water-id">Water Name</a>, Town</span>
  One sentence description. Keep it brief — this is just a teaser.
</li>
```

If the location is TBD:
```html
<li>
  <span class="news-date">Saturday, Month DD, YYYY · 6:00 AM – Noon · Location TBD</span>
  One sentence description.
</li>
```

Only show the next 2–3 upcoming events here. Remove events from this list once their date has passed (move them to the past events section in `events.html` instead — see Step 4).

---

## Step 3 — Add the event to the JSON-LD block in `events.html`

Near the top of `events.html`, inside the `<head>`, there is a `<script type="application/ld+json">` block. It contains a JSON array `[...]` with one entry per event. Add a new entry for your event.

**If the location is a known club water:**
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Old Colony Anglers — Event Name",
  "startDate": "YYYY-MM-DDTHH:MM",
  "endDate": "YYYY-MM-DDTHH:MM",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Water Name",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Town",
      "addressRegion": "MA",
      "addressCountry": "US"
    }
  },
  "organizer": { "@type": "SportsClub", "name": "Old Colony Anglers", "url": "https://oldcolonyanglers.com" },
  "isAccessibleForFree": true,
  "url": "https://oldcolonyanglers.com/events.html"
}
```

**If the location is TBD**, use Halifax as a placeholder:
```json
"location": {
  "@type": "Place",
  "name": "South Shore Massachusetts",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Halifax",
    "addressRegion": "MA",
    "addressCountry": "US"
  }
}
```

**Date format:** `startDate` and `endDate` use ISO 8601 format. For a 6 AM–Noon outing on May 16, 2026:
- `"startDate": "2026-05-16T06:00"`
- `"endDate": "2026-05-16T12:00"`

Make sure each entry in the array (except the last one) ends with a comma `,`. The last entry should have no trailing comma. The overall structure looks like:

```json
[
  { ...first event... },
  { ...second event... },
  { ...last event, no trailing comma... }
]
```

When a location is confirmed for an event that previously said TBD, update the JSON-LD entry at the same time you update the event card and the home page list.

---

## Step 4 — Moving past events

After an outing date passes, move its `<section>` in `events.html` below all the active upcoming events, above the copy-paste template comment. Don't delete it — the event history is worth keeping.

At the same time, remove that event's `<li>` from the Upcoming Events list on `index.html`.

You do not need to remove past events from the JSON-LD block, but you can if you want to keep it tidy.

---

## Step 5 — Update the sitemap

Open `sitemap.xml` and update the `<lastmod>` date for any page you changed. Since adding an event touches both `events.html` and `index.html`, update both:

```xml
<url>
  <loc>https://oldcolonyanglers.com/events.html</loc>
  <lastmod>2026-05-01</lastmod>
</url>
...
<url>
  <loc>https://oldcolonyanglers.com/</loc>
  <lastmod>2026-05-01</lastmod>
</url>
```

Use today's date in `YYYY-MM-DD` format.

---

## Quick checklist

When adding or updating an event, confirm you've done all of these:

- [ ] Event card added/updated in `events.html` (chronological order, location linked to `waters.html#id`)
- [ ] Entry added/updated in the Upcoming Events list on `index.html` (location linked to `waters.html#id`)
- [ ] JSON-LD entry added/updated in the `<head>` of `events.html`
- [ ] Past events moved below active events in `events.html` and removed from `index.html`
- [ ] `sitemap.xml` `<lastmod>` updated for `events.html` and `index.html`
