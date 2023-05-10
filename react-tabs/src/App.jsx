import { BrowserRouter } from "react-router-dom";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <BrowserRouter>
      <Tabs />
    </BrowserRouter>
  );
};

export default App;
