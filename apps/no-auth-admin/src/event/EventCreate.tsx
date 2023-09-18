import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { SessionTitle } from "../session/SessionTitle";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Description" source="description" />
        <DateTimeInput label="Start Date" source="startDate" />
        <DateTimeInput label="End Date" source="endDate" />
        <TextInput label="Location" source="location" />
        <ReferenceArrayInput
          source="sessions"
          reference="Session"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SessionTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="testAuto" source="testAuto" />
      </SimpleForm>
    </Create>
  );
};
