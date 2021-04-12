import isDivisible from "./isDivisible";

const fizzBuzz = (number: number) => {
    let result = "";
    if (number === 0) return 0;
    if (isDivisible(number, 3)) {
        result += "fizz";
    }
    if (isDivisible(number, 5)) {
        result += "buzz";
    }
    return result !== "" ? result : number;
};

export default fizzBuzz;
