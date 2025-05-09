import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  get(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(key);
    }
    return null;
  }
  set(key: string, value: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, value);
    }
    return null;
  }
  remove(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
  }
  clear() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
    return null;
  }
}
