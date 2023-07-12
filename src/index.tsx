import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { useState } from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
//этот файл основная точка входа, отображает <App>  компонент