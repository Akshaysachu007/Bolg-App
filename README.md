# Inkspire — React Blog Application

A beginner-friendly, responsive blog application inspired by the supplied editorial UI/UX moodboard. Built with **React, Vite, Tailwind CSS v3, Redux Toolkit, Context API, and React Router**. No backend, database, Express, or external API.

## Run locally

Requires Node.js 18+ (Node 20+ recommended).

```bash
npm install
npm run dev
```

Open the local address printed by Vite (usually `http://localhost:5173`). To verify the production build:

```bash
npm run build
npm run preview
```

## Required features

- `/` — homepage with cards, title search, category filter (combined), empty states.
- `/create` — controlled form with required fields and clear validation errors.
- `/blog/:id` — complete post, date, author, back link, edit and delete buttons; handles unknown IDs.
- `/edit/:id` — pre-filled validated edit form; handles unknown IDs.
- `*` — custom 404 page.
- Delete confirmation modal and success notifications.
- Responsive sidebar/drawer, dark/light mode, related stories.
- Posts are saved to browser `localStorage` (optional bonus requirement).

## Architecture

```text
src/
  components/     # Reusable Sidebar, Header, Hero, BlogCard, BlogForm,
                  # SearchBar, CategoryFilter, ConfirmDialog, EmptyState,
                  # MissingPost, Toast
  pages/          # HomePage, CreatePage, DetailPage, EditPage, NotFound
  context/        # UIContext: theme and notifications
  store/          # Redux Toolkit posts slice and store
  data/           # Sample blog posts and categories
  utils/          # Validation, localStorage, date/image helpers
  App.jsx         # Routes and overall layout
  main.jsx        # Providers and app bootstrap
  index.css       # Tailwind directives and a few reusable classes
public/images/    # Local images cropped from supplied visual reference
```

**Why two state-management tools?** Redux Toolkit stores the shared blog posts because several pages create, read, update and delete them. Context API handles simple cross-app UI state (theme and toast notifications). `useState` handles local form fields, dialog visibility and mobile menu visibility.

## How validation works

The form checks title (5–100 characters), author (at least 2), category (selected), description (10–220), and content (at least 20). Whitespace-only inputs fail. Errors appear beside their fields. A valid submit dispatches a Redux action and navigates to the right page. Editing preserves the original post ID and creation date.

## Editing the design

- Change colors and fonts: `tailwind.config.js`.
- Change reusable Tailwind component styles: `src/index.css`.
- Update a single blog card: `src/components/BlogCard.jsx`.
- Update the shared create/edit form: `src/components/BlogForm.jsx`.
- Add categories or sample posts: `src/data/samplePosts.js`.
- Adjust validation: `src/utils/validation.js`.

## Manual test checklist

1. Load home and inspect cards on desktop/mobile.
2. Create a valid post and confirm it appears immediately.
3. Try empty fields, short values and whitespace-only values; confirm errors.
4. Read a post, edit it and verify updates in both list and detail view.
5. Cancel a deletion, then confirm deletion and verify it disappears.
6. Search for a title; combine search with a category; clear filters.
7. Test no search matches, no posts (after deleting all), invalid `/blog/id`, invalid `/edit/id`, and unknown routes.
8. Refresh and verify localStorage persistence; test light/dark mode and mobile navigation.
9. Run `npm run build` and check browser console for errors.

## Image note

The bundled example images are **cropped from the UI reference image supplied for this project**, not downloaded from an API. For a public release, replace these demonstration images with original or properly licensed photography. New posts use a built-in cover image to keep this assignment frontend-only and simple.

## Submission

Push the project to GitHub, add screenshots of the home/create/detail/edit screens, and demonstrate CRUD, validation, search+filter, routes, Redux Toolkit and Context API. Be ready to explain your own code.
