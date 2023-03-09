import "./App.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Pages/Routes/AppRoutes/AppRoutes";

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
