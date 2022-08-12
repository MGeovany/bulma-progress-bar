import "./styles.css";
import { useState } from "react";
import { IconArrowRight } from "@tabler/icons";
import { WizardSteps } from "./WizardSteps";

export default function App() {
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="App">
        <WizardSteps step={step} />
      </div>

      <div
        className="buttons has-addons is-centered "
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          className="button is-danger is-inverted is-normal"
          onClick={() => (step <= 1 ? setStep(1) : setStep(step - 1))}
          style={{ border: "1px solid #e7edea" }}
        >
          <IconArrowRight style={{ rotate: "180deg" }} />
          <span>Back</span>
        </button>
        <button
          className="button is-info is-inverted is-normal"
          onClick={() => (step > 3 ? setStep(4) : setStep(step + 1))}
          style={{ border: "1px solid #e7edea" }}
        >
          <IconArrowRight />
          <span>Go</span>
        </button>
      </div>
    </>
  );
}
