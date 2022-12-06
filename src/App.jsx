import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";

function App() {
  // useEffect(() => {
  //   window.process = {
  //     ...window.process,
  //   };
  // }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
// div className="w-full mx-auto"
