import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV === "development") {
  globalThis.prisma = db;
}

/*
  Explanation:
  - This file sets up a singleton instance of PrismaClient for database access.
  - `globalThis.prisma` is used to store the PrismaClient instance globally.
  - In development, this prevents creating multiple PrismaClient instances due to hot-reloading,
    which can cause warnings or errors.
  - In production, a new instance is created each time (since hot-reloading isn't an issue).
  - `db` is exported for use throughout your app to interact with the database.
*/

