export const WizardSteps = ({ step }) => {
  console.log(step);
  return (
    <ul className={"steps has-content-above "}>
      <li className={"steps-segment " + (step === 1 ? "is-active" : "")}>
        <span className="steps-marker"></span>
        <p className="is-size-4">Step 1</p>
        <div className="steps-content is-divider-content"></div>
      </li>
      <li className={"steps-segment " + (step === 2 ? "is-active" : "")}>
        <span className="steps-marker"></span>
        <div className="steps-content is-divider-content">
          <p className="is-size-4">Step 2</p>
        </div>
      </li>
      <li className={"steps-segment " + (step === 3 ? "is-active" : "")}>
        <span className="steps-marker"></span>
        <div className="steps-content is-divider-content">
          <p className="is-size-4">Step 3</p>
        </div>
      </li>

      <li className={"steps-segment " + (step === 4 ? "is-active" : "")}>
        <span className="steps-marker"></span>
        <div className="steps-content is-divider-content">
          <p className="is-size-4"></p>
        </div>
      </li>
    </ul>
  );
};
