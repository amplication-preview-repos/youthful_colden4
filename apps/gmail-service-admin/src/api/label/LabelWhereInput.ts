import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmailWhereUniqueInput } from "../email/EmailWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type LabelWhereInput = {
  color?: StringNullableFilter;
  email?: EmailWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
