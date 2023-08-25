"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObjPool {
    constructor(factory) {
        this.factory = factory;
        this.pool = [];
        this.length = 0;
    }
    get() {
        if (this.length > 0) {
            return this.pool[--this.length];
        }
        return this.factory();
    }
    release(item) {
        this.pool[this.length++] = item;
    }
    releaseMany(items) {
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
exports.default = ObjPool;
