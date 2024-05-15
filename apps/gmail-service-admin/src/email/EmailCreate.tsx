import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { LabelTitle } from "../label/LabelTitle";
import { ThreadTitle } from "../thread/ThreadTitle";

export const EmailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="body" multiline source="body" />
        <ReferenceArrayInput
          source="labels"
          reference="Label"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LabelTitle} />
        </ReferenceArrayInput>
        <TextInput label="recipients" source="recipients" />
        <TextInput label="sender" source="sender" />
        <TextInput label="subject" source="subject" />
        <ReferenceInput source="thread.id" reference="Thread" label="thread">
          <SelectInput optionText={ThreadTitle} />
        </ReferenceInput>
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
