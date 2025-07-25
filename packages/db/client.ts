import { PrismaClient } from "./generated/client";

declare global {
  var db: PrismaClient | undefined;
}

const db = global.db || new PrismaClient({ log: ["error"] });

if (process.env.NODE_ENV !== "production") global.db = db;

export { db };
