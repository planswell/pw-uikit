# Planswell UIKit

Planswell UIKit is a collection of React UI components heavily inspired by CloudFlare's React UIKit. It is constructed
using [Lerna](https://github.com/lerna/lerna) to easily package many npm packages under packages for simplified
development and testing. The key differences with CloudFlare's implementation are:

 * Full ES6 everywhere
 * CSS Modules support
 * Test via mocha & enzyme (same as pw-react)

## Running/Building
To get the CSS working correctly you need to run `npm run lerna:bootstrap`

## React StoryBook Support
 `npm run storybook`

## Development

The development environment is [React Storybook](https://github.com/kadirahq/react-storybook). Run `npm start` to
launch React Storybook and you'll see composed stories there. Add a new story to an existing component for new
behaviours or add new story files for new components. See [React Storybook](https://github.com/kadirahq/react-storybook)
for more.

## Testing

Testing is done within each component by leveraging the webpack configuration with `internals/`. The entire testing
setup mirrors our pw-react project. Simply run the same scripts to test (such as `npm test` and `npm run test:watch`).

## Future Enhancement

 * PostCSS Integration
