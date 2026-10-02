# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- **Recruiters and internship leads** skimming quickly to judge whether Alex ships real, well-architected software.
- **Prospective clients** deciding whether to commission him, who need to see live products and a clear way to reach him.

Both arrive cold, usually from a link in a résumé, DM, or social profile, often on mobile.

## Product Purpose

spinelly.net is Alex Sam Cabildo's personal portfolio. It proves that he ships real products rather than class exercises, and turns that proof into contact. Success is a visitor opening a live project or reaching out.

## Positioning

A 3rd-year CS student at UP Cebu whose portfolio is made of **live, shipped platforms** with real architecture behind them (Bursaria, UPCSG Website, Ponyfolio), not demos. He is also a video creator, which is why projects are presented as tapes playing on a TV.

## Operating Context

- Hosted as a static Blazor WebAssembly site on GitHub Pages at the apex `spinelly.net`, DNS on Cloudflare. No backend.
- Projects link out to their own live subdomains (`upcsg.spinelly.net`, `ponyfolio.spinelly.net`, planned `bursaria.spinelly.net`) and GitHub repos under `SpinellyA`.
- Project media are self-recorded screen walkthroughs (narrated MP4) stored in `wwwroot/images/projects/`.

## Capabilities and Constraints

- Stack is fixed: Blazor WebAssembly (.NET 10) + MudBlazor, plain CSS in `wwwroot/css/app.css`. The owner prefers staying in the .NET/Blazor ecosystem over adding JS libraries; small JS interop is acceptable where Blazor cannot reach (media playback).
- Content is data-driven from records in `Pages/Home.razor` (`ProjectEntry`, `EducationEntry`, `SkillGroup`, `Tag`).
- The cassette/TV project showcase is a signature feature: tapes select a project, the TV flashes "Now playing", narrated videos play via chassis controls, the screen itself is inert.
- WASM payload is already non-trivial; first paint and loading screen matter.

## Brand Commitments

- **Voice:** first-person, punchy, friendly, slightly cheeky, never corporate. Copy is the owner's own and must be preserved, not rewritten. No em-dashes.
- **Name:** goes by "Alex"; full name Alex Sam Cabildo. Handle "spinelly".
- **Wordmark:** lowercase `spinelly.` with an accent-coloured dot (outlined SVGs in `wwwroot/images/brand/`). The owner is open to a better mark if one is proposed.
- **Typing hero intro:** the "Alex Sam Cabildo" highlight-and-delete animation reflects his personality.

## Evidence on Hand

- Real projects with live URLs and repos: Bursaria (flagship, under maintenance; leave its links as the owner set them), UPCSG Website (live, upcsg.org), Ponyfolio (live, ponyfolio.com), Amiki (personal organiser, owner-written description), FindersJeepers (not deployed), Project Artemis (live at artemis.runasp.net, narrated video `images/projects/artemis.mp4`), SMS Bulker, ExamGrinder (live on GitHub Pages).
- TV screens in `images/projects/*.webp`: captured from the live sites, or cropped from owner-supplied screenshots with personal data (email, phone, reference ID, private links) covered before publishing.
- Portrait: `images/profile.jpg`. Institution logos: `images/logos/` (UP, DOST, Cebu City National Science High School).
- Education: BS Computer Science at UP Cebu (2024-present), DOST-SEI RA 7687 scholar, Senior and Junior High at Cebu City National Science High School with High Honors.
- YouTube channel with roughly 2,000 subscribers.
- No testimonials, client logos, or metrics exist. Do not fabricate any.

## Product Principles

1. **Proof over claims.** Every assertion of skill should point at a live thing someone can open.
2. **The work leads.** Projects are the second thing a visitor sees, right after who he is.
3. **Personality is a feature.** The voice and the video/tape motif are what separate this from every other dev portfolio; keep them.
4. **Fast and honest.** Nothing that slows first paint without earning it, nothing invented.
