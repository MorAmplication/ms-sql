import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type EmitWhereInput = {
  id?: StringFilter;
  testDe?: DecimalNullableFilter;
};
