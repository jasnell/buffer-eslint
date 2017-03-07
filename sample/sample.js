// Invalid

new Buffer(1);
Buffer(1);

new Buffer('test');
Buffer('test');

// Valid

Buffer.alloc(1);
Buffer.allocUnsafe(1);
Buffer.from('test');

