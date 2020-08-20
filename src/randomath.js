const old = require('./old.json');

class Randomath {

    /**
     * Returns a random addition
     * @public
     * @param {number} times Number of repeats. Default is 1
     */
    getRandomAdd(times = 1) {
        // Main arrays and variables
        let fakeAnswers = [];
        let example = [];
        let spare = times;

        // Creating new examples. Default = 1 time
        for (let i = 0; i < times; i++) {
            // Two random number that will be added
            let a = Math.floor(Math.random() * 100);
            let b = Math.floor(Math.random() * 100);
        
            // True answer
            let answer = a + b;

            // An array for fake numbers
            let num = [];
        
            // Generate false answers
            for (let i = 0; i < 2; i++) {
                // New fake number. Either subtraction of the answer or addition
                num.push(a + b + Math.floor(Math.random() * 5));
                num.push(a + b - Math.floor(Math.random() * 5));

                let temp = num[Math.floor(Math.random() * num.length)];
                if (temp == answer || temp == old.add) {
                    return this.getRandomAdd(spare);
                } else {
                    fakeAnswers.push(temp);
                    old.add = temp;
                }
            }
            
            // Add true answer to false answers
            fakeAnswers.push(answer);

            // thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
            function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }

            shuffle(fakeAnswers)
        
            // Complete the array of example(s)
            example.push({
                example: a + ' + ' + b,
                answers: fakeAnswers,
                answer: answer,
                answerId: fakeAnswers.indexOf(answer)
            })
    
            // Clear false answers array. In case if you need to repeat the 
            // function more than one time.
            fakeAnswers = [];
        }
    
        // Return the result
        return example;
    }

    /**
     * Returns a random subtraction
     * @public
     * @param {number} times Number of repeats. Default is 1
     */
    getRandomSubtract(times = 1) {
        // Main arrays and variables
        let fakeAnswers = [];
        let example = [];
        let spare = times;
    
        // Creating new examples. Default = 1 time
        for (let i = 0; i < times; i++) {
            // Two random number that will be subtracted
            let a = Math.floor(Math.random() * 100);
            let b = Math.floor(Math.random() * 100);
        
            // True answer
            let answer = a - b;

            // An array for fake numbers
            let num = [];
        
            // Generate false answers
            for (let i = 0; i < 2; i++) {
                // New fake number. Either subtraction of the answer or addition
                num.push(a - b - Math.floor(Math.random() * 5));
                num.push(a - b + Math.floor(Math.random() * 5));

                let temp = num[Math.floor(Math.random() * num.length)];
                if (temp == answer || temp == old.sub) {
                    return this.getRandomSubtract(spare);
                } else {
                    fakeAnswers.push(temp);
                    old.sub = temp;
                }
            }
            
            // Add true answer to false answers
            fakeAnswers.push(answer);

            // thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
            function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }

            shuffle(fakeAnswers)
        
            // Complete the array of example(s)
            example.push({
                example: a + ' - ' + b,
                answers: fakeAnswers,
                answer: answer,
                answerId: fakeAnswers.indexOf(answer)
            })
            
            // Clear false answers array. In case if you need to repeat the 
            // function more than one time.
            fakeAnswers = [];
        }

        // Return the result
        return example;
    }

    /**
     * Returns a random multiplication
     * @public
     * @param {number} times Number of repeats. Default is 1
     */
    getRandomMultiply(times = 1) {
        // Main arrays and variables
        let fakeAnswers = [];
        let example = [];
        let spare = times;
    
        // Creating new examples. Default = 1 time
        for (let i = 0; i < times; i++) {
            // Two random number that will be multiplied
            let a = Math.floor(Math.random() * 100);
            let b = Math.floor(Math.random() * 100);
        
            // True answer
            let answer = a * b;

            // An array for fake numbers
            let num = [];
        
            // Generate false answers
            for (let i = 0; i < 2; i++) {
                // New fake number. Either subtraction of the answer or addition
                num.push(a * b + Math.floor(Math.random() * 3 + 1));
                num.push(a * b - Math.floor(Math.random() * 3 + 1));

                let temp = num[Math.floor(Math.random() * num.length)];
                if (temp == answer || temp == old.mult) {
                    return this.getRandomMultiply(spare);
                } else {
                    fakeAnswers.push(temp);
                    old.mult = temp;
                }
            }
            
            // Add true answer to false answers
            fakeAnswers.push(answer);

            // thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
            function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }

            shuffle(fakeAnswers)
        
            // Complete the array of example(s)
            example.push({
                example: a + ' * ' + b,
                answers: fakeAnswers,
                answer: answer,
                answerId: fakeAnswers.indexOf(answer)
            })
            
            // Clear false answers array. In case if you need to repeat the 
            // function more than one time.
            fakeAnswers = [];
        }

        // Return the result
        return example;
    }

    /**
     * Returns a random division
     * @public
     * @param {number} times Number of repeats. Default is 1
     */
    getRandomDivide(times = 1) {
        // Main arrays and variables
        let fakeAnswers = [];
        let example = [];
        let spare = times;
    
        // Creating new examples. Default = 1 time
        for (let i = 0; i < times; i++) {
            // Two random number that will be divided
            let a = Math.floor(Math.random() * 100);
            let b = Math.floor(Math.random() * 100);

            // Only divisible numbers
            if (a % b !== 0) {
                return this.getRandomDivide(spare);
            } 
        
            // True answer
            let answer = Math.round(a / b);

            // An array for fake numbers
            let num = [];
        
            // Generate false answers
            for (let i = 0; i < 2; i++) {
                // New fake number. Either subtraction of the answer or addition
                num.push(a / b + Math.floor(Math.random() * 3 + 1));
                num.push(a / b - Math.floor(Math.random() * 3 + 1));

                let temp = num[Math.floor(Math.random() * num.length)];
                if (temp == answer || temp == old.dev) {
                    return this.getRandomDivide(spare);
                } else {
                    fakeAnswers.push(temp);
                    old.dev = temp;
                }
            }
            
            // Add true answer to false answers
            fakeAnswers.push(answer);

            // thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
            function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }

            shuffle(fakeAnswers)
        
            // Complete the array of example(s)
            example.push({
                example: a + ' / ' + b,
                answers: fakeAnswers,
                answer: answer,
                answerId: fakeAnswers.indexOf(answer)
            })
            
            // Clear false answers array. In case if you need to repeat the 
            // function more than one time.
            fakeAnswers = [];
        }

        // Return the result
        return example;
    }

    /**
     * Returns a random comparison
     * @public
     * @param {number} times Number of repeats. Default is 1
     */
    getRandomCompare(times = 1) {
        // Main arrays 
        let example = [];
        let __answers = ['>', '<'];
    
        // Creating new examples. Default = 1 time
        for (let i = 0; i < times; i++) {
            // Two random number that will be compared
            let a = Math.floor(Math.random() * 100);
            let b = Math.floor(Math.random() * 100);

            // Variable for an answer
            let answer;
            
            // Define the answer
            if (a > b) {
                answer = '>';
            } else {
                answer = '<';
            }
        
            // Complete the array of example(s)
            example.push({
                example: a + ' ? ' + b,
                answers: __answers,
                answer: answer,
                answerId: __answers.indexOf(answer)
            })
        }

        // Return the result
        return example;
    }

}

module.exports = Randomath;