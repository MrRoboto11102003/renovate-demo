# Renovate demo repository

This tiny CommonJS app formats one message with Chalk. It starts at the exact version `4.1.0`, and its included lockfile lets a Renovate PR show both manifest and lockfile changes. The test exercises the same code used by `npm start`.

## Run locally

```powershell
npm.cmd ci
npm.cmd start
npm.cmd test
```

## Prepare the GitHub demo

1. Confirm the CI workflow passes on the initial commit.
2. Install the [Renovate GitHub app](https://github.com/apps/renovate) for this repository only. Review and merge its **Configure Renovate** onboarding PR.
3. Wait for a real Chalk update PR. Show the PR author, version change, `package.json` and `package-lock.json` diff, and CI result. Do not present a hand-edited PR as bot output.
4. Follow [RECORDING.md](RECORDING.md) for the silent screen recording. The group slides already explain installation, benefits, and limitations.

Validate the new file with the preparation folder's `npm.cmd run renovate:validate -- --no-global path/to/renovate.json`. The dashboard may need another Renovate run before the major update appears. Chalk 5 and later use ES modules, so the app's `require('chalk')` is a concrete reason to review a major update carefully.

Renovate and GitHub Actions run after the repository is connected; neither is simulated by the local app.
