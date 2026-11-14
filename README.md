# Sunset & Sear

A fictional upscale steakhouse website — dark sunset/fire theme, sidebar-driven
navigation (no scrolling), and **Ember**, an AI concierge built into the page.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page markup — sidebar nav + five pages (Home, Steaks, Sides, Story, Visit) and the Ember chat panel |
| `styles.css` | All styling — theme tokens, layout, cards, chat UI, animations, responsive rules |
| `js/app.js` | Site behavior — sidebar router (`goToPage`), mobile drawer, scroll-reveal animations |
| `js/ember.js` | Ember agent — menu data, multilingual rule-based fallback engine, and the live LLM client |

## Running it

No build step. Either open `index.html` directly, or serve the folder:

```powershell
python -m http.server 8080
# then visit http://localhost:8080
```

## How Ember works

- **Primary:** a real LLM via the free [Pollinations.ai](https://pollinations.ai)
  OpenAI-compatible endpoint (`POST https://text.pollinations.ai/openai`,
  `model: "openai"`). No API key required.
- **System prompt** includes the full menu (steaks, sides, prices,
  descriptions), hours, golden-hour info, and house rules (walk-ins only, no
  chicken/fish/dessert, etc.). Replies come back in the guest's language.
- **Memory:** the last ~20 messages are sent as chat history.
- **Fallback:** if the API is unreachable or times out (15 s), Ember silently
  drops back to the built-in rule engine (`replyFor`), which handles menu
  lookups, prices, hours, recommendations, and honest "we don't have that"
  answers in English, Spanish, French, German, Portuguese, and Italian.

## Notes

- All menu items, prices, and restaurant details are **fictional**.
- Animations are GPU-friendly (`transform`/`opacity` only) and respect
  `prefers-reduced-motion`.
- To use a paid model instead, swap the `fetch` in `llmReply()` for your
  provider's API — keep it behind a backend proxy so the key isn't exposed.
