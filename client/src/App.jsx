import { CustomHeader } from "./components";
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
