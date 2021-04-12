import fizzBuzz from "../src/fizzBuzz";

describe("fizzBuzz", () => {
    it("should say 0 when passing 0", () => {
        expect(fizzBuzz(0)).toBe(0);
    });
    
    it("should say 1 when passing 1", () => {
        expect(fizzBuzz(1)).toBe(1);
    }); 

    it('should say "fizz" when passing 3', () => {
        expect(fizzBuzz(3)).toBe("fizz");
    });

    it('should say "buzz" when passing 5', () => {
        expect(fizzBuzz(5)).toBe("buzz");
    });

    it('should say "fizzbuzz" when passing 15', () => {
        expect(fizzBuzz(15)).toBe("fizzbuzz");
    });

    it('should say "fizz" when passing a multiple of 3', () => {
        expect(fizzBuzz(6)).toBe("fizz");
    });

    it('should say "buzz" when passing a multiple of 5', () => {
        expect(fizzBuzz(10)).toBe("buzz");
    });

    it('should say "fizzbuzz" when passing a multiple of 3 and 5', () => {
        expect(fizzBuzz(30)).toBe("fizzbuzz");
    });
});
