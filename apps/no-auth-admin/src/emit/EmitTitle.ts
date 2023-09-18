import { Emit as TEmit } from "../api/emit/Emit";

export const EMIT_TITLE_FIELD = "id";

export const EmitTitle = (record: TEmit): string => {
  return record.id || String(record.id);
};
