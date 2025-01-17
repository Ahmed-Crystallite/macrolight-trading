import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

// Pages
import { ForgotPassword, Login, NotFound, Signup } from "@/pages"

// Components
import { DashboardLayout } from "@/components"

// Define Route Configuration (for easier maintenance and potential dynamic loading)
const routesConfig = [
  {
    path: "/",
    element: <Navigate to="/login" replace />,
    isPublic: true,
  },
  {
    path: "/login",
    element: <Login />,
    isPublic: true,
  },
  {
    path: "/signup",
    element: <Signup />,
    isPublic: true,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    isPublic: true,
  },
  {
    path: "/terms-and-conditions",
    element: <div>TermsAndConditions Page</div>,
    isPublic: true,
  },
  {
    path: "/privacy-policy",
    element: <div>PrivacyPolicy Page</div>,
    isPublic: true,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        index: true,
        element: <div>Dashboard Page</div>,
      },
      {
        path: "trade-list",
        element: <div>trade-lis Page</div>,
      },
      {
        path: "templates",
        element: <div>templates Page</div>,
      },
      {
        path: "backtest-status",
        element: <div>backtest-status Page</div>,
      },
      {
        path: "results",
        element: <div>Results</div>,
      },
      {
        path: "strategy-builder",
        element: <div>Strategy Builder</div>,
      },
      {
        path: "report",
        element: <div>Report Page</div>,
      },
      {
        path: "settings",
        children: [
          {
            path: "",
            index: true,
            element: <div>Setting Page</div>,
          },
          {
            path: "profile",
            element: <div>Profile Page</div>,
          },
          {
            path: "post",
            element: <div>Post Job Page</div>,
          },
          {
            path: "single",
            element: <div>Job Details Page</div>,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]

const Routers = () => {
  return (
    <Router>
      <Routes>
        {routesConfig.map((route) =>
          route.isPublic ? (
            <Route key={route.path} path={route.path} element={route.element} />
          ) : (
            <Route key={route.path} path={route.path} element={route.element}>
              {route.children &&
                route.children.map((e) => (
                  <Route
                    key={e.path}
                    path={e.path}
                    index={e.index}
                    element={e.element}
                  />
                ))}
            </Route>
          )
        )}
      </Routes>
    </Router>
  )
}

export default Routers
