import fizzBuzz from "./src/fizzBuzz";

const print = (until: number) => {
    for (let i = 0; i <= until; i++) {
        console.log(`${i}: `, fizzBuzz(i) )
    }
}

const main = () => {
    let until = parseInt(process.argv[2]);
    until = !isNaN(until) ? until : 100;
    print(until);
}

main();