# Hash Table
Author: Jesus

Hash Table Module:
Creates a hash table where items can be added, updated and removed.

Big-O: The big O for a hash table lookup is technically 0(1) since each key imediately finds the corresponding value once it is hashed. However, depending on the complexity of the hash function used retrieval time may slightly vary.

functions:

constructor: 
instantiates a new hash table of a particular size with a default of 1024.
```
let hashy = new HashTable(256)
```
hash:
contains the function used to hash the key value pairs.

```
hash(key)
```

set:
adds a new key value pair to hash table

```
set(key, value)
```

get:
retrieves the value when the key is put in.

```
get(key)
```
delte: 
deletes a key value pair from the hash-table by the key

```
delte(key)
```