# Buffer constructor lint rule

A eslint rule for checking for `Buffer()` and `new Buffer()` usage.

Starting in Node.js 6.0.0, the `Buffer()` and `new Buffer()` constructor was
deprecated in favor of the new `Buffer.alloc()`, `Buffer.allocUnsafe()`, and
`Buffer.from()` construction methods due to usability and security concerns.

## buffer_constructor

The `buffer_constructor` rule checks for uses of `Buffer()` and `new Buffer()`.

### Example

File `sample.js`:

```js
// Invalid

new Buffer(1);
Buffer(1);

new Buffer('test');
Buffer('test');

// Valid

Buffer.alloc(1);
Buffer.allocUnsafe(1);
Buffer.from('test');
```

Configuration `.eslintrc`:

```js
{
  "rules": {
    "buffer_constructor": 2
  }
}
```

Running `eslint --rulesdir {path-to-rule} sample.js`

Generates:

```js
  3:1  error  Use of the Buffer() constructor has been deprecated. Please use either Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from()  buffer_constructor
  4:1  error  Use of the Buffer() constructor has been deprecated. Please use either Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from()  buffer_constructor
  6:1  error  Use of the Buffer() constructor has been deprecated. Please use either Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from()  buffer_constructor
  7:1  error  Use of the Buffer() constructor has been deprecated. Please use either Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from()  buffer_constructor

✖ 4 problems (4 errors, 0 warnings)
```
