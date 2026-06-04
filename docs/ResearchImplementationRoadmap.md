# Sleepy Research Implementation Roadmap

Source research: `C:\dev\SylvieElias_AppDesign_Research.txt`, prepared 2026-06-04.

This roadmap translates the sleep and screen-time research into a practical upgrade plan for Sylvie's Sleepy Stories. Sleepy should become a parent-guided transition tool used earlier in the bedtime routine, not a final bright-screen activity immediately before sleep.

## Evidence Summary

| Research Finding | Sleepy Design Implication |
|------------------|---------------------------|
| Screens can delay sleep, especially within 45-60 minutes of bedtime. | Add timing guidance and avoid positioning Sleepy as the final bedtime step. |
| Blue-rich light can suppress melatonin. | Use warm amber, low brightness, and minimal white/blue light. |
| Audio-dominant bedtime content is safer than full video near sleep. | Add audio-first and lights-out modes. |
| Routine consistency matters more than any single story. | Structure use as opening ritual, story, closing ritual, parent handoff. |
| Exciting novelty raises arousal. | Curate for slow, familiar, low-stimulation content. |
| Elias should not have bedtime screen exposure. | Add household guidance if Elias is nearby. |

## Product Goal

Make Sleepy a calm, parent-controlled bedtime routine aid that helps choose and transition away from screens. It should reduce browsing, reduce brightness, reduce novelty, and hand the bedtime routine back to the parent.

## Priority 1: Bedtime Biology Controls

### 1. Add Warm Bedtime Mode

Default Sleepy to a warm visual mode:

- amber/dim backgrounds
- no bright white surfaces
- no blue-rich accent colors
- reduced thumbnail prominence in bedtime mode
- larger, slower, less animated UI

Acceptance criteria:

- Warm mode is active by default after a parent-configurable evening time, such as 6pm.
- Parent can toggle it manually.
- Child mode inherits warm mode automatically.

### 2. Add Low-Brightness Guidance

Browsers cannot reliably control device brightness, so include:

- an in-app dim overlay
- a parent prompt to lower device brightness
- a "screen dimmed" visual state

Acceptance criteria:

- Dim mode reduces perceived brightness across the whole UI.
- Thumbnails are muted or hidden in deep bedtime mode.
- Text remains readable for parents.

### 3. Add Lights-Out Audio Mode

Create a mode that:

- opens the selected story/audio
- fades Sleepy's interface to near-black
- shows only parent controls
- reminds the parent to switch to audio-only or lock the screen if the platform allows it

If YouTube playback prevents true audio-only behavior, document that limitation and provide the safest parent workflow.

## Priority 2: Routine Structure

### 4. Add Opening Ritual

Before showing the shelf, show a consistent prompt:

```text
Choose one calm story, then the screen rests.
```

Optional child copy:

```text
Pick a sleepy story with your grown-up.
```

### 5. Add Closing Ritual

After a story is opened or a short timer completes:

```text
Screen is finished. Time for a real cuddle story.
```

Acceptance criteria:

- The app nudges toward parent handoff.
- It does not autoplay another video.
- It does not encourage endless shuffling.

### 6. Add 1-2 Minute Calm Prompt

Add a pre-story breathing prompt:

- "Smell the flowers."
- "Blow out the candles."
- "Hands on tummy."
- "One slow breath together."

Keep this parent-led, optional, and simple.

## Priority 3: Content Curation

### 7. Add Review Metadata

Extend `library.json` with parent-reviewed fields:

```json
{
  "reviewed": true,
  "reviewedOn": "2026-06-04",
  "duration": "5 min",
  "arousal": "low",
  "bedtimeWindow": "early-routine",
  "notes": "Slow narration; no startling ending."
}
```

Acceptance criteria:

- Bedtime shelf can filter to reviewed-only.
- High-arousal or unknown videos are hidden in child mode.
- Parent notes are visible only to adults.

### 8. Review Existing Tags

Separate content by bedtime suitability:

- `sleep-safe`: low arousal, parent-reviewed
- `early-routine`: okay before the final wind-down window
- `audio-friendly`: works with screen dimmed
- `daytime-only`: too novel/exciting for bedtime
- `needs-review`: not yet bedtime-approved

### 9. Keep Recommendation Experiments Adult-Only

`Recommendation.html` should remain adult-only. Do not merge broad recommendation feeds into the bedtime shelf unless they are filtered through the same bedtime-safety model.

## Priority 4: Household Guidance

### 10. Add Timing Guidance

Parent copy:

```text
Best used before the final 45-60 minutes of sleep. For the last step, switch to real books, cuddles, prayer, or audio with the screen off.
```

### 11. Add Elias Safety Note

Parent copy:

```text
If Elias is nearby, keep him away from the screen and use audio or a real book instead.
```

## Evidence-Graded Implementation Checklist

| Priority | Task | Evidence |
|----------|------|----------|
| P0 | Warm mode and dim mode | A: melatonin and paediatric sleep guidance |
| P0 | 45-60 minute screen-free guidance | A: Australian 24-hour movement and sleep guidance |
| P0 | No autoplay next video | A: sleep hygiene and arousal guidance |
| P1 | Opening/closing bedtime ritual | B: routine consistency research |
| P1 | Audio-first/lights-out mode | A: blue-light and sleep guidance |
| P1 | Parent-reviewed content metadata | B: quality/content research |
| P2 | Breathing prompt | B: emerging paediatric calm-down evidence |
| P2 | Elias nearby warning | A: under-2/young toddler screen guidance |

## Release Order

1. Warm mode, dim mode, and bedtime timing guidance.
2. Opening and closing rituals with no autoplay continuation.
3. Parent review metadata and reviewed-only child shelf.
4. Lights-out/audio-first workflow.
5. Calm breathing prompt and household guidance polish.

## Definition of Done

Sleepy is research-aligned when it:

- never encourages screens in the final 45-60 minutes before sleep
- defaults to warm, dim, low-arousal presentation
- supports one intentional parent-chosen story
- hides unreviewed or stimulating content from child mode
- offers an audio-first path
- closes by handing bedtime back to the parent
