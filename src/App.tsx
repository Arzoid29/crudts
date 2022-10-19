import Navbar from "./Components/Navbar";
import Table from "./Components/Table";
import { Form } from "./Components/Form/Form";
import { useData } from "./hooks/useData";

function App() {
  useData();

  return (
    <div className="App">
      <Navbar></Navbar>
      <Form />
      <Table />
    </div>
  );
}
export default App;
