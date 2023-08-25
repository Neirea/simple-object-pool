type Factory<T> = (...args: any[]) => T;
export default class ObjPool<T> {
    factory: Factory<T>;
    private pool;
    private length;
    constructor(factory: Factory<T>);
    get(): T;
    release(item: T): void;
    releaseMany(items: T[]): void;
    size(): number;
    clear(): void;
}
export {};
