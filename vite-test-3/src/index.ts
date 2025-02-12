import express from 'express';
import {z} from 'zod';
export const app = express();
app.use(express.json());

const inputSum = z.object({
    a:z.number(),
    b:z.number()
})


app.post("/sum", (req:any,res:any) => {

    const paresedResponse = inputSum.safeParse(req.body);
    if(!paresedResponse.success){
        return res.status(411).json({
            message: "Incorrect Inputs"
        })
    }

    if(paresedResponse.data.a && paresedResponse.data.b){
        const answer = paresedResponse.data.a + paresedResponse.data.b;

        res.status(200).json({
            answer
        })
    }
     
})