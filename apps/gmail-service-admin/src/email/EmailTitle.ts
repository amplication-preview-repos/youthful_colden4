import { Email as TEmail } from "../api/email/Email";

export const EMAIL_TITLE_FIELD = "recipients";

export const EmailTitle = (record: TEmail): string => {
  return record.recipients?.toString() || String(record.id);
};
