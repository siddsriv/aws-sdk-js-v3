import { Storage } from "./Storage";

/**
 * @internal
 */
export class InMemoryStorage implements Storage {
  constructor(private store: Record<string, string> = {}) {}

  getItem(key: string): string | null {
    if (key in this.store) {
      return this.store[key];
    }

    return null;
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  setItem(key: string, value: string): void {
    this.store[key] = value;
  }
}
