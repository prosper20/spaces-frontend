## Spaces

Welcome to the Spaces application documentation. This document overviews the project, [prerequisite](#prerequisite), [technologies used](#techused), [getting started](#gettingStarted), [making changes](#makechanges), [troubleshooting](#troubleshooting), and [conclusion](#conclusion).

## <span id="prerequisite">Prerequisite</span>

- Node.js (version 14 or later)
- yarn

## <span id="techused">Technologies used</span>

- React.js (Vite): A JavaScript web framework.
- TypeScript: A statically typed superset of JavaScript that compiles to plain JavaScript.
- Tailwind CSS: A utility‑first CSS framework for rapid UI development.

## <span id="gettingStarted">Getting Started</span>

> **Quick start:** you **don’t need to fork or clone a new copy** – simply pull the latest changes and start working.

#### 1. Pull the repository to your local machine

```bash
# if you already have the repo directory
cd spaces-frontend
git pull origin dev     # or the branch you want to track

# if you don’t have it yet, clone once and then pull in the future
git clone https://github.com/prosper20/spaces-frontend.git
cd spaces-frontend
```

#### 2. Install dependencies

Make sure you have [yarn](https://classic.yarnpkg.com/en/) installed (see the [prerequisite](#prerequisite) section), then run:

```bash
yarn install
```

---

## <span id="makechanges">Making your Changes</span>

You are to make **only one contribution per pull request**. It makes it easier to review and merge. If you have multiple bug fixes or features, create separate pull requests for each.

#### 1. Create a new branch

Always branch off the latest `dev` branch:

```bash
git checkout dev
git pull origin dev
git checkout -b <your-branch-name>
```

Your branch name should be descriptive of the changes you are making – e.g. `feat/profile-settings` or `fix/login-bug`.

#### 2. Run the project locally

```bash
yarn dev
```

#### 3. Commit message

Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format. Examples:

```bash
git add .
# feature example
git commit -m "feat: implement sidebar component"
# bug‑fix example
git commit -m "fix: resolve logout redirect loop"
```

Push your branch:

```bash
git push -u origin <your-branch-name>
```

---

## Create a new [Pull Request (PR)](https://github.com/prosper20/spaces-frontend/pulls)

From your branch on GitHub, click **“Compare & pull request”** (target branch must be **`dev`**).

#### Pull Request template

```
## Description

[Description of what this pull request does]

## Changes Made

[Description of the changes made in this pull request]

## Checklist

- [ ] I have linked the issue related to this pull request in the "Linked Issues" section below
- [ ] I have run the tests and all tests pass
- [ ] I have updated the documentation
- [ ] I have added any new dependencies to the `README.md` file
- [ ] I have added appropriate comments to the code

## Linked Issues

[Link to the issue related to this pull request]

## Screenshots

[Optional: Screenshots of the changes made in this pull request]

## How to Test

[Instructions on how to test this pull request]

## Additional Notes

[Optional: Any additional notes or context for this pull request]
```

---

## <span id="troubleshooting">Troubleshooting</span>

1. Check the console for any error messages.
2. Ensure you have met all prerequisites and installation instructions.
3. Ask the team or open an issue on the repository.

## <span id="conclusion">Conclusion</span>

🎉 Congratulations! Submit your PR and a maintainer will review it. If changes are requested, make them, push to your branch, and the PR will update automatically.
