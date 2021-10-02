import path from 'path';

function getTarget() {
  return path.basename(path.resolve(__dirname, '..')) as 'es5' | 'es6';
}

export const TARGET = getTarget();
