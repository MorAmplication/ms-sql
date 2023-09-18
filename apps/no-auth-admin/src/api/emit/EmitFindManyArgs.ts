import { EmitWhereInput } from "./EmitWhereInput";
import { EmitOrderByInput } from "./EmitOrderByInput";

export type EmitFindManyArgs = {
  where?: EmitWhereInput;
  orderBy?: Array<EmitOrderByInput>;
  skip?: number;
  take?: number;
};
