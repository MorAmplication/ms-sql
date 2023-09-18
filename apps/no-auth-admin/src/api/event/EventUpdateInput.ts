import { SessionUpdateManyWithoutEventsInput } from "./SessionUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  name?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  location?: string;
  sessions?: SessionUpdateManyWithoutEventsInput;
  testAuto?: number | null;
};
