type Factory<T> = (...args: any[]) => T;

export class ObjPool<T> {
    private pool: T[] = [];
    private size: number = 0;

    constructor(public factory: Factory<T>) {}

    get() {
        if (this.size > 0) {
            return this.pool[--this.size];
        }
        return this.factory();
    }
    release(item: T) {
        this.pool[this.size++] = item;
    }
    releaseMany(items: T[]) {
        for (let i = 0; i < items.length; i++) {
            this.pool[this.size++] = items[i];
        }
    }
    clear() {
        this.pool.length = 0;
        this.size = 0;
    }
}
