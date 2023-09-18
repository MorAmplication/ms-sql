import { SessionCreateNestedManyWithoutEventsInput } from "./SessionCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  sessions?: SessionCreateNestedManyWithoutEventsInput;
  testAuto?: number | null;
};
