"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObjPool {
    /**
     * Creates an object pool.
     * @param {Factory<T>} factory The factory function to create new objects.
     */
    constructor(factory) {
        this.factory = factory;
        this.pool = [];
        this.length = 0;
    }
    /**
     * Retrieves an object from the pool. Creates a new object if the pool is empty.
     * @returns {T} The retrieved object.
     */
    get() {
        if (this.length > 0) {
            return this.pool[--this.length];
        }
        return this.factory();
    }
    /**
     * Releases an object back into the pool.
     * @param {T} item The object to release.
     */
    release(item) {
        this.pool[this.length++] = item;
    }
    /**
     * Releases multiple objects back into the pool.
     * @param {T[]} items The objects to release.
     */
    releaseMany(items) {
        for (let i = 0; i < items.length; i++) {
            this.pool[this.length++] = items[i];
        }
    }
    /**
     * Gets the current size of the pool.
     * @returns {number} The size of the pool.
     */
    size() {
        return this.length;
    }
    /**
     * Clears the pool by removing all objects from it.
     */
    clear() {
        this.pool.length = 0;
        this.length = 0;
    }
    /**
     * Shrinks the pool to the specified size if it's larger.
     * @param {number} targetSize The desired size to shrink the pool to. Default is 10.
     */
    shrink(targetSize = 10) {
        if (targetSize >= 0 && this.length > targetSize) {
            this.length = this.pool.length = targetSize;
        }
    }
}
exports.default = ObjPool;
