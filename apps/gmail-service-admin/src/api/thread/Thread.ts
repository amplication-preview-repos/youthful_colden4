import { Email } from "../email/Email";

export type Thread = {
  createdAt: Date;
  emails?: Array<Email>;
  id: string;
  messages: string | null;
  participants: string | null;
  subject: string | null;
  updatedAt: Date;
};
