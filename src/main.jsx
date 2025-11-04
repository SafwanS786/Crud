import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css"; // 👈 this must be imported
import { SidebarProvider } from "./Context/SidebarContext.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <SidebarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>
);
