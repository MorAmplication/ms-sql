import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const EmitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="testDe" source="testDe" />
      </SimpleForm>
    </Create>
  );
};
