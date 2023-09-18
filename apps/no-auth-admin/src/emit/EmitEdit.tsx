import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const EmitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="testDe" source="testDe" />
      </SimpleForm>
    </Edit>
  );
};
