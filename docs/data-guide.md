# Sylvie's Sleepy Stories Data Guide

## Source Files

- `library.json` is the readable library data file.
- `index.html` currently contains an embedded copy of the library.
- `bedtimes with sylvie.txt` appears to be source/research material used when collecting options.

## `library.json` Shape

Each item uses:

```json
{
  "title": "Video title",
  "channel": "Channel name",
  "url": "https://www.youtube.com/watch?v=...",
  "videoId": "YouTube ID",
  "thumb": "https://img.youtube.com/vi/.../hqdefault.jpg",
  "tags": ["sleepy"],
  "watchCount": 0,
  "lastWatched": null,
  "matchedTitle": null
}
```

## Current Tags

- `aladdin`
- `animals`
- `belle`
- `bluey`
- `disney`
- `frozen`
- `goodnight`
- `koala`
- `long`
- `mermaid`
- `moana`
- `music`
- `ocean`
- `princesses`
- `short`
- `sleepy`
- `snooze`
- `unicorns`

## Editing Rules

- Keep `videoId` in sync with `url`.
- Keep tags lowercase and hyphenated if more than one word.
- Do not add duplicate titles.
- Prefer known calm channels and videos already reviewed by a parent.
- After editing `library.json`, run `node scripts/sync-library.mjs` to update the embedded library in `index.html`.
