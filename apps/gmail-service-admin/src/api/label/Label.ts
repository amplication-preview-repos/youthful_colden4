import { Email } from "../email/Email";

export type Label = {
  color: string | null;
  createdAt: Date;
  email?: Email | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
