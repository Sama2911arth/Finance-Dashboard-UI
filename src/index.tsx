import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SideNavigation } from "./screens/SideNavigation";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <SideNavigation />
  </StrictMode>,
);
