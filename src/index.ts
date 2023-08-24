type Factory<T> = (...args: any[]) => T;

export default class ObjPool<T> {
    private pool: T[] = [];
    private length: number = 0;

    constructor(public factory: Factory<T>) {}

    get() {
        if (this.length > 0) {
            return this.pool[--this.length];
        }
        return this.factory();
    }
    release(item: T) {
        this.pool[this.length++] = item;
    }
    releaseMany(items: T[]) {
        for (let i = 0; i < items.length; i++) {
            this.pool[this.length++] = items[i];
        }
    }
    size() {
        return this.length;
    }
    clear() {
        this.pool.length = 0;
        this.length = 0;
    }
}
