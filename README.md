# LaurenSettembrino Site

This repository contains the source code for laurensettembrino.com

## Local Setup

Pull down this repo, run `npm install`, then run `npm run dev`. This will start a local development server on port 3000.

## Deploying Updates

The site is updated by pushing to the `main` branch. Doing so triggers a Github Action which runs an export and pushes
the resulting assets up to the `production` branch, which is then used as the base branch for Github Pages.
