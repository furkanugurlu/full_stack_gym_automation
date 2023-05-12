import { CustomHeader, CustomFooter } from "./components";
import Router from "./Router";

function App() {
  return (
    <div className="relative">
      <CustomHeader />
      <div className="pt-[100px]">
        <Router />
      </div>
      <CustomFooter />
    </div>
  );
}

export default App;
