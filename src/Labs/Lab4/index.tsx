import ArrayStateVariable from "./ArrayStateVariables";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./clickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariables";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

export default function Lab4() {
  return (
    <div className="container">
      <h2>Lab 4 - State Management in React</h2>
      <ClickEvent />
      <hr />
      <PassingDataOnEvent />
      <hr />
      <PassingFunctions
        theFunction={() => alert("Hello from PassingFunctions")}
      />
      <EventObject />
      <hr />
      <Counter />
      <hr />
      <BooleanStateVariables />
      <hr />
      <StringStateVariables />
      <hr />
      <DateStateVariable />
      <hr />
      <ObjectStateVariable />
      <hr />
      <ArrayStateVariable />
      <hr />
      <ParentStateComponent />
      <hr />
      <ReduxExamples />
    </div>
  );
}
