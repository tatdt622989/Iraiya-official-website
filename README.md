# Iraiya Official Website

First static brand site for Iraiya / 伊萊雅.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- Static output

## Development

Install dependencies:

```bash
pnpm install
```

Run checks:

```bash
pnpm test
pnpm build
```

## Coolify Deployment

Recommended setup when the Coolify host should not spend resources building images:

- Deployment type: `Docker Image` / pre-built image
- Image: `ghcr.io/tatdt622989/iraiya-official-website:latest`
- Port: `80`
- Domain: `iraiya.com`
- Environment variables: none for the first version

GitHub Actions builds the Docker image and pushes it to GitHub Container Registry. Coolify only pulls and runs the pre-built image.

## GitHub CI

GitHub Actions runs CI for pull requests and publishes a container image on `main`:

- `pnpm install --frozen-lockfile`
- `pnpm test`
- `pnpm build`
- `docker build`
- push `ghcr.io/tatdt622989/iraiya-official-website:latest` and `:main` on `main`
- call Coolify deploy webhook after the image is pushed

Manual `workflow_dispatch` runs from `main` also publish the image and call Coolify, so a deploy can be retried without creating an empty commit.

## Deployment Flow

GitHub owns build; Coolify owns runtime deploy:

- GitHub Actions builds and pushes the image to GHCR.
- Coolify deploys from the pre-built image `ghcr.io/tatdt622989/iraiya-official-website:latest`.
- The GitHub secrets `COOLIFY_DEPLOY_URL` and `COOLIFY_API_TOKEN` trigger Coolify after image publish.
- Older `COOLIFY_DEPLOY_WEBHOOK` and `COOLIFY_DEPLOY_WEBHOOK_SECRET` names are not used.

If you want CI to be a hard gate before production deploys, protect `main` and require the GitHub CI check before merging.

See [docs/COOLIFY_SETUP.md](docs/COOLIFY_SETUP.md) for the exact Coolify fields to set.
