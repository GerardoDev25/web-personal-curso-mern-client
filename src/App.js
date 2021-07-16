import "./App.scss";

import { DatePicker } from "antd";

function onChange(date, dateString) {
   console.log(date, dateString);
}

function App() {
   return (
      <div className="App">
         <h1>React Client</h1>
         <h2>Proyercto</h2>
         <DatePicker onChange={onChange} picker="week" />
      </div>
   );
}

export default App;
