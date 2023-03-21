import execa from 'execa';
import isGit from 'is-git-repository';

const processCwd = process.cwd();

const checkLength = ({
  stdout,
}: {
  stdout: string;
}): boolean => stdout.length > 0;

const isGitDirty = (cwd = processCwd): boolean | null => {
  if (!isGit(cwd)) {
    return null;
  }

  try {
    execa.commandSync('git fetch --all', { cwd });
    const isLocalDirty = checkLength(execa.commandSync('git status --short', { cwd }));
    const isRemotePulled = checkLength(execa.commandSync('git rev-list --count --left-only @\'{u}\'...HEAD', { cwd }));
    return isLocalDirty || isRemotePulled;
  } catch (e) {
    return null;
  }
};

export default isGitDirty;
