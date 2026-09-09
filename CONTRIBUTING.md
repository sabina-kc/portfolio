# Contributing

Thanks for your interest in this project! This repository hosts my personal
portfolio site, so it isn't generally open to outside feature contributions —
but bug reports, typo fixes, and accessibility/performance suggestions are
welcome.

## Reporting an issue

Please [open an issue](../../issues) and include:

- A clear description of the problem
- Steps to reproduce (if applicable)
- Screenshots, if it's a visual issue
- Your browser/OS, if relevant

## Submitting a change

1. Fork the repository
2. Create a branch: `git checkout -b fix/short-description`
3. Make your changes
4. Run the checks locally:
   ```bash
   npm install
   npm run lint
   npm run build
   ```
5. Commit using a clear, descriptive message
6. Open a pull request describing what changed and why

## Code style

- TypeScript, formatted per the project's ESLint config (`npm run lint`)
- Keep changes focused and minimal

## Code of Conduct

This project follows the [Code of Conduct](CODE_OF_CONDUCT.md). By
participating, you agree to abide by its terms.
