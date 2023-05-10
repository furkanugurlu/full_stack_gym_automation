import { Route } from "react-router-dom";
import CustomHeader from "./components/CustomHeader";
import Router from "./Router";

function App() {
  return (
    <div>
      <CustomHeader />
      <div className="pt-[100px]">
        <Router />
      </div>
    </div>
  );
}

export default App;
