import { Decimal } from "decimal.js";

export type Emit = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  testDe: Decimal | null;
};
