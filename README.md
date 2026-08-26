# Staywell

A frontend-only hotel and room information website built with Next.js, TypeScript, Tailwind CSS, and mock data.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Production build

```bash
npm run build
```

The static site is generated in `out/`.

## Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Create a GitHub repository and push this project to it.
2. In the repository, open **Settings > Pages**.
3. Set the deployment source to **GitHub Actions**.
4. Push to the `main` branch, or run **Deploy Next.js to GitHub Pages** from the Actions tab.
5. Monitor the workflow in the **Actions** tab.

The workflow derives the repository base path automatically, so a project repository is served at:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/
```

For a custom domain, configure the domain in **Settings > Pages**, set `NEXT_PUBLIC_BASE_PATH` to an empty value in the deployment workflow, and set `NEXT_PUBLIC_SITE_URL` to the domain before building. Add the required DNS records at your domain provider. The app already uses `next/image` with static-hosting-safe unoptimized output.

## Environment variables

See `.env.example`:

- `NEXT_PUBLIC_BASE_PATH`: URL path prefix, such as `/hotel-view`; empty for local development and custom domains.
- `NEXT_PUBLIC_SITE_URL`: canonical site URL for deployment configuration.
