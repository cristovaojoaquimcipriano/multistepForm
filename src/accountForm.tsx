import { FormWrapper } from "./formWrapper";

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateField: (fields: Partial<AccountData>) => void;
};

export const AccountForm = ({
  email,
  password,
  updateField,
}: AccountFormProps) => {
  return (
    <FormWrapper title="Account Details">
      <label htmlFor="">Email</label>
      <input
        autoFocus
        required
        value={email}
        type="email"
        onChange={(e) => updateField({ email: e.target.value })}
      />
      <label htmlFor="">Password</label>
      <input
        required
        value={password}
        type="password"
        onChange={(e) => updateField({ password: e.target.value })}
      />
    </FormWrapper>
  );
};
