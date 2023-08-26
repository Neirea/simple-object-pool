type Factory<T> = (...args: any[]) => T;

export default class ObjPool<T> {
    private pool: T[] = [];
    private length: number = 0;

    constructor(public factory: Factory<T>) {}

    get(): T {
        if (this.length > 0) {
            return this.pool[--this.length];
        }
        return this.factory();
    }
    release(item: T): void {
        this.pool[this.length++] = item;
    }
    releaseMany(items: T[]): void {
        for (let i = 0; i < items.length; i++) {
            this.pool[this.length++] = items[i];
        }
    }
    size(): number {
        return this.length;
    }
    clear(): void {
        this.pool.length = 0;
        this.length = 0;
    }
    shrink(targetSize: number = 10): void {
        if (targetSize >= 0 && this.length > targetSize) {
            this.length = this.pool.length = targetSize;
        }
    }
}
