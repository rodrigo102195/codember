type Operator = "#" | "@" | "*";

type Operate = {
  [key in Operator]: (currentResult: number) => number;
};

const operate: Operate = {
  "#": (currentResult) => currentResult + 1,
  "@": (currentResult) => currentResult - 1,
  "*": (currentResult) => currentResult * currentResult,
};

const processExample = (example: string): string => {
  let result = 0;
  let stringResult = "";

  for (const currentChar of example) {
    if (currentChar === "&") {
      stringResult += result;
    } else {
      const operator = currentChar as Operator;
      result = operate[operator](result);
    }
  }

  return stringResult;
};

const example =
  "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

const finalResult = processExample(example);
console.log(`submit ${finalResult}`);
