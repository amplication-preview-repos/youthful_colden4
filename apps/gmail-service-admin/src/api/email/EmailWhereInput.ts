import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LabelListRelationFilter } from "../label/LabelListRelationFilter";
import { ThreadWhereUniqueInput } from "../thread/ThreadWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EmailWhereInput = {
  body?: StringNullableFilter;
  id?: StringFilter;
  labels?: LabelListRelationFilter;
  recipients?: StringNullableFilter;
  sender?: StringNullableFilter;
  subject?: StringNullableFilter;
  thread?: ThreadWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
};
