import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type EventWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  description?: StringFilter;
  startDate?: DateTimeFilter;
  endDate?: DateTimeFilter;
  location?: StringFilter;
  sessions?: SessionListRelationFilter;
  testAuto?: IntNullableFilter;
};
