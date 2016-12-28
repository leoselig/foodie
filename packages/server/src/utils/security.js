import {
  pbkdf2Sync,
  randomBytes
} from 'crypto';

import { security } from '../config';

export function hashPassword(plainTextPassword) {
  return pbkdf2Sync(
    plainTextPassword,
    security.SALT,
    10000,
    512,
    'sha512'
  ).toString('hex');
}

export function generateRandomToken() {
  return randomBytes(security.TOKEN_LENGTH / 2).toString('hex');
}
