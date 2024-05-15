import { SortOrder } from "../../util/SortOrder";

export type EmailOrderByInput = {
  body?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  recipients?: SortOrder;
  sender?: SortOrder;
  subject?: SortOrder;
  threadId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
