import { Session } from "../session/Session";

export type Event = {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  sessions?: Array<Session>;
  testAuto: number | null;
};
