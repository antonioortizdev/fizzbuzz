import fizzBuzz from "./src/fizzBuzz";

const print = (until: number) => {
    for (let i = 0; i <= until; i++) {
        console.log(`${i}: `, fizzBuzz(i) )
    }
}

const main = () => {
    print(100);
}

main();