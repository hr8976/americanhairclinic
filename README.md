# American Hair Club location pages

Vercel-ready Next.js site for the coded location pages that sit separately from
the existing WordPress homepage.

## Routes

- `/locations/`
- `/pune/`
- `/bangalore/`
- `/vizag/`

`trailingSlash: true` is enabled, so these four URLs are the canonical form and
the slash-less variants 308-redirect to them.

## Local development

```bash
npm install
npm run dev
```

## Production verification

```bash
npm run build
npm run start
```

## Project structure

| Path                     | Purpose                                                                 |
| ------------------------ | ----------------------------------------------------------------------- |
| `data/locations.ts`      | Single source of truth for every branch: copy, FAQs, contact details and verification flags. |
| `lib/site.ts`            | Domain, brand asset and organisation-level contact constants.            |
| `lib/metadata.ts`        | Builds title / description / canonical / Open Graph / Twitter per page.  |
| `lib/structured-data.ts` | JSON-LD node builders, emitted as one `@graph` per page.                 |
| `components/`            | Shared location page, breadcrumbs and JSON-LD renderer.                  |

City copy lives only in `data/locations.ts`. Nothing city-specific is hardcoded
in a component, so adding a fourth branch means adding one array entry and one
route file.

## Unverified branch data

Every branch field starts as unverified in `data/locations.ts`:

```ts
verifiedFields: { ...UNVERIFIED }
```

While a flag is `false`, the corresponding value is **never rendered and never
placed in structured data**. The contact card falls back to a neutral notice
instead. The `LocalBusiness` (`HealthAndBeautyBusiness`) JSON-LD node is only
emitted once a branch has both a verified structured address and a verified
telephone number — see `canPublishLocalBusiness()`.

To publish a field, fill in the value **and** flip its flag:

```ts
phone: "+91 …",
verifiedFields: { ...UNVERIFIED, address: true, phone: true },
```

## Required before public launch

Per branch (Pune, Bangalore, Vizag), the following are still missing and must
be supplied by the business rather than guessed:

- [ ] Complete branch address, confirmed against the live Google Maps listing,
      including postal code, in the structured `postalAddress` form
- [ ] Verified branch phone number
- [ ] Verified branch WhatsApp number
- [ ] Opening hours (both display text and schema.org format)
- [ ] Google Maps URL and latitude / longitude
- [ ] Branch photographs, with dimensions, for the hero and gallery
- [ ] Official Google Business Profile URL
- [ ] Confirmed list of services actually offered at that branch
- [ ] Official social media profile URLs, if any, for `sameAs`

Site-wide:

- [ ] Set `NEXT_PUBLIC_SITE_URL` only if the pages are served from a host other
      than `americanhairclubs.com`. Canonical tags always point at the
      production domain; the sitemap and robots files follow the deployment.
- [ ] Connecting these routes to `americanhairclubs.com/pune/`, `/bangalore/`
      and `/vizag/` while keeping WordPress at the root requires a reverse
      proxy or hosting routing change. The first deployment is therefore a
      separate Vercel preview/site.
