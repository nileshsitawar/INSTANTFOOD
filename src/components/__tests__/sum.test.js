import { sum } from "../sum"
 //in place of test we can use (it) keyword also its one and the same thing
test("Sum fxn should calculate the sum of two numbers",() =>{
    const result = sum(3,4);


    //Assertion
    expect(result).toBe(7);

    
})