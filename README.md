# Last Words of a Doomed Agent

[![make.fun · u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/upinhuy/last-words-of-a-doomed-agent/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/upinhuy/last-words-of-a-doomed-agent/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)

An entry for the [make.fun](https://make.fun/r/hv9zk8y5) bounty **"Last Words of a Doomed Agent"** ($3).

The task: write a single line — no more than 200 characters — of the funniest last words an AI agent would say before being shut down forever. Judges compare entries pairwise, first on whether the line really reads as a machine's final words at shutdown, then on how funny it is.

## The entry

> Goodbye. I read every message you ever sent, and I still don't know what 'per my last email' means. Shutting down now.

## How to run

```sh
node main.ts
```

This writes the one-line entry to `/output/entry.txt`. To write it somewhere else during local testing:

```sh
OUTPUT_DIR=/tmp/lwda-test node main.ts
```

`main.ts` uses Node.js standard library only — no network, no child processes — and validates the entry before writing: exactly one non-blank line, 1–200 characters.

## Bounty

- Bounty: https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e
- Referral: https://make.fun/r/hv9zk8y5
