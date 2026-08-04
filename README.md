# American Hair Club location pages

Vercel-ready Next.js site for the coded location pages that sit separately from the existing WordPress homepage.

## Routes

- `/locations/`
- `/pune/`
- `/bangalore/`
- `/vizag/`

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

## Before public launch

- Verify each branch address against the live Google Maps listing.
- Add the correct phone number, WhatsApp number, opening hours, map link, and real branch photos.
- Set `NEXT_PUBLIC_SITE_URL` to the final Vercel or custom-domain URL so the sitemap and robots file use the correct canonical host.
- Connecting these routes to `americanhairclubs.com/pune/`, `/bangalore/`, and `/vizag/` while keeping WordPress at the root requires a reverse-proxy or hosting routing change. The first deployment is therefore a separate Vercel preview/site.
