/* eslint-disable no-console */
import { chalk } from '.';

export const log = (message: any = '') => {
  console.log(Array.isArray(message) ? message.join('\n\n') : message);
};

export const error = (message: any = '') => {
  log(chalk.red(message));
};

export const warn = (message: any = '') => {
  log(chalk.yellowBright(message));
};

export const success = (message: string = '', extra: string = '') => {
  log(`${chalk.green('success')} ${message} ${extra ? chalk.cyan(extra) : ''}`);
};

export const info = (message: string = '', extra: string = '') => {
  log(`${chalk.gray('info')} ${message} ${extra ? chalk.green(extra) : ''}`);
};

export const shell = (cmd: string = '') => {
  log(`${chalk.gray('$')} ${chalk.cyan(cmd)}`);
};

export const clear = () => {
  process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H');
};
