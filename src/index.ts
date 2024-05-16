type Factory<T> = (...args: any[]) => T;

export default class ObjectPool<T> {
    private pool: T[] = [];
    private length: number = 0;

    /**
     * Creates an object pool.
     * @constructor
     * @param {Factory<T>} factory The factory function to create new objects.
     */
    constructor(public factory: Factory<T>) {}

    /**
     * Retrieves an object from the pool. Creates a new object if the pool is empty.
     * @returns {T} The retrieved object.
     */
    get(): T {
        if (this.length > 0) {
            return this.pool[--this.length];
        }
        return this.factory();
    }

    /**
     * Releases an object back into the pool.
     * @param {T} item The object to release.
     */
    release(item: T): void {
        this.pool[this.length++] = item;
    }

    /**
     * Releases multiple objects back into the pool.
     * @param {T[]} items The objects to release.
     */
    releaseMany(items: T[]): void {
        for (let i = 0; i < items.length; i++) {
            this.pool[this.length++] = items[i];
        }
    }

    /**
     * Gets the current size of the pool.
     * @returns {number} The size of the pool.
     */
    size(): number {
        return this.length;
    }

    /**
     * Clears the pool by removing all objects from it.
     */
    clear(): void {
        this.pool.length = 0;
        this.length = 0;
    }

    /**
     * Shrinks the pool to the specified size if it's larger.
     * @param {number} targetSize The desired size to shrink the pool to. Default is 10.
     */
    shrink(targetSize: number = 10): void {
        if (targetSize >= 0 && this.length > targetSize) {
            this.length = this.pool.length = targetSize;
        }
    }
}
