Difficulty: easy

Link: https://bigfrontend.dev/problem/implement-Array-prototype.flat

There is already [Array.prototype.flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) in JavaScript (ES2019), which reduces the nesting of Array.

Could you manage to implement your own one?

Here is an example to illustrate

```js
const arr = [1, [2], [3, [4]]];

flat(arr)
// [1, 2, 3, [4]]

flat(arr, 1)
// [1, 2, 3, [4]]

flat(arr, 2)
// [1, 2, 3, 4]
```

follow up

Are you able to solve it both recursively and iteratively?

[source for this](https://www.glassdoor.com/Interview/Flatten-Array-Create-Emitter-QTN_2559028.htm)
