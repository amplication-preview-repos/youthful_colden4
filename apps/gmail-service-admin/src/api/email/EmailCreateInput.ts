import { LabelCreateNestedManyWithoutEmailsInput } from "./LabelCreateNestedManyWithoutEmailsInput";
import { ThreadWhereUniqueInput } from "../thread/ThreadWhereUniqueInput";

export type EmailCreateInput = {
  body?: string | null;
  labels?: LabelCreateNestedManyWithoutEmailsInput;
  recipients?: string | null;
  sender?: string | null;
  subject?: string | null;
  thread?: ThreadWhereUniqueInput | null;
  timestamp?: Date | null;
};
