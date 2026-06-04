# Sylvie's Sleepy Stories Roadmap

## Priority 1: Library Maintenance

- Decide whether `library.json` or embedded `index.html` data is the source of truth.
- Add a small script to regenerate the embedded library from `library.json`.
- Review unwatched entries before marking them bedtime-ready.
- Remove stale, unavailable, or too-stimulating links.

## Priority 2: Bedtime Safety

- Add parent notes for each video:
  - calmness rating
  - approximate duration
  - bedtime suitability
  - any content warnings
- Add a "parent reviewed" field to the data model.
- Consider using embeds or a controlled player only for reviewed videos.

## Priority 3: Product Polish

- Add a lightweight README-linked deployment guide.
- Add a printable or exportable bedtime favourites list.
- Add a "tonight" playlist mode for 2-3 parent-selected videos.
- Add a low-stimulation mode with fewer thumbnails and dimmer contrast.

## Experimental

`Recommendation.html` is an adult-oriented recommendation experiment. Keep it separate from the child bedtime shelf unless it is redesigned around child-safety rules.
