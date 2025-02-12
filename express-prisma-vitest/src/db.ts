import { PrismaClient } from "@prisma/client";
import { mockDeep, mockReset } from 'vitest-mock-extended'

export const prismaClient = mockDeep<PrismaClient>()  // this is done using deep mocking
 


// export const prisma = new PrismaClient();   this is done without deepmocking