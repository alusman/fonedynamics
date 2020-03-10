import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  public getItemAsString(key: string): string {
    return localStorage.getItem(key);
  }

  public getItemAsBoolean(key: string, failValue?: boolean): boolean {
    try {
      return JSON.parse(localStorage.getItem(key)) || failValue;
    } catch {
      return failValue;
    }
  }

  public getItemObject<T extends object>(key: string): T {
    return JSON.parse(localStorage.getItem(key)) as T;
  }

  public setItem(key: string, val: string | object): void {
    if (typeof val === 'string') {
      localStorage.setItem(key, val);
    } else if (typeof val === 'object') {
      localStorage.setItem(key, JSON.stringify(val));
    }
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }

  public keyExists(key: string): boolean {
    return !!localStorage.getItem(key);
  }
}
