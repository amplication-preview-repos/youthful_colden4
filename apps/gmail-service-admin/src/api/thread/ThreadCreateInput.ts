import { EmailCreateNestedManyWithoutThreadsInput } from "./EmailCreateNestedManyWithoutThreadsInput";

export type ThreadCreateInput = {
  emails?: EmailCreateNestedManyWithoutThreadsInput;
  messages?: string | null;
  participants?: string | null;
  subject?: string | null;
};
