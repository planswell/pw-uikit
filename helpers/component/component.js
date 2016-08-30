const changeCase = require('change-case');
const copyDir = require('copy-dir');
const fs = require('fs');
const gitConfig = require('git-config');
const path = require('path');
const replace = require('replace');

if (!process.argv[2]) {
  process.stderr.write('No name specified! (usage: npm run component "new-component-name" ["author"] ["author email"])\n');
  process.exit(1);
}

let gitUser;
let gitEmail;

try {
  const config = gitConfig.sync();
  gitUser = config.user.name;
  gitEmail = config.user.email;
} catch (e) {
  gitUser = null;
  gitEmail = null;
}

const name = changeCase.paramCase(process.argv[2]);
const user = process.argv[3] || gitUser || 'Planswell';
const email = process.argv[4] || gitEmail || 'dev@planswell.ca';

const src = path.join(__dirname, '/template');
const dest = path.join(__dirname, `/../../packages/pw-component-${name}`);

try {
  fs.statSync(dest);
  process.stderr.write('Error: component already exists\n');
  process.exit(2);
} catch (e) {
  // Do nothing; if statSync throws an error, "dest" does not exist. That's good.
}

copyDir.sync(src, dest);

const replacements = [
  ['%name%', name],
  ['%nameclasscase%', changeCase.pascalCase(name)],
  ['%nametitlecase%', changeCase.titleCase(name)],
  ['%author%', user],
  ['%email%', email],
];

replacements.forEach(([key, val]) => {
  replace({
    regex: key,
    replacement: val,
    paths: [dest],
    recursive: true,
    silent: true,
  });
});
