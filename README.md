# Australia Road Trips

## Royal Roads — Perth to Adelaide Family Adventure

A responsive family road-trip planning portal for the 19 Dec 2026 to 5 Jan 2027 Perth → Adelaide trip.

### Included in the first build

- Royal 90s visual theme based on the approved mockup direction
- Three itinerary options: Balanced, Scenic WA and Scenic SA
- Outbound / return itinerary switching
- Daily distance, drive-time and suggested overnight-stop cards
- BMW X3 / caravan / motorhome comparison
- Family voting per route option
- Family notes and change suggestions
- Responsive desktop / tablet / mobile layout
- No build tool required: plain HTML, CSS and JavaScript

### Run locally

Open `index.html` in a browser, or serve the repository with any static web server.

### Current persistence model

Votes and notes are stored in browser `localStorage` for the prototype. They are device-local and are not yet shared between family members.

### Next phase

1. Deploy to a temporary domain.
2. Add username/password protection.
3. Replace localStorage with shared server-side storage so family votes and notes sync across devices.
4. Add live maps, researched accommodation links and attraction detail pages.
