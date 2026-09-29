# Silent Renovate demo recording

The group slides explain Renovate's purpose, installation, benefits, and limitations. Use this video to show what actually happened in this repository. There is no recorded audio; speak live while the video plays. Keep captions short and pause long enough to read each screen.

## Evidence ready to show

- [PR #1: Chalk 4.1.0 to 4.1.2](https://github.com/MrRoboto11102003/renovate-demo/pull/1) was authored by Renovate. It changes `package.json` and `package-lock.json`; both CI test checks passed.
- [PR #4: Chalk 4.1.0 to 6.0.1](https://github.com/MrRoboto11102003/renovate-demo/pull/4) was also authored by Renovate and changes the same two files. CI failed with `TypeError: chalk.green is not a function` in `src/message.js:4`.
- The repo's CommonJS code uses `require('chalk')`. The major PR's release notes say Chalk 5 became pure ESM. Keep PR #4 open for the demo; do not merge a failing update just to finish the video.

## Screen sequence (about 3 to 4 minutes)

| Time | On screen | Optional caption |
| --- | --- | --- |
| 0:00-0:20 | Run `npm.cmd start` in this repo and show Chalk `4.1.0` in `package.json`. | `Starting version: 4.1.0` |
| 0:20-0:50 | Open PR #1. Pause on Renovate as author and the `4.1.2` title. | `PR #1: patch update` |
| 0:50-1:25 | Open **Files changed** on PR #1. Point to the `package.json` version and `package-lock.json` update. | `Both dependency files updated` |
| 1:25-1:50 | Show PR #1's two passing CI checks. | `CI passed` |
| 1:50-2:20 | Open PR #4. Show the `6.0.1` version in **Files changed**. | `PR #4: major update` |
| 2:20-3:05 | Show PR #4's failed CI check. Open the test job and pause on `TypeError: chalk.green is not a function`. | `CI caught a breaking change` |
| 3:05-3:30 | Show `src/message.js` line 4, then return to the open PR. | `Code review needed before merge` |

Before recording, open the repo and both PRs in tabs, zoom in until versions and checks are legible, and hide personal notifications. Rehearse once with your live explanation. After export, watch the silent video to check the screen order and text size.

This repo did not receive a **Configure Renovate** onboarding PR or a Dependency Dashboard issue. Do not include those screens or claim they appeared. The demo also has separate Renovate PRs for GitHub Actions updates; leave them out of this recording.
