# CONCRETE EMPIRE — A Brutalist Architecture Archive

> *"The only honest architecture is one that refuses to hide what it is. There is no deception in concrete."*

---

## What is Brutalism?

Brutalism is not brutal. The name comes from *béton brut* — raw concrete — the phrase Le Corbusier used to describe the exposed aggregate that would define a century of architectural honesty. Born in the postwar reconstruction of Europe and reaching its apex during the Cold War arms race of ideas, Brutalism was architecture as ideology: massive, uncompromising, and impossible to ignore.

Where other styles hid their structure behind cladding and ornament, Brutalism wore its skeleton on the outside. Load-bearing walls that *looked* load-bearing. Pipes, ducts, and beams left exposed because concealment would be a lie. Entire cities — Chandigarh, Brasília, New Belgrade — planned from scratch in concrete, as if the material itself could manifest utopia.

Its greatest monuments rose from every corner of the globe: Soviet sanatoriums perched on Georgian cliffs, Yugoslav workers' palaces rising from Belgrade marshland, Indian institutes sculpted from brick by Louis Kahn, British housing estates that promised a revolution in how people lived. Many were demolished. Many were abandoned. The best still stand, raw and unrepentant.

---

## Why This Project

I've been obsessed with Brutalism for as long as I can remember — not in spite of its harshness, but because of it. There's something deeply honest about a building that refuses to perform beauty, that insists on showing you exactly what it's made of and how it stands. In an era of algorithm-optimised facades and AI-generated blandness, concrete feels almost radical.

This platform is my attempt to document that obsession. A fast, immersive, opinionated archive of the buildings I find most compelling — from the famous (the Barbican, the Salk Institute, Habitat 67) to the obscure (forgotten Soviet microrayon housing blocks, abandoned Yugoslav party monuments). Every entry has a description I wrote myself, reflecting what I actually find interesting about the building, not what a guidebook says.

It's also a love letter to the aesthetic of post-punk bands like Molchat Doma, whose Minsk panel-block imagery turned an entire generation of music listeners into accidental brutalism fans.

---

## Tech Stack

- **Framework** — [Next.js 15](https://nextjs.org) (App Router)
- **Language** — TypeScript
- **Styling** — Vanilla CSS with custom design tokens
- **Animations** — GSAP ScrollTrigger + Framer Motion
- **Data** — Curated hand-written JSON (`src/data/famous-buildings.json`)
- **Images** — Wikimedia Commons (free licence)

---

## Running Locally

```bash
git clone https://github.com/iaadi4/Brutalist.git
cd Brutalist
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Contributing

This is an open archive — it gets better with more eyes on it. Contributions are warmly welcome in any of these forms:

### Add a Building
The main data file is [`src/data/famous-buildings.json`](./src/data/famous-buildings.json). Each entry follows this schema:

```json
{
  "id": "unique-kebab-case-id",
  "name": "Building Name",
  "location": "City, Country",
  "year": 1968,
  "architect": "Architect Name",
  "style": "Style Label",
  "tags": ["Soviet", "Iconic"],
  "wiki": "Wikipedia_Article_Title",
  "description": "Your take on why this building matters. Be specific, be opinionated.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/..."
}
```

**Image guidelines:**
- Use direct Wikimedia Commons `upload.wikimedia.org` URLs (free licence, reliable CDN)
- Prefer `1280px-` thumbnail width
- The image must show the **building exterior** — no portraits, logos, or generic street scenes
- Verify the URL returns HTTP 200 before submitting

**Valid tags:** `Soviet`, `Iconic`, `Abandoned`, `Social Housing`, `Civic`, `Pioneer`, `Megastructure`

### Fix a Wrong Image
Found a building with a portrait instead of the actual building? Open an issue or submit a PR fixing the `image` field. Images sourced from Wikipedia's pageimages API are notoriously unreliable — fixes are always appreciated.

### Request a Building
Open a [GitHub Issue](https://github.com/iaadi4/Brutalist/issues) with:
- Building name and location
- A direct Wikimedia Commons image URL
- A short description of why it belongs here

### Report a Bug
Open an issue with steps to reproduce. Include the page URL and browser if relevant.

---

## Licence

MIT — use it, fork it, build on it.

---

<p align="center">
  Built in concrete. Served in pixels.
</p>
