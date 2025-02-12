import { describe, it, expect,vi} from "vitest";
import request from "supertest";
import {app} from "../index"



// vi.mock("../db", () =>({
//     prisma: {sum:{create:vi.fn()}}
// }))   this is without deepmocking

vi.mock("../db") // this is with the deepmocking
describe("POST /sum", () =>{
    it("should return the summ of two numbers", async() =>{
        const res = await request(app).post("/sum").send({
            a:1,
            b:2
        });
        
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    });

    it("should return the summ of two numbers", async() =>{
        const res = await request(app).post("/sum").send({
            a:["isjfkjkjdskfj"]
            
        });
        
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Incorrect Inputs");
    });

})

