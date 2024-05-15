import { SortOrder } from "../../util/SortOrder";

export type ThreadOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  messages?: SortOrder;
  participants?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};
