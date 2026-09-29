# Renovate demo repository

This tiny CommonJS app formats one message with Chalk. It starts at the exact version `4.1.0`, and its included lockfile lets a Renovate PR show both manifest and lockfile changes. The test exercises the same code used by `npm start`.

## Run locally

```powershell
npm.cmd ci
npm.cmd start
npm.cmd test
```

## Prepare the GitHub demo

1. The initial CI workflow passed, and the Renovate GitHub app has created real update PRs. It did not open a **Configure Renovate** PR in this repository.
2. Use [Chalk 4.1.2 PR #1](https://github.com/MrRoboto11102003/renovate-demo/pull/1) to show a passing update and [Chalk 6 PR #4](https://github.com/MrRoboto11102003/renovate-demo/pull/4) to show a failing major update.
3. Follow [RECORDING.md](RECORDING.md) for the silent screen recording. The group slides already explain installation, benefits, and limitations.

The `renovate.example.json` file is an inactive example of an approval rule for major updates. The recording uses the real PRs and CI results above; it does not need a Dependency Dashboard.

Renovate and GitHub Actions run after the repository is connected; neither is simulated by the local app.
