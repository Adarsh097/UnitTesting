import { describe,it,expect,vi} from "vitest";
import request from "supertest";
import {app} from "../index"
import { prismaClient } from '../__mocks__/db'



vi.mock("../db");

describe("POST/Sum", () =>{
    it("should return the sum of two number", async() =>{
        prismaClient.sum.create.mockResolvedValue({  // this will use when database is returning something(outcomes of the function)
          id: 1,
          a: 1,
          b: 1,
          result: 3
        });
       

       vi.spyOn(prismaClient.sum,"create");  // this is spying used when we want to check the input behaviour also

       const res = await request(app).post("/sum").send({
            a:1,
            b:2,
            result: 3
       })

       expect(prismaClient.sum.create).toBeCalledWith({

        data:{

            a : 1,
            b : 2,
            result: 3
        }

       })

       expect(res.body.id).toBe(1);
       expect(res.statusCode).toBe(200);
       expect(res.body.answer).toBe(3);
    })
})