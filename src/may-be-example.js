/* @flow */

import { resolve } from 'path';

declare function getStringOrNumber(): string | number;
declare function getStringOrUndefined(): string | void;
declare function getMixed(): mixed;
declare function getObject(): {| name?: string |};

{
  const result = getStringOrNumber();

  result.toUpperCase();
  result.toFixed(1);

  if (typeof result === 'string') result.toUpperCase();
  if (typeof result === 'number') result.toFixed(1);
}

{
  const result = getStringOrUndefined();

  result.toLowerCase();

  if (result) result.toLowerCase();
}

{
  const result = getMixed();

  Math.abs(result);
  resolve(__dirname, result);

  if (typeof result === 'string') Math.abs(result);

  if (typeof result === 'number') Math.abs(result);
  if (typeof result === 'string') resolve(__dirname, result);
}

{
  const result = getObject();

  resolve(__dirname, result.login);
  resolve(__dirname, result.name);

  if (result.name) resolve(__dirname, result.name);
}
