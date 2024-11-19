export const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
  //   return a + b;
};

export const subtract = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a - b;
};

export const multiply = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a * b;
};

export const divide = (a, b) => {
  if (b === 0) {
    if (a > 0) return Infinity;
    if (a < 0) return -Infinity;
    return NaN; // 0 / 0 returns NaN
  }
  if (isNaN(a) || isNaN(b)) {
    return NaN;
  }
  return a / b;
};
