import { useState } from "react";
import "./App.css";
import { AccountForm } from "./accountForm";
import { AddressForm } from "./addressForm";
import { useMultistepForm } from "./hooks/useMultistepForm";
import { UserForm } from "./userForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }
  const { steps, currentStepIndex, step, isLastStep, isFirstStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateField={updateFields} />,
      <AddressForm {...data} updateField={updateFields} />,
      <AccountForm {...data} updateField={updateFields} />,
    ]);

  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation!");
    console.log(JSON.stringify(data, null, 2));
    
  };

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content",
      }}
    >
      <form onSubmit={onsubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: ".5rem",
            marginTop: "1rem",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
