# Silent demo recording

The group presentation explains what Renovate is, installation, benefits, and limitations. This video should show only the concrete result in this repository. Speak live while it plays; do not add recorded narration or repeat the slides as title cards.

## Before recording

1. Run `npm.cmd ci`, `npm.cmd start`, and `npm.cmd test` in this directory.
2. Push the initial commit and check that the GitHub Actions **CI** workflow passes.
3. Install the Renovate GitHub app for this repository, review and merge its **Configure Renovate** PR, then wait for a real Chalk update PR and its CI result.
4. Open the app code, the Renovate PR overview, **Files changed**, and **Checks** in browser/editor tabs. Hide notifications and personal information; enlarge the text enough to read in the video.

## Screen sequence (about 3 minutes, with time to talk live)

| Time | On screen | Short caption, if needed |
| --- | --- | --- |
| 0:00-0:25 | Run `npm.cmd start`, then show Chalk `4.1.0` in `package.json`. | `Starting version: Chalk 4.1.0` |
| 0:25-0:55 | Open the real Renovate PR. Pause on its author, title, and requested version. | `Renovate proposed this update` |
| 0:55-1:45 | Open **Files changed**. Point to the version in `package.json` and the matching `package-lock.json` change. | `Manifest and lockfile changed together` |
| 1:45-2:25 | Open **Checks**. Show the actual CI result and the workflow's `npm ci` / `npm test` steps. | `CI result for this PR` |
| 2:25-3:00 | Show `src/message.js` and the test. Return to the PR without merging it. | `Review the code before merging` |

Hold each screen long enough for the audience to read it. Let your live explanation carry the transitions. Do not record the GitHub app installation or general Renovate overview; those are in the group slides.

If there is no real update PR by recording time, use the real onboarding PR and label any expected update flow clearly as an example. Never present a manually edited PR or static example as Renovate output. Watch the exported video once to check order, legibility, and that no private information appears.
