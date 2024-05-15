import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EMAIL_TITLE_FIELD } from "./EmailTitle";
import { THREAD_TITLE_FIELD } from "../thread/ThreadTitle";

export const EmailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="body" source="body" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="recipients" source="recipients" />
        <TextField label="sender" source="sender" />
        <TextField label="subject" source="subject" />
        <ReferenceField label="thread" source="thread.id" reference="Thread">
          <TextField source={THREAD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Label" target="emailId" label="Labels">
          <Datagrid rowClick="show">
            <TextField label="color" source="color" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Email" source="email.id" reference="Email">
              <TextField source={EMAIL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
