type Factory<T> = (...args: any[]) => T;
export default class ObjPool<T> {
    factory: Factory<T>;
    private pool;
    private length;
    /**
     * Creates an object pool.
     * @param {Factory<T>} factory The factory function to create new objects.
     */
    constructor(factory: Factory<T>);
    /**
     * Retrieves an object from the pool. Creates a new object if the pool is empty.
     * @returns {T} The retrieved object.
     */
    get(): T;
    /**
     * Releases an object back into the pool.
     * @param {T} item The object to release.
     */
    release(item: T): void;
    /**
     * Releases multiple objects back into the pool.
     * @param {T[]} items The objects to release.
     */
    releaseMany(items: T[]): void;
    /**
     * Gets the current size of the pool.
     * @returns {number} The size of the pool.
     */
    size(): number;
    /**
     * Clears the pool by removing all objects from it.
     */
    clear(): void;
    /**
     * Shrinks the pool to the specified size if it's larger.
     * @param {number} targetSize The desired size to shrink the pool to. Default is 10.
     */
    shrink(targetSize?: number): void;
}
export {};
