# is-git-dirty-remote-too

Checks synchronously if the git repository is clean and there are no unpulled changes on remote. This assumes that no files are added, untracked or modified.

## Installation

```sh
$ npm i is-git-dirty-remote-too --save-dev
```

## Usage

Returns:
- `true`: Files are added, untracked or modified
- `false`: No files are added, untracked or modified. Git is clean

```js
import isGitDirtyRemoteToo from 'is-git-dirty-remote-too';

isGitDirtyRemoteToo(); // true or false of process.cwd()
isGitDirtyRemoteToo('any/git/repo'); // true or false
```

```js
"scripts": {
  "pre-deploy": "is-git-dirty-remote-too",
}

```

## LICENSE

MIT
