import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { EmailTitle } from "../email/EmailTitle";

export const ThreadCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="emails"
          reference="Email"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmailTitle} />
        </ReferenceArrayInput>
        <TextInput label="messages" source="messages" />
        <TextInput label="participants" source="participants" />
        <TextInput label="subject" source="subject" />
      </SimpleForm>
    </Create>
  );
};
