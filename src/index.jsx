import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { App } from "./App.jsx";
import { Question } from "./components/Questions/Question.jsx";
import { Materials } from "./components/Materials/Materials.jsx";
import { Contacts } from "./components/Contacts/Contacts.jsx";
import { DefaultMain } from "./components/Main/Main.jsx";
import "./styles.scss";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <DefaultMain />,
      },
      {
        path: "questions",
        element: <Question />,
      },
      {
        path: "materials",
        element: <Materials />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
