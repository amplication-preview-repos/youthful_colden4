import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { THREAD_TITLE_FIELD } from "./ThreadTitle";

export const ThreadShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="messages" source="messages" />
        <TextField label="participants" source="participants" />
        <TextField label="subject" source="subject" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Email" target="threadId" label="Emails">
          <Datagrid rowClick="show">
            <TextField label="body" source="body" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="recipients" source="recipients" />
            <TextField label="sender" source="sender" />
            <TextField label="subject" source="subject" />
            <ReferenceField
              label="thread"
              source="thread.id"
              reference="Thread"
            >
              <TextField source={THREAD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
