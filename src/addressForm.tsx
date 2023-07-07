import { FormWrapper } from "./formWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateField: (fields: Partial<AddressData>) => void;
};

export const AddressForm = ({
  street,
  city,
  state,
  zip,
  updateField,
}: AddressFormProps) => {
  return (
    <FormWrapper title="Address Details">
      <label htmlFor="">Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={(e) => updateField({ street: e.target.value })}
      />
      <label htmlFor="">City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => updateField({ city: e.target.value })}
      />
      <label htmlFor="">State</label>
      <input
        required
        type="text"
        value={state}
        onChange={(e) => updateField({ state: e.target.value })}
      />
      <label htmlFor="">Zip</label>
      <input
        required
        type="text"
        value={zip}
        onChange={(e) => updateField({ zip: e.target.value })}
      />
    </FormWrapper>
  );
};
