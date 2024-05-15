import { Label } from "../label/Label";
import { Thread } from "../thread/Thread";

export type Email = {
  body: string | null;
  createdAt: Date;
  id: string;
  labels?: Array<Label>;
  recipients: string | null;
  sender: string | null;
  subject: string | null;
  thread?: Thread | null;
  timestamp: Date | null;
  updatedAt: Date;
};
