import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    <Toaster
      toastOptions={{
        style: {
          border: "3px solid #52d794",
          fontSize: "16px",
        },
      }}
    />
  </React.StrictMode>
);
