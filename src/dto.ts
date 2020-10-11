type IsOptional<T> = Extract<T, undefined> extends never ? false : true

export type Dto<T> = IsOptional<T> extends true ? Exclude<T, undefined> | null : T
