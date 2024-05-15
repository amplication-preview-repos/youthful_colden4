import { Thread as TThread } from "../api/thread/Thread";

export const THREAD_TITLE_FIELD = "messages";

export const ThreadTitle = (record: TThread): string => {
  return record.messages?.toString() || String(record.id);
};
