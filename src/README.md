# Fraqshares — Design System

A working design system for **Fraqshares**, a fractional real-estate investment platform
built around decentralized, real-world assets. Fraqshares lets everyday investors buy
**fractional shares of prime global properties**, earn rental
income and dividends, trade their holdings, and manage a portfolio entirely from the web or
phone. The tone is aspirational but grounded: *"Inclusive real estate investing for all."*

> Currency in the product is primarily Nigerian Naira (**₦**) with USD (**$**) shown on some
> property cards — Fraqshares is an Africa‑first fintech with a global property catalogue.
> The attached Figma carries an earlier **"Fraqvest"** working wordmark on its screens; the
> official company brand is **Fraqshares** and the supplied logo files (see Brand assets)
> supersede it.

---

## Source

Everything here was reconstructed from a single attached Figma file: **`Fraqvest.fig`**
(mounted read‑only; not a shareable link). Relevant pages inside it:

| Figma page | What's there |
|---|---|
| `Landing-Page` | Marketing site (hero, feature blocks, How‑It‑Works, footer, legal pages) |
| `Web-App-V1.0` / `Web-App-V2.0` | Investor web dashboard — V2.0 is the current design and the source of truth |
| `Mobile-App` | iOS app (onboarding, portfolio, trade/charts, KYC) — iPhone 13 mini frames |
| `Style-Guide` | Icon library (the **vuesax / Iconsax** set, twotone + bold) |
| `Moodboard` / `Cover` | Brand references |

The `.jsx` in the Figma export is **pseudocode** — accurate for layout, color, type and
spacing, but logos/icons/illustrations are split into many vector sub‑paths and could not be
copied as clean single SVGs. See **Iconography** and **Brand assets** for how those were handled.

---

## CONTENT FUNDAMENTALS

**Voice — confident, inclusive, plain‑spoken.** Copy sells *access* and *freedom*, never
hype or jargon. It explains the mechanics of fractional ownership in everyday language.

- **Person:** Speaks to **"you"**, refers to the brand as **"Fraqvest"** in the first person
  by name ("With Fraqvest, experience the power of owning fractional shares…").
- **Casing:** Marketing headlines use **Title Case** ("Inclusive Real Estate Investing For
  All", "Easy Management", "How It Works", "Start Growing Your Portfolio"). In‑app UI labels
  are Title Case too ("Active Listings", "Min. Investment", "Refer & Earn", "View All").
- **Headlines** are short noun phrases or benefit statements; **sub‑copy** is one calm
  sentence that pays off the headline.
- **Numbers are the hero of the app.** Balances, ROI %, units and prices are large and
  prominent; supporting labels ("Portfolio Balance", "Units Left", "ROI") sit small and grey
  above/below them.
- **Emoji:** Used *sparingly and only* in friendly app greetings — e.g. the dashboard
  welcome "**Welcome, Ciroma 👋**". Not used in marketing copy, buttons, or data UI.
- **CTAs are direct verbs:** *Join Waitlist · Invest Now · Get Started · Save · Gift ·
  View All · Trade · Withdraw.*

**Representative copy (verbatim from the file):**
- Hero: *"Inclusive Real Estate Investing For All"* / *"Unlock the potential of real estate
  investment, regardless of your budget, and embark on a journey toward financial freedom."*
- Feature: *"Diversification — Reduce risk by owning parts of multiple properties instead of
  just one."*
- Feature: *"Accessible Real Estate Investing — Invest in fractional shares of global
  properties without breaking the bank."*
- App banner: *"Refer & Earn — Invite friends to use Fraqvest & earn amazing rewards."*
- Steps: *Sign Up → Browse Opportunities → Choose Investment → Buy Fractional Shares →
  Monitor & Manage Portfolio.*

---

## VISUAL FOUNDATIONS

**Overall feel:** architectural, premium‑but‑accessible, *editorial fintech*. Lots of white
space, big flat color blocks, square corners, and confident green. It reads more like a
modern property brochure than a typical neon crypto app.

### Color
- A **deep‑green world**: `#061E18` (near‑black green) for sidebars, footer and hero text;
  `#034C3C` primary brand green for headings, balances and big fills.
- **Soft, foody neutrals** instead of plain white/grey: pale **mint** `#EFF9F0`, pale
  **lime‑butter** `#FDFFE5` (top bars, banners), warm **cream** `#F0F3CA` (illustration
  fills). These warm the UI without color noise.
- **Olive/khaki** `#ABB06D` is the signature accent — it is the primary button and the active
  nav pill. **Orange** `#FA7921` is a louder secondary accent (filter chips, mobile dropdowns).
- Semantics are literal: **green `#00A51A` = positive / Successful / Active**, **red
  `#EB5757` = Failed / destructive**.
- Imagery is **warm, sunlit real‑estate photography** (bright daytime exteriors, clear blue
  skies, green lawns) — never moody or desaturated. It pairs with the green UI for an
  optimistic, "good weather, good investment" mood.

### Type
- One family does almost everything: **Ruberoid** (geometric sans), now self-hosted from
  `/fonts` (brand-supplied .ttf, all 9 weights + obliques). Inter is a minor UI-label
  secondary. *Sora is kept only as a metric-compatible fallback while Ruberoid loads.*
- **Big editorial display** (62–80px bold) on marketing; **40px medium** for balance numbers;
  **32px bold** app page titles; light‑weight (300) for all longer body copy, which gives the
  brand its airy, premium feel.
- See `colors_and_type.css` for the full scale and semantic roles.

### Shape, cards & borders
- **Square corners are a brand signature.** Buttons, inputs, property cards, stat cards and
  banners are almost all **radius 0**, hairline‑bordered (`1px #E0E0E0`) rather than shadowed.
  Rounding is reserved for **avatars / status pills (full pill)** and **floating glass cards
  (16px)**.
- Cards are **flat**: thin border, no/low shadow. Elevation appears only on genuinely
  floating elements (e.g. the hero's glass notification card uses
  `blur(44px)` + `0 4px 24px rgba(0,0,0,.15)` over `rgba(255,255,255,.4)`).
- **Property card pattern** (used everywhere): full‑bleed photo on top with floating
  white **Save / share / Gift** chips overlaid, a title + location row, then a hairline
  divider and a stats row (*Min. Investment · ROI · Units Left*).

### Layout & motifs
- Web app = **fixed dark‑green left sidebar (≈297px)** + pale‑butter top bar + white content.
- Mobile app = iOS status bar, big page title + bell, content, **fixed bottom tab bar**
  (dark green with an olive active pill).
- A recurring **geometric line motif** — interlocking right‑angle "pipe"/circuit paths in
  olive on cream — is used as a hero/section background texture (`assets/pattern-geometric.png`).
- Isometric, flat‑vector **illustrations** (a house + phone with a trading chart, a hand with
  keys, stacked cash) carry the marketing and onboarding screens.

### Motion, hover & press
- The source is static (Figma), so motion is **implied, not specified** — keep it restrained:
  short fades / 150–200ms ease for hovers, no bounce, no parallax. Treat it as a calm,
  institutional product.
- **Hover:** buttons darken/lighten ~6–8%; cards lift to the floating‑card shadow; nav items
  brighten text + show the active pill. **Press:** slight darken (no large scale change).
- Use of **transparency / blur** is limited to the one glass‑card pattern over photography —
  don't over‑apply it.

---

## ICONOGRAPHY

The Figma uses the **vuesax / Iconsax** icon set, predominantly the **twotone** weight (a
duotone line+fill style) with some **bold** (solid) variants. Most used: money‑3,
info‑circle, location, arrow‑left/down/right, money‑recive/send, notification‑bing, heart,
house, gift, search‑zoom‑in, wallet‑2, export, eye, filter, share, tick‑circle, timer.

**Substitution (flagged):** Iconsax is a commercial set and its individual glyphs in the
Figma are split into many vector sub‑paths, so clean SVGs could not be extracted. The kits
load **[Phosphor Icons](https://phosphoricons.com/) (duotone weight)** from CDN — its
two‑tone fill+stroke aesthetic is the closest faithful match to vuesax twotone, with solid
weights available where the original used bold. *If you own the Iconsax licence, replace the
Phosphor `<link>`/classes with your exported set.*

- Emoji: only the 👋 in the app greeting (see Content Fundamentals). No other emoji as icons.
- No icon webfont of the brand's own; no Unicode glyphs used as icons.

---

## Brand assets (`/assets`)
Real photography and textures copied straight from the Figma binary:
- `property-duplex.jpg`, `property-bungalow.jpg`, `property-porch.jpg` — the three catalogue
  property photos used across listings/portfolio.
- `hero-man.jpg` — landing hero (investor on phone).
- `avatar-ciroma.jpg` — sample user avatar.
- `pattern-geometric.png` — the olive‑on‑cream geometric line texture.

The **Fraqshares logo** is the official brand asset, supplied as transparent PNGs in four
variants:
- `logo-full-color.png` — green + olive mark with black "Fraqshares" wordmark (light bgs).
- `logo-white.png` — all-white (dark bgs).
- `logo-black.png` — all-black mono (light bgs).
- `logo-alternate.png` — olive-accent mark for dark surfaces.

Aspect ratio ≈ 5.86:1. The UI kits render it via `ui_kits/_shared/Logo.jsx`
(`<FraqvestLogo variant="white|color|black|alternate" size={px} />`).

> Note: the Figma product screens carry an earlier "Fraqvest" working wordmark; the official
> company brand is **Fraqshares** and these logo files supersede it.

---

## Index / manifest

| File | What it is |
|---|---|
| `README.md` | This document |
| `colors_and_type.css` | All color + type CSS variables, semantic classes, self-hosted Ruberoid `@font-face` |
| `fonts/` | Ruberoid brand font (9 weights × normal/oblique, .ttf) |
| `SKILL.md` | Agent‑Skill entry point (for use in Claude Code) |
| `assets/` | Official logos (4 variants) + real photography + texture |
| `preview/` | Small specimen cards that populate the Design System tab |
| `ui_kits/web-app/` | High‑fidelity investor **web dashboard** kit (sidebar, listings, overview…) |
| `ui_kits/mobile-app/` | iOS **mobile app** kit (portfolio, trade, onboarding…) |
| `ui_kits/landing-page/` | Marketing **website** kit (hero, features, How‑It‑Works, footer) |

> No slide template was present in the source, so no `slides/` were produced.
