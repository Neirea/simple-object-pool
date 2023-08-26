# Simple Object Pool

Super lightweight implementation of factory-based object pool.

## Library API

```js
import ObjectPool from "simple-object-pool";

const objPool = new ObjectPool(() => {
    return { hello: "world" };
});
```

### Get objects from pool

```js
const obj1 = objPool.get();
const obj2 = objPool.get();
const obj3 = objPool.get();
```

### Put objects back into the pool

```js
objPool.release(obj1);
// put multiple objects back into the pool
objPool.releaseAll([obj2, obj3]);
console.log(objPool.size()); // 3
```

### Delete all objects in a pool

```js
objPool.clear();
console.log(objPool.size()); // 0
```

## License

[![License](https://img.shields.io/badge/license-MIT-a1356a)](LICENSE)

All code and documentation are (c) 2023 Eugene Shumilin and released under the [MIT License](http://getify.mit-license.org/). A copy of the MIT License [is also included](LICENSE).
