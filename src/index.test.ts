import ObjectPool from ".";

describe("ObjectPool", () => {
    test("should create an object pool and get/release objects", () => {
        const factory = () => ({});
        const pool = new ObjectPool(factory);

        const obj1 = pool.get();
        expect(obj1).toBeDefined();

        pool.release(obj1);
        expect(pool.size()).toEqual(1);
        expect(pool.get()).toBe(obj1);
    });

    test("should handle releasing multiple objects", () => {
        const factory = () => ({});
        const pool = new ObjectPool(factory);

        const obj1 = pool.get();
        const obj2 = pool.get();
        const obj3 = pool.get();

        const objs = [obj1, obj2, obj3];
        pool.releaseMany(objs);

        expect(pool.size()).toEqual(3);
        expect(pool.get()).toBe(objs[2]);
    });
});
