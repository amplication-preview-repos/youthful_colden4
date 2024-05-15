import { EmailUpdateManyWithoutThreadsInput } from "./EmailUpdateManyWithoutThreadsInput";

export type ThreadUpdateInput = {
  emails?: EmailUpdateManyWithoutThreadsInput;
  messages?: string | null;
  participants?: string | null;
  subject?: string | null;
};
