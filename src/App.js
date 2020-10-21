import React from "react";
import "./App.css";

import { MyTable } from "./components";

function App() {
  let [columns, setColumns] = React.useState([]);
  let [data, setData] = React.useState([]);
  const addColumn = () => setColumns([...columns, {Header: `Column ${columns.length + 1}`, accessor: `col${columns.length + 1}`}])
  const addRow = () => setData([...data, {col1: `R${data.length + 1}`}]);
  return (
    <div className="App">
      <button onClick={addColumn}>Add column</button>
      <button onClick={addRow}>Add row</button>
      <MyTable columns={columns} data={data}/>
    </div>
  ); 
}

export default App;
