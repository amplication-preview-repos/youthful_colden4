import { EmailWhereUniqueInput } from "../email/EmailWhereUniqueInput";

export type LabelUpdateInput = {
  color?: string | null;
  email?: EmailWhereUniqueInput | null;
  name?: string | null;
};
