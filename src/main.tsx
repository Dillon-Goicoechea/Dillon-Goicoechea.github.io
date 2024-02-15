import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorPage from './error-page';
import ProfWork from './professional.tsx';
import CodeExamples from './code-examples.tsx';
import {
  RouterProvider,
  createHashRouter
} from "react-router-dom";
import './index.css'

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children:[{
      path: "code",
      element:<CodeExamples/>,
      errorElement: <ErrorPage />
    },
    {
      path: "experience",
      element:<ProfWork/>,
      errorElement: <ErrorPage />
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);