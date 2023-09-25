/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and1` give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    if (typeof number !== 'number') {
      throw new Error('Invalid input: not a number');
    }
    this.result += number;
  }

  subtract(number) {
    if (typeof number !== 'number') {
      throw new Error('Invalid input: not a number');
    }
    this.result -= number;
  }

  multiply(number) {
    if (typeof number !== 'number') {
      throw new Error('Invalid input: not a number');
    }
    this.result *= number;
  }

  divide(number) {
    if (typeof number !== 'number') {
      throw new Error('Invalid input: not a number');
    }
    if (number === 0) {
      throw new Error('Division by zero is not allowed');
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Remove extra spaces and validate the input
    const sanitizedExpression = expression.replace(/\s+/g, '').replace(/[^+\-*/()\d.]/g, '');

    // Check if the sanitized expression is empty or contains invalid characters
    if (!sanitizedExpression || /[^+\-*/()\d.]/.test(sanitizedExpression)) {
      throw new Error('Invalid expression');
    }

    try {
      // Evaluate the sanitized expression using eval()
      const calculatedResult = eval(sanitizedExpression);

      // Check if the result is NaN or Infinity
      if (isNaN(calculatedResult) || !isFinite(calculatedResult)) {
        throw new Error('Invalid expression');
      }

      this.result = calculatedResult;
    } catch (error) {
      throw new Error('Invalid expression');
    }
  }
}

module.exports = Calculator;