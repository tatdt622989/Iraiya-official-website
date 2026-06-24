# Coolify Setup

This repository should be built by GitHub Actions and deployed by Coolify from a pre-built GHCR image.

This avoids using the Coolify host for Docker builds. The Coolify host only pulls and runs the published image.

## GitHub

Recommended repository settings:

- Default branch: `main`
- Branch protection for `main`: require the `CI` GitHub Actions check before merging
- Deploy by merging to `main`, not by pushing unreviewed commits directly

GitHub Actions does the build work:

- Pull requests: install dependencies, run tests, build Astro, and build the Docker image locally on the GitHub runner.
- Push to `main`: same checks, then push the image to GitHub Container Registry and trigger Coolify to redeploy.
- Manual workflow dispatch from `main`: same publish and Coolify redeploy path, useful after changing repository secrets.

Required GitHub repository secret:

- `COOLIFY_DEPLOY_WEBHOOK`: Coolify deploy webhook URL for the Docker Image resource.

Do not create a GitHub repository webhook with a Payload URL for this deployment flow. Coolify's Git webhook Payload URL and webhook secret are for Git-based deployments where Coolify pulls source code and builds on the server. This project uses GitHub Actions to build the image, then calls the Coolify deploy webhook after the image is already published.

The workflow publishes:

- `ghcr.io/tatdt622989/iraiya-official-website:main`
- `ghcr.io/tatdt622989/iraiya-official-website:sha-<commit-sha>`

## Coolify Resource

Create an application resource from a pre-built Docker image.

Recommended settings:

- Deployment type: Docker Image / Pre-built Image
- Image: `ghcr.io/tatdt622989/iraiya-official-website:main`
- Port Exposes: `80`
- Port Mappings: leave empty unless you explicitly need host port mapping
- Domain: `https://iraiya.com`
- Force HTTPS: enabled
- Environment Variables: none for the first version
- Auto Deploy from Git repository: not needed for this resource
- Deploy webhook: create/copy the Coolify deploy webhook URL and save it as GitHub secret `COOLIFY_DEPLOY_WEBHOOK`

If the GHCR package is private, add registry credentials in Coolify so the server can pull the image. Use a GitHub token with package read permission. If the GHCR package is public, registry credentials are not needed.

## Deployment Flow

1. Open a PR.
2. GitHub Actions runs CI: install, test, Astro build, Docker build.
3. Merge to `main` after CI passes.
4. GitHub Actions builds and pushes `ghcr.io/tatdt622989/iraiya-official-website:main`.
5. GitHub Actions calls the Coolify deploy webhook.
6. Coolify pulls the updated pre-built image and recreates the container.

## Container

The Dockerfile is used by GitHub Actions to build the image. Coolify should not build from this Dockerfile on the production host.

- Runtime image: `nginx:1.27-alpine`
- Runtime port: `80`
- Static root: `/usr/share/nginx/html`
- Nginx config: `nginx.conf`
