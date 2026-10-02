---
name: Channel Spinelly
description: Alex Sam Cabildo's portfolio as a broadcast channel. Sections are programmes, projects are tapes aired on the house TV.
colors:
  strap-violet: "#b3a6ff"
  strap-teal: "#9ff2dc"
  honor-amber: "#ffcf80"
  strap-ink: "#13111d"
  tally-red-dark: "#ff4d5e"
  tally-red-light: "#e0303f"
  accent-ink-dark: "#b3a6ff"
  accent-ink-light: "#5b47d6"
  studio-black: "#0f0e16"
  studio-band: "#15131f"
  console-panel: "#1c1a29"
  console-panel-deep: "#12111b"
  rack-line: "#2b2840"
  phosphor-white: "#eceafc"
  phosphor-dim: "#a9a5c4"
  screen-black: "#0b0a12"
  daylight-ground: "#f3f2f8"
  daylight-band: "#e8e6f2"
  daylight-panel: "#ffffff"
  daylight-panel-deep: "#eceaf5"
  daylight-line: "#d3cfe5"
  daylight-ink: "#16141f"
  daylight-ink-dim: "#4f4b63"
typography:
  display:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "clamp(4rem, 11vw, 6rem)"
    fontWeight: 850
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 4.2rem)"
    fontWeight: 850
    lineHeight: 1.22
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 76"
  headline-xl:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "clamp(3rem, 10vw, 6rem)"
    fontWeight: 850
    lineHeight: 1.12
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 76"
  title:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.3rem, 2.4vw, 1.65rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 108"
  body:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, Helvetica, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 90"
  mono:
    fontFamily: "Martian Mono, ui-monospace, Consolas, monospace"
    fontSize: "0.82rem"
    fontWeight: 600
    lineHeight: 1.4
    fontFeature: "'tnum' 1"
rounded:
  square: "0px"
  screen: "3px"
  hardware: "6px"
  round: "50%"
spacing:
  gutter: "16px"
  wrap: "1200px"
  strap-gap: "2rem"
  section: "clamp(4.5rem, 9vw, 7.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.strap-violet}"
    textColor: "{colors.strap-ink}"
    rounded: "{rounded.square}"
    padding: "0.7rem 1.25rem"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.strap-teal}"
    textColor: "{colors.strap-ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.phosphor-white}"
    rounded: "{rounded.square}"
    padding: "0.7rem 1.25rem"
    height: "46px"
  button-ghost-hover:
    backgroundColor: "{colors.phosphor-white}"
    textColor: "{colors.studio-black}"
  button-lg:
    padding: "0.9rem 1.6rem"
    height: "56px"
  strap-title:
    backgroundColor: "{colors.strap-violet}"
    textColor: "{colors.strap-ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.square}"
    padding: "0.04em 0.32em 0.08em"
  strap-tag:
    backgroundColor: "{colors.strap-teal}"
    textColor: "{colors.strap-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.4rem 0.8rem"
  honor-chip:
    backgroundColor: "{colors.honor-amber}"
    textColor: "#2a1d00"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.35rem 0.65rem"
  tag:
    backgroundColor: "{colors.studio-black}"
    textColor: "{colors.phosphor-white}"
    rounded: "{rounded.square}"
    padding: "0.4rem 0.75rem"
  bug-button:
    backgroundColor: "transparent"
    textColor: "{colors.phosphor-white}"
    rounded: "{rounded.square}"
    size: "38px"
  tv-button:
    backgroundColor: "{colors.strap-violet}"
    textColor: "{colors.strap-ink}"
    rounded: "{rounded.round}"
    size: "34px"
  deck-button:
    backgroundColor: "{colors.console-panel}"
    textColor: "{colors.phosphor-white}"
    rounded: "{rounded.screen}"
    padding: "0.5rem 0.7rem"
  hardware-chassis:
    backgroundColor: "{colors.console-panel}"
    rounded: "{rounded.hardware}"
    padding: "14px"
---

# Design System: Channel Spinelly

## Overview

**Creative North Star: "Channel Spinelly"**

The portfolio is a broadcast channel. Sections are programmes, the sticky top bar is the station bug that always says what is on, and projects are tapes aired on a house TV that sits on a tape deck. Headings are not set as type on a page; they are lower-third straps, solid violet bars cut tight to the words, with an optional teal second tier underneath that carries a real fact. Everything that reads as on-air graphics is flat and square; everything that reads as physical hardware (monitor, TV, deck, knobs) gets soft 6px corners and a hairline frame.

Density is generous between programmes and tight inside them: big section padding, then ruled schedules and lineups with hairline row dividers and a heavy 3px top rule. The ground is studio black in dark mode (the default) and a cool lavender-white in light mode; the straps keep exactly the same colours on either ground, as real broadcast graphics do. Motion is broadcast motion: straps wipe in left to right, the TV shows static, reels spin, a caret types the presenter's name.

The world refuses the dark-hero-plus-card-grid developer portfolio, gradients (other than the CRT scanline texture on screens), glows, and coloured hard-offset shadows.

**Key Characteristics:**
- Violet lower-third straps carry every section heading; the teal tier is a fact or is omitted.
- Square graphics, 6px hardware.
- Wide Archivo for idents and wordmark, condensed Archivo for straps, Martian Mono only for clocks and timecodes.
- Flat surfaces, depth from hairlines and tonal grounds, never from shadow.
- Tally red means LIVE and nothing else.
- Straps are theme-invariant; grounds, panels, lines and ink swap per theme.

## Colors

A studio palette: near-black violet-greys for the set, three pale broadcast pastels for on-air graphics, one red reserved for the tally light.

### Primary
- **Strap Violet** (strap-violet): the channel colour. Heading straps, the presenter name strap, primary buttons, the wordmark dot, the active programme underline, the typing caret and selection, TV buttons and reel artwork. Never used as running text colour on the light ground.

### Secondary
- **Strap Teal** (strap-teal): the second tier of every lower third (strap tags, the role strap under the name, the TV title-card label), primary button hover, the focus ring, and the deck's "playing" LED.

### Tertiary
- **Honor Amber** (honor-amber): awards and status flags only (education honors, the "Flagship" flag). Its text is a dedicated dark brown (#2a1d00), not strap ink.
- **Tally Red** (tally-red-dark / tally-red-light): the LIVE indicator on a project card, as a 7px dot and a 1px outlined label. Nothing else is red.

### Neutral
- **Strap Ink** (strap-ink): the only text colour that sits on violet, teal or amber straps, in both themes.
- **Studio Black / Studio Band** (studio-black, studio-band): dark page ground and the alternating band behind every other programme.
- **Console Panel / Console Panel Deep** (console-panel, console-panel-deep): hardware bodies (monitor, TV, info card) and the recessed deck below the TV.
- **Rack Line** (rack-line): all hairlines, borders, row dividers, antenna strokes, inactive LEDs.
- **Phosphor White / Phosphor Dim** (phosphor-white, phosphor-dim): primary and secondary text in dark mode.
- **Screen Black** (screen-black): the inside of every screen and the deck slot, identical in both themes.
- **Accent Ink** (accent-ink-dark / accent-ink-light): violet used as text (timecodes, institution names, tag hover borders). Light mode darkens it to stay legible on the pale ground.
- **Daylight set** (daylight-ground, daylight-band, daylight-panel, daylight-panel-deep, daylight-line, daylight-ink, daylight-ink-dim): the light-theme equivalents of the studio neutrals, role for role.

### Named Rules
**The Straps Don't Change Rule.** Violet, teal, amber and strap ink are declared once on the channel root and are identical in dark and light themes. Only ground, panel, line, ink and accent-ink swap.

**The Tally Rule.** Red means live. If a thing is not currently on air, it does not get red.

**The Ink-On-Strap Rule.** Text on a violet, teal or amber fill is always strap ink (amber uses its brown). Never white, never theme ink.

## Typography

**Display Font:** Archivo variable (wght 100-900, wdth 62-125), self-hosted, with Helvetica, Arial fallback
**Body Font:** Archivo (same file)
**Label/Mono Font:** Archivo condensed for labels; Martian Mono variable (self-hosted) for clocks, dates and timecodes only

**Character:** One grotesque stretched to two extremes does all the work: wide and heavy for the presenter ident and the wordmark, narrow and heavy for straps that have to fit a bar. Martian Mono is the station clock.

### Hierarchy
- **Display** (850, clamp(4rem, 11vw, 6rem), 1.02, width 125%): the presenter's name in the ident only. Steps down to clamp(3.4rem, 18vw, 4.5rem) under 640px. Also the wordmark (850, 1.3rem, width 125%).
- **Headline** (850, clamp(2.4rem, 6vw, 4.2rem), 1.22, width 76%): section strap titles, max 24ch, balanced. The sign-off uses the XL step (clamp(3rem, 10vw, 6rem), max 14ch). The project card title is the same strap at a fixed 2.15rem, width 78%.
- **Title** (800, clamp(1.3rem, 2.4vw, 1.65rem), 1.2, width 108%): schedule slot titles. Pull-quote lines (ident emphasis, the About question) use 800 at width 110%, clamp up to about 1.7rem.
- **Body** (400, 1.0625rem, 1.6; 1rem under 640px): running copy in phosphor-dim, measures 60 to 68ch. Long-form About copy goes to 1.1rem at 1.75.
- **Label** (600 to 700, 0.64 to 0.78rem, uppercase, 0.04 to 0.06em tracking, width 88 to 90%): strap tags, fact keys, legends, deck buttons, honor chips.
- **Mono** (600, 0.72 to 0.82rem, tabular figures): the bug-bar NOW and clock, schedule periods.

### Named Rules
**The Stretch Axis Rule.** Hierarchy is carried by width as much as size: wide (110 to 125%) for identity, normal for titles, condensed (76 to 90%) for anything inside a strap or label. Do not fake condensing with letter-spacing.

**The Clock-Only Mono Rule.** Martian Mono is for times and dates. Labels are condensed Archivo.

## Layout

A single 1200px column (`min(1200px, 100% - 2 x 16px)`), full-bleed bands alternating studio-black and studio-band per programme. Sections pad clamp(4.5rem, 9vw, 7.5rem) top and bottom; the sign-off gets extra bottom room. The ident fills the first viewport (100dvh minus the 61px bug bar) on a 7:5 grid, copy left and the presenter monitor right. About runs 7:4, text against a facts rail.

Lists are broadcast schedules, not card grids: a 3px ink top rule, then rows divided by 1px hairlines. Education rows are period | logo | body (9.5rem | 64px | 1fr); skill rows are category | tag cloud (14rem | 1fr). The project showcase centres the TV; selecting a tape grows a 460px (380px under 1100px) info column beside it, which pushes the TV left. The tape rack wraps centred beneath.

Breakpoints: 1100px hides the clock and narrows the info panel; 960px collapses grids to one column, stacks the showcase vertically and turns the programme nav into a clip-path drop-down; 640px reflows schedule rows and turns the tape rack into a two-column grid.

## Elevation & Depth

Flat. No surface in the channel casts a shadow. Depth comes from three things only: tonal steps between ground, band and panel; 1px rack-line frames on hardware; and objects physically overlapping (the lower third hangs off the monitor's bottom-left edge, the TV sits on the deck). Lift is expressed with transform, not shadow: tapes rise 8px and tilt on hover, 12px when selected.

### Named Rules
**The No-Glow Rule.** No box-shadow, text-shadow, blur or glow on any channel surface, and no coloured hard-offset shadows. If something needs to stand out, give it a strap.

**The Scanline Exception Rule.** The only gradient in the system is the CRT scanline texture (1px of 18% black every 3px) laid over screens: the presenter monitor and the TV. No other gradient, anywhere.

## Shapes

**The Square Graphics, Round Hardware Rule.** On-air graphics are square: straps, tags, chips, buttons, the info card, tooltips (MudBlazor's default radius is forced to 0). Physical equipment gets the hardware radius (6px) on its outer chassis and 3px on screens, the deck slot and deck buttons. True circles are reserved for hardware controls: TV buttons, knobs, LEDs, slider thumbs, the tally dot.

Strap bars are inline backgrounds that clone across line breaks, so a two-line heading reads as two stacked straps cut tight to each line. A 3px violet bar is the "selected" mark (active programme underline, selected tape).

## Components

### Buttons
Solid, square, unapologetic.
- **Shape:** square corners, 2px border, min height 46px (56px large, 52px large on mobile).
- **Primary:** strap violet with strap ink, 700 at width 92%.
- **Hover / Focus:** primary turns teal; ghost fills with ink and its text takes the ground colour. Press nudges down 1px. Focus is a 2px teal outline offset 3px.
- **Ghost:** transparent with a 2px ink border.

### Chips
- **Tag:** 1px rack-line border on the section's ground, 600 weight. Hover takes an accent-ink border. Tags with a tooltip carry an accent-ink bottom border and help cursor. A **reluctant** tag is dashed, dimmed, carries a frown icon and shakes on hover.
- **Honor chip:** solid amber, uppercase condensed label, award icon.

### Cards / Containers
- **Info card (liner notes):** console panel, 1px rack line, square, 1.5rem by 1.6rem padding. Headed by a track number, LIVE tally and Flagship flag, then the project name as a strap in that tape's colour, copy, a "Built with" tag cloud and actions pinned to the bottom. Slides in 14px from the right.
- **Facts rail:** 3px ink top rule, key/value rows on hairlines, keys as uppercase labels.

### Navigation
- **Station bug bar:** sticky, 60px, ground background, hairline bottom. Wide wordmark with a violet dot; programme links in 600 at width 88%, ink-2 at rest, ink on hover; the current programme (set by scroll observer) gets a 3px violet underline that scales in from the left. Right side: a NOW strap (dark inverted label tab plus violet field showing the current programme, mono) and the Cebu clock, then 38px square icon buttons. Under 960px the links drop into a full-width clip-path sheet at 1.3rem / 800.

### Presenter Monitor (signature)
A 4:3 screen inside a 14px console-panel bezel with 6px corners, scanlines over the portrait, and a two-tier lower third (violet name strap, teal fact strap) overhanging the bottom-left. Both tiers wipe in on load.

### House TV and Tape Deck (signature)
Antenna, 6px-cornered chassis, 4:3 screen with scanlines, a brand plate and circular violet transport buttons; below it the recessed deck with a slot, animated reels and a teal LED. Empty state is animated static with a violet "No project selected" strap; tapes without footage show solid SMPTE-style colour bars in the system pastels. A playing tape gets a two-tier title card and a corner watermark bug. Tapes are SVG cassettes in a per-project pastel from the five-colour cycle (violet, teal, amber, sky #8ec2ff, rose #ff96a8).

### Lower-Third Strap (signature)
Section heading as a violet bar plus an optional teal tag. Wipes in via `clip-path: inset()` on scroll where view timelines are supported and motion is allowed; static and fully visible otherwise.

## Do's and Don'ts

### Do:
- **Do** head every programme with a violet strap title; add the teal tier only when it states a real fact (a count, a date range, an availability).
- **Do** keep straps theme-invariant and set strap text in strap ink.
- **Do** use the width axis for hierarchy: 125% for identity, 76 to 80% for straps, 88 to 92% for UI labels.
- **Do** frame hardware with 6px corners and a 1px rack line; keep graphics square.
- **Do** use the shared ease-out (cubic-bezier(0.16, 1, 0.3, 1)) and wipe-style entrances, and disable every animation under prefers-reduced-motion.
- **Do** preserve the owner's copy verbatim, in his voice.
- **Do** stay in Blazor/.NET and MudBlazor, restyling MudBlazor components to the channel; reach for JS interop only where Blazor cannot (media playback, the scroll observer).

### Don't:
- **Don't** use gradients. The CRT scanline texture on screens is the one sanctioned exception.
- **Don't** use glows, blurs, or coloured hard-offset shadows.
- **Don't** use red for anything but LIVE.
- **Don't** put Martian Mono on labels or body; it is for clocks and timecodes.
- **Don't** lay projects or skills out as a card grid; they are tapes, schedules and lineups.
- **Don't** put em-dashes in copy.
- **Don't** put decorative uppercase labels above section headings; the strap's teal tier is the only secondary heading line, and a label over a title must carry live state or a real fact (track number, LIVE, Now playing).
