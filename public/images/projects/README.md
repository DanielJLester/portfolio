# Project images

Drop an image file in this folder, then map it to a project in
`src/data/projectImageManifest.json` — no other code needs to change.

```json
{
  "<project-slug>": { "image": "<filename in this folder>" }
}
```

Project slugs are the `slug` field in `src/data/projects.ts`. Add a
`"gallery": ["file1.jpg", "file2.jpg"]` array alongside `"image"` for extra
photos on a project's detail page. A project with no entry (or no `image`)
falls back to a styled placeholder.

Pushing to `main` rebuilds and redeploys the site automatically — no other
steps required.

## Current mapping

- `chelsea-barracks` → Chelsea Barracks.jpeg
- `stickynotes` → StickyNotes UI.png
- `home-design-and-estimation` (Studio) → Studio-plan layout.png
- `tpp-platform` → Trade Partner Portal Dashboard.png
- `wembley` → wembley-4.jpg
- `al-rayyan-stadium` → alrayyanstadiumjpg.jpg
- `mandarin-oriental-tel-aviv` → Mandarin Oriental hotel.jpg
- `peninsula-london` → Peninsula hotel.webp

Not yet mapped: `color-forecasting`, `iwac`, `bim-ecosystem`.
