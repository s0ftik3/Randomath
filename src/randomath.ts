import old from './old.json'

type difficulty = 0 | 1 | 2

interface Example<T> {
  example: string
  answers: T[]
  answer: T
  answerId: number
}

type Examples<T> = Example<T>[]

class Randomath {
  /**
   * Return a random mathematical addition example
   * @public
   * @param times defines the function's number of repeats
   * @param difficulty defines the example(s) difficulty. From 0 to 2 (0 - easy, 1 - medium, 2 - hard)
   */
  getRandomAdd(
    times: number = 1,
    difficulty: difficulty = 0
  ): Examples<number> {
    // Main arrays and variables
    let fakeAnswers = []
    let example = []

    // Creating new examples. Default = 1 time
    for (let i = 0; i < times; i++) {
      // Define the difficulty
      let k = difficulty === 0 ? 100 : difficulty === 1 ? 200 : 300

      // Two random number that will be added
      let a = Math.floor(Math.random() * k)
      let b = Math.floor(Math.random() * k)

      // True answer
      let answer = a + b

      // An array for fake numbers
      let num = []

      // Generate false answers
      for (let i = 0; i < 2; i++) {
        // New fake number. Either subtraction of the answer or addition
        num.push(a + b + Math.floor(Math.random() * 5))
        num.push(a + b - Math.floor(Math.random() * 5))

        let temp = num[Math.floor(Math.random() * num.length)]
        if (temp == answer || temp == old.add) {
          return this.getRandomAdd(times, difficulty)
        } else {
          fakeAnswers.push(temp)
          old.add = temp
        }
      }

      // Add true answer to false answers
      fakeAnswers.push(answer)

      // thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[array[i], array[j]] = [array[j], array[i]]
        }
      }

      shuffle(fakeAnswers)

      // Complete the array of example(s)
      example.push({
        example: a + ' + ' + b,
        answers: fakeAnswers,
        answer: answer,
        answerId: fakeAnswers.indexOf(answer),
      })

      // Clear false answers array. In case if you need to repeat the
      // function more than one time.
      fakeAnswers = []
    }

    // Return the result
    return example
  }

  /**
   * Return a random mathematical subtraction example
   * @public
   * @param times defines the function's number of repeats
   * @param difficulty defines the example(s) difficulty. From 0 to 2 (0 - easy, 1 - medium, 2 - hard)
   */
  getRandomSubtract(
    times: number = 1,
    difficulty: difficulty = 0
  ): Examples<number> {
    // Main arrays and variables
    let fakeAnswers = []
    let example = []

    // Creating new examples. Default = 1 time
    for (let i = 0; i < times; i++) {
      // Define the difficulty
      let k = difficulty === 0 ? 100 : difficulty === 1 ? 200 : 300

      // Two random number that will be added
      let a = Math.floor(Math.random() * k)
      let b = Math.floor(Math.random() * k)

      // True answer
      let answer = a - b

      // An array for fake numbers
      let num = []

      // Generate false answers
      for (let i = 0; i < 2; i++) {
        // New fake number. Either subtraction of the answer or addition
        num.push(a - b - Math.floor(Math.random() * 5))
        num.push(a - b + Math.floor(Math.random() * 5))

        let temp = num[Math.floor(Math.random() * num.length)]
        if (temp == answer || temp == old.sub) {
          return this.getRandomSubtract(times, difficulty)
        } else {
          fakeAnswers.push(temp)
          old.sub = temp
        }
      }

      // Add true answer to false answers
      fakeAnswers.push(answer)

      // thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[array[i], array[j]] = [array[j], array[i]]
        }
      }

      shuffle(fakeAnswers)

      // Complete the array of example(s)
      example.push({
        example: a + ' - ' + b,
        answers: fakeAnswers,
        answer: answer,
        answerId: fakeAnswers.indexOf(answer),
      })

      // Clear false answers array. In case if you need to repeat the
      // function more than one time.
      fakeAnswers = []
    }

    // Return the result
    return example
  }

  /**
   * Return a random mathematical multiplication example
   * @public
   * @param times defines the function's number of repeats
   * @param difficulty defines the example(s) difficulty. From 0 to 2 (0 - easy, 1 - medium, 2 - hard)
   */
  getRandomMultiply(
    times: number = 1,
    difficulty: difficulty = 0
  ): Examples<number> {
    // Main arrays and variables
    let fakeAnswers = []
    let example = []

    // Creating new examples. Default = 1 time
    for (let i = 0; i < times; i++) {
      // Define the difficulty
      let k = difficulty === 0 ? 100 : difficulty === 1 ? 200 : 300

      // Two random number that will be added
      let a = Math.floor(Math.random() * k)
      let b = Math.floor(Math.random() * k)

      // True answer
      let answer = a * b

      // An array for fake numbers
      let num = []

      // Generate false answers
      for (let i = 0; i < 2; i++) {
        // New fake number. Either subtraction of the answer or addition
        num.push(a * b + Math.floor(Math.random() * 3 + 1))
        num.push(a * b - Math.floor(Math.random() * 3 + 1))

        let temp = num[Math.floor(Math.random() * num.length)]
        if (temp == answer || temp == old.mult) {
          return this.getRandomMultiply(times, difficulty)
        } else {
          fakeAnswers.push(temp)
          old.mult = temp
        }
      }

      // Add true answer to false answers
      fakeAnswers.push(answer)

      // thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[array[i], array[j]] = [array[j], array[i]]
        }
      }

      shuffle(fakeAnswers)

      // Complete the array of example(s)
      example.push({
        example: a + ' * ' + b,
        answers: fakeAnswers,
        answer: answer,
        answerId: fakeAnswers.indexOf(answer),
      })

      // Clear false answers array. In case if you need to repeat the
      // function more than one time.
      fakeAnswers = []
    }

    // Return the result
    return example
  }

  /**
   * Return a random mathematical division example
   * @public
   * @param times defines the function's number of repeats
   * @param difficulty defines the example(s) difficulty. From 0 to 2 (0 - easy, 1 - medium, 2 - hard)
   */
  getRandomDivide(
    times: number = 1,
    difficulty: difficulty = 0
  ): Examples<number> {
    // Main arrays and variables
    let fakeAnswers = []
    let example = []

    // Creating new examples. Default = 1 time
    for (let i = 0; i < times; i++) {
      // Define the difficulty
      let k = difficulty === 0 ? 100 : difficulty === 1 ? 200 : 300

      // Two random number that will be added
      let a = Math.floor(Math.random() * k)
      let b = Math.floor(Math.random() * k)

      // Only divisible numbers
      if (a % b !== 0) {
        return this.getRandomDivide(times, difficulty)
      }

      // True answer
      let answer = Math.round(a / b)

      // An array for fake numbers
      let num = []

      // Generate false answers
      for (let i = 0; i < 2; i++) {
        // New fake number. Either subtraction of the answer or addition
        num.push(a / b + Math.floor(Math.random() * 3 + 1))
        num.push(a / b - Math.floor(Math.random() * 3 + 1))

        let temp = num[Math.floor(Math.random() * num.length)]
        if (temp == answer || temp == old.dev) {
          return this.getRandomDivide(times, difficulty)
        } else {
          fakeAnswers.push(temp)
          old.dev = temp
        }
      }

      // Add true answer to false answers
      fakeAnswers.push(answer)

      // thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[array[i], array[j]] = [array[j], array[i]]
        }
      }

      shuffle(fakeAnswers)

      // Complete the array of example(s)
      example.push({
        example: a + ' / ' + b,
        answers: fakeAnswers,
        answer: answer,
        answerId: fakeAnswers.indexOf(answer),
      })

      // Clear false answers array. In case if you need to repeat the
      // function more than one time.
      fakeAnswers = []
    }

    // Return the result
    return example
  }

  /**
   * Return a random mathematical comparison
   * @public
   * @param times defines the function's number of repeats
   * @param difficulty defines the example(s) difficulty. From 0 to 2 (0 - easy, 1 - medium, 2 - hard)
   */
  getRandomCompare(
    times: number = 1,
    difficulty: difficulty = 0
  ): Examples<string> {
    // Main arrays
    let example = []
    let __answers = ['>', '=', '<']

    // Creating new examples. Default = 1 time
    for (let i = 0; i < times; i++) {
      // Define the difficulty
      let k = difficulty === 0 ? 100 : difficulty === 1 ? 200 : 300

      // Two random number that will be added
      let a = Math.floor(Math.random() * k)
      let b = Math.floor(Math.random() * k)

      // Define the answer
      let answer = a > b ? '>' : a < b ? '<' : '='

      // Complete the array of example(s)
      example.push({
        example: a + ' ? ' + b,
        answers: __answers,
        answer: answer,
        answerId: __answers.indexOf(answer),
      })
    }

    // Return the result
    return example
  }
}

export default Randomath
