# Randomath library
Just a simple JavaScript math library that creates random math examples of addition, subtraction, multiplication and division with fake answers and true ones.

# Usage
```javascript
const Randomath = require('randomath');
const math = new Randomath();
```

# Methods
### `getRandomAdd(times)` — returns a random addition example.
### `getRandomSubtract(times)` — returns a random addition example.
### `getRandomMultiply(times)` — returns a random addition example.
### `getRandomDivide(times)` — returns a random addition example.

&nbsp;

## Output example of `getRandomAdd()` method
```javascript
[
  {
    equation: '97 + 16',
    answers: [ 113, 114, 115 ],
    answer: 113,
    isRound: false
  }
]
```

&nbsp;

_Default number of examples is one. You can change it by replacing times to the number of repeats you need._
_For example `getRandomAdd(3)` will return 3 addition examples._

&nbsp;

_Each method returns an array of objects._