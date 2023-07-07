import { FormWrapper } from "./formWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateField: (fields: Partial<UserData>) => void;
};
export const UserForm = ({
  firstName,
  lastName,
  age,
  updateField,
}: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <label htmlFor="name">First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateField({ firstName: e.target.value })}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(e) => updateField({ lastName: e.target.value })}
      />
      <label htmlFor="age">Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        onChange={(e) => updateField({ age: e.target.value })}
      />
    </FormWrapper>
  );
};
