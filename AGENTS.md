# AGENTS.md

Personal research website of Yun-Chen Liu (Alice). Astro static site, deployed to GitHub Pages from `main` (https://alice-liu-0514.github.io/).

## This repository is public

Before adding or changing any file, follow the content policy in `notes/REPO-CONTENT-POLICY.md` (local only, git-ignored). If that file is missing, apply these rules:

- Never commit keys, tokens, passwords, or `.env` files.
- Never commit phone numbers, addresses, ID numbers, or the private CV (only `public/cv/*-public.pdf`).
- Never commit research data, transcripts, recordings, participant or client information, or unpublished research details.
- Never copy source documents (PDF slides, applications, CVs) into the repo; quote only information that is already public.
- Do not name teammates, interviewees, or other people, or show their photos, without their consent.
- Keep notes, design briefs, and AI prompts in `notes/`, never in tracked files.
- Never use `git add -f` to bypass `.gitignore`.
- List any new non-code file for Alice to confirm before committing.

## Working here

- Content: `src/content/projects/*.md`, `src/pages/`, site settings and palette in `src/data/site.ts`.
- Build: `npm run build`. Pushing to `main` deploys automatically.
- Do not invent facts. Mark missing information as "Link to be added" or ask.
