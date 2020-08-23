# Randomath library
Just a simple JavaScript math library that creates random math examples of addition, subtraction, multiplication and division with fake answers and true ones.

# Usage
```javascript
const Randomath = require('randomath');
const math = new Randomath();
```

# Methods
### `getRandomAdd(times)` — returns a random addition example.
### `getRandomSubtract(times)` — returns a random subtraction example.
### `getRandomMultiply(times)` — returns a random multiplication example.
### `getRandomDivide(times)` — returns a random division example.
### `getRandomCompare(times)` — returns a random comparison example.
&nbsp;

### Output example of `getRandomAdd` method
```javascript
[
  {
    example: '48 + 39',
    answers: [ 91, 87, 90 ],
    answer: 87,
    answerId: 1
  }
]
```
&nbsp;

_Default number of examples is one. You can change it by replacing times to the number of repeats you need._
_For example `getRandomAdd(3)` will return 3 addition examples._
&nbsp;

_Each method returns an array of objects._