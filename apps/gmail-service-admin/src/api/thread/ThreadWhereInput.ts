import { EmailListRelationFilter } from "../email/EmailListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ThreadWhereInput = {
  emails?: EmailListRelationFilter;
  id?: StringFilter;
  messages?: StringNullableFilter;
  participants?: StringNullableFilter;
  subject?: StringNullableFilter;
};
