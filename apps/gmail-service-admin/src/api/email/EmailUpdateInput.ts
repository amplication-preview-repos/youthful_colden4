import { LabelUpdateManyWithoutEmailsInput } from "./LabelUpdateManyWithoutEmailsInput";
import { ThreadWhereUniqueInput } from "../thread/ThreadWhereUniqueInput";

export type EmailUpdateInput = {
  body?: string | null;
  labels?: LabelUpdateManyWithoutEmailsInput;
  recipients?: string | null;
  sender?: string | null;
  subject?: string | null;
  thread?: ThreadWhereUniqueInput | null;
  timestamp?: Date | null;
};
