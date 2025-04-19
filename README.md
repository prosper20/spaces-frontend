## Spaces

Welcome to the JapaHubs application documentation. This document overviews the project, [prerequisite](#prerequisite), [technologies used](#techused) , [getting started](#gettingStarted), [making changes](#makechanges) , [troubleshooting](#troubleshooting), and [conclusion](#conclusion).

## <span id="prerequisite">Prerequisite</span>

- Node.js (version 14 or later)
- yarn

## <span id="techused">Technologies used</span>

- React.js(Vite): A JavaScript web framework.
- TypeScript: A statically typed superset of JavaScript that compiles to plain JavaScript.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.

## <span id="gettingStarted">Getting Started</span>

#### 1. Fork the repo

Click the fork button at the top right of the page to create a copy of this repo in your account, or go to the [Japahub-frontend fork page](https://github.com/japahubs/japahubs-frontend/fork).

After successfully forking the repo, you will be directed to your repo copy.

#### 2. Clone the forked repo

On your forked repo, click the button that says `Code`. It will open a dropdown menu. Copy the link in the input with the label `HTTPS` or `GitHub CLI` depending on your preferred cloning mode.

For HTTPS, open up your terminal and run the following command:

```bash
git clone <your-clone-link>
# or
git clone https://github.com/<your-username>/japahubs-frontend.git
```

Replace `<your-username>` with your GitHub username.

You can also clone the repo using the GitHub CLI. To do this, run the following command:

```bash
gh repo clone <your-username>/japahubs-frontend
```

#### 3. Set up the project

To set up the project, navigate into the project directory and open up the project in your preferred code editor.

Install the dependencies using yarn. You'll need to have [yarn](https://classic.yarnpkg.com/en/) installed; please take a look at the [prerequisite](#prerequisite) section.

```bash
yarn install
```

## <span id="makechanges">Making your Changes</span>

You are to make only one contribution per pull request. It makes it easier to review and merge. If you have multiple bug fixes or features, create separate pull requests for each.

#### 1. Create a new branch

Create a new branch from the `dev` branch. Your branch name should be descriptive of the changes you are making. E.g., `feat/profile-settings`. Some ideas to get you started:

- For Feature Updates: `feat/profile-settings`
- For Bug Fixes: `fix/profile-settings`

```bash
git checkout -b <your-branch-name>

```

#### 2. Run the project

```bash
yarn dev
```

#### 3. Commit Message

Your commit message should give a concise idea of the issue you are solving. It should follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) specification, as this helps us generate the project changelog automatically.

- feat: The new feature you're adding to a particular application
- fix: A bug fix
- style: Feature and updates related to styling
- refactor: Refactoring a specific section of the codebase
- test: Everything related to testing
- docs: Everything related to documentation
- chore: Regular code maintenance.

A traditional structure of commit looks like so:

```bash
<type>(optional scope): <description>
```

Eg:

```bash
git commit -m "feat: Implement sidebar component"
```

To commit your changes, run the following command:

```bash
git add .
git commit -m "<your_commit_message>"
```

Push your local commits to your remote repository

```bash
git push origin your-branch-name
```

## Create a new [Pull Request (PR)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

Go to the [Japahubs-frontend repository](https://github.com/japahubs/japahubs-frontend/tree/dev) and click the `compare & pull request` button or go to the [Pull Request page](https://github.com/japahubs/japahubs-frontend/pulls) and click on the `New pull request` button. It will take you to the `Open a pull request` page.

> Note: Make sure your PR points to the `dev` branch, not any other one.

#### Pull Request Format

> Copy this format below when making a pull request

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

## <span id="troubleshooting"> Troubleshooting </span>

If you encounter issues with the application, try the following troubleshooting steps:

1. Check the console for any error messages.
2. Review the project's documentation and make sure you are following all prerequisites and installation instructions.
3. Consult with other developers on the team or post a question to the project's issue tracker.

## <span id="conclusion">Conclusion</span>

🎉 Congratulations! You've made your pull request! A maintainer will review and merge your code or request changes. If changes are requested, make them and push them to your branch. Your pull request will automatically track the changes on your branch and update.
