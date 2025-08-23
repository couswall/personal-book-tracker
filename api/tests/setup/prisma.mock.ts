jest.mock("@data/postgres", () => ({
    prisma: {
      book: {
        findFirst: jest.fn(),
        findUnique: jest.fn(),
        create: jest.fn(),
      },
    },
  }));
  
import { prisma } from "@data/postgres";
export { prisma };
  