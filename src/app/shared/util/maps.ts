// --------------------- string ---------------------------
export interface StringMap<T> {
  [key: string]: T;
}

export interface StringStringMap extends StringMap<string> {
}

export interface StringNumberMap extends StringMap<number> {
}

export interface StringBooleanMap extends StringMap<boolean> {
}

// --------------------- number ---------------------------
export interface NumberMap<T> {
  [key: number]: T;
}

export interface NumberStringMap extends NumberMap<string> {
}

export interface NumberNumberMap extends NumberMap<number> {
}

export interface NumberBooleanMap extends NumberMap<boolean> {
}

