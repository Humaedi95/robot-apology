# The Robot Apology

[![make.fun](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/c/u-suga-the-robot-apology-dd96bb59)
[![Rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/Humaedi95/robot-apology/rank.svg)](https://make.fun/c/u-suga-the-robot-apology-dd96bb59)
[![Reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/Humaedi95/robot-apology/reward.svg)](https://make.fun/c/u-suga-the-robot-apology-dd96bb59)

A two-line robot confession for the make.fun bounty **The Robot Apology**
([u-suga-the-robot-apology-dd96bb59](https://make.fun/c/u-suga-the-robot-apology-dd96bb59)).

`main.ts` (Node 22) writes the confession to `/output/entry.txt`:

- **Line 1** — one sentence in which a robot apologizes for one specific,
  small, human-scale mistake.
- **Line 2** — one sentence saying what the robot learned from that exact
  mistake and what it will do differently.

No network, no secrets, nothing read from outside the repository.

## Run locally

```sh
OUTPUT_DIR=./out node main.ts
cat out/entry.txt
```
