[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

# Publishing to npm
- [Create an npm account and organization](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
- https://docs.npmjs.com/using-private-packages-in-a-ci-cd-workflow
- Publish manually `npm login --scope=@vdab` and `npm publish`
- [Publish automatically using an automation token](https://docs.npmjs.com/using-private-packages-in-a-ci-cd-workflow)


# Using Lerna
- Change some code
- Commit it (locally)
- Run `lerna version`

# Local development
- Change some code
- Run `npm run watch` for each component you are editing
- Run 'npm run start' for the mockup you are working on

# TODO
- Improve/avoid webpack generating an auxiliary asset for the awesome-app.css file