import { EmailWhereUniqueInput } from "../email/EmailWhereUniqueInput";

export type LabelCreateInput = {
  color?: string | null;
  email?: EmailWhereUniqueInput | null;
  name?: string | null;
};
