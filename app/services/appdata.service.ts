import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})

export class AppDataService {
  private data: Map<string, string> = new Map();


  set(key: string, value: string) {
    this.data.set(key, value);
  }

  get(key: string): string | null {
    return this.data.get(key) || null;
  }

  remove(key: string) {
    this.data.delete(key);
  }

  clear() {
    this.data.clear();
  }
}
