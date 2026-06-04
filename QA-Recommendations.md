# Sleepy QA Recommendations

This document records the QA audit findings for Sleepy and the recommended changes to make the bedtime companion safer, more sleep-friendly, and family aligned.

## Key Audit Findings
- The app uses YouTube embeds and long videos, which conflicts with bedtime screen-free guidance.
- There is no true lights-out mode or fade-to-audio transition.
- There is no session timer or closing ritual.
- Tap targets and offline fallbacks are weak on mobile.
- No parent gate or age-based warning system.
- External links and video recommendations introduce privacy and copyright risks.

## Recommendations
1. Replace YouTube embeds with local or licensed audio-first content.
   - Curate short lullabies and stories under 30 minutes.
   - **Acceptance**: no external YouTube URLs remain; media is playable offline.

2. Add a lights-out mode.
   - Fade the screen to black and continue audio-only playback.
   - **Acceptance**: the display dims to <20% and transitions to audio within 30 seconds.

3. Add a session timer and closing ritual.
   - After 10 minutes of content, prompt the caregiver to move to an offline bedtime routine.
   - **Acceptance**: the app automatically asks to close the screen and read a real book.

4. Add screen-free reminders and parent gates.
   - Warn when the child is under 2 or when usage is near bedtime.
   - Require a caregiver confirmation before playing media.
   - **Acceptance**: media cannot start without a long press or parent confirmation.

5. Improve mobile UX and offline handling.
   - Increase thumbnail tap areas, offer a true dark mode, and provide fallback messaging offline.
   - **Acceptance**: the site works with clear fallback content when offline.

## Implementation Notes
- Keep any Christian or family-based content optional and age-appropriate.
- Avoid autoplay and algorithmic recommendations.
- Prioritise audio-first stories over visual video playback.

## Suggested Roadmap
- `P1`: remove YouTube, add audio library and fade-to-audio
- `P2`: add timer and closing ritual, parent gate
- `P3`: add offline fallback, dark mode and accessibility support

## Status
- [ ] Replace external video embeds with local audio content
- [ ] Add lights-out fade and audio-only mode
- [ ] Add session timer and offline bedtime transition
- [ ] Add parent gate and bedtime warning
- [ ] Improve mobile tap targets and offline fallback
