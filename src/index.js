function eval() {
  // Do not use eval!!!
  return;
}

let whoFirst = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2
};

function expressionCalculator(expr) {
  let arr = expr.split("");
  let digit = [];
  let oper = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      digit.push(arr[i]);
    }
    if (isNaN(arr[i])) {
      oper.push(arr[i]);
      if (whoFirst[oper[i]] < whoFirst[oper[i - 1]]) {
        if (oper[i] === "*") {
          sum = digit[oper.length - 2] * digit[oper.length - 1];
        }
        if (oper[i] === "/") {
          sum = digit[oper.length - 2] / digit[oper.length - 1];
        }
        digit
          .pop()
          .pop()
          .push(sum);
        console.log(digit);
      }
      if (whoFirst[oper[i]] === whoFirst[oper[i - 1]]) {
        if (oper[i] === "*") {
          sum = digit[oper.length - 2] * digit[oper.length - 1];
        }
        if (oper[i] === "/") {
          sum = digit[oper.length - 2] / digit[oper.length - 1];
        }
        if (oper[i] === "+") {
          sum = digit[oper.length - 2] + digit[oper.length - 1];
        }
        if (oper[i] === "-") {
          sum = digit[oper.length - 2] - digit[oper.length - 1];
          digit;
        }
        digit
          .pop()
          .pop()
          .push(sum);
        console.log(digit);
      }
    }
  }

  if (oper.length === 1 && oper[0] === "/") {
    if (digit[1] === 0) {
      throw Error("Делить на ноль нельзя!");
    } else {
      sum = digit[0] / digit[1];
    }
  }
  if (oper.length === 1 && oper[0] === "*") {
    sum = digit[0] * digit[1];
  }
  if (oper.length === 1 && oper[0] === "+") {
    sum = digit[0] + digit[1];
  }
  if (oper.length === 1 && oper[0] === "-") {
    sum = digit[0] - digit[1];
  }
  console.log(digit);
  console.log(oper);
  return sum;
}
module.exports = {
  expressionCalculator
};
