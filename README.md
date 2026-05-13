# Agentic Movers

AI-powered multi-agent landing page for Bratschke Solutions GmbH / agentic-movers.com.

## What it does

Single-page marketing site showcasing AI agent products — self-healing, multi-agent orchestration, 24/7 autonomous execution. Serves as the public-facing product page for the CLAW token and SpockyMagicAI platform.

## Tech Stack

- Pure HTML/CSS/JS (single `index.html`, no build step)
- Hosted on netcup / Vercel

## Development

```bash
# Serve locally
python3 -m http.server 8080

# Open in browser
open http://localhost:8080
```

## Testing

Playwright E2E tests are in `tests/e2e/`. To run:

```bash
npm install
npx playwright install --with-deps
npx playwright test
```

## Security

- No `.env` files are committed — see `.gitignore`
- API keys are read from environment variables only