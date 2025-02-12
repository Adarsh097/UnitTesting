import {describe, expect, it} from "@jest/globals";
import { sum } from "../index";

describe('sum module', () =>{
    it('add 1 + 2 equal 3', () => {
        expect(sum(1,2)).toBe(3);
    });
    
    it('add 5 + 4 equal 9', () =>{
        const finalAns:number = sum(5,4);
        expect(finalAns).toBe(9);

    })

    it('add 5 + 10 equal 15', () =>{
        const finalAns:number = sum(5,10);
        expect(finalAns).toBe(15);

    })
});