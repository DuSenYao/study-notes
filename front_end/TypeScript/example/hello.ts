type T = { a?: string; readonly b: number };
// {a?: string; readonly b: number;}
type HMOT = { [P in keyof T]: T[P] };
