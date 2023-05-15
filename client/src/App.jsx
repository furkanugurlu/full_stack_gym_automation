import { CustomHeader, CustomFooter } from "./components";
import Router from "./Router";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomHeader />
      <div className="pt-[100px] flex-grow">
        <Router />
      </div>
      <CustomFooter />
    </div>
  );
}

export default App;
