// @flow

const STORAGE_ID = 'authToken';

const localStorage: Storage = window.localStorage;

export function getToken(): ?string {
  return localStorage.getItem(STORAGE_ID);
}

export function setToken(token: string): void {
  localStorage.setItem(STORAGE_ID, token);
}

export function deleteToken(): void {
  localStorage.removeItem(STORAGE_ID);
}
