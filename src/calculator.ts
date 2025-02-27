interface CalculatorOperators {
  add: () => number;
  subtract: () => number;
  divide: () => number;
  multiply: () => number;
}

const Calculator = (num1: number, num2: number): CalculatorOperators => {
  const leftOperand = num1;
  const rightOperand = num2;

  const isNumerical = () => {
    if (typeof leftOperand === "number" && typeof rightOperand === "number") {
      return true;
    } else {
      return false;
    }
  };

  const add = () => {
    if (isNumerical()) return leftOperand + rightOperand;

    return NaN;
  };

  const subtract = () => {
    if (isNumerical()) return leftOperand - rightOperand;

    return NaN;
  };

  const divide = () => {
    if (isNumerical()) return leftOperand / rightOperand;
    return NaN;
  };

  const multiply = () => {
    if (isNumerical()) return leftOperand * rightOperand;
    return NaN;
  };

  return {
    add,
    subtract,
    divide,
    multiply,
  };
};

export default Calculator;
