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
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        index: true,
        element: <div>Dashboard Page</div>,
      },
      {
        path: "trade-list",
        element: <div>Trade List Page</div>,
      },
      {
        path: "templates",
        element: <div>Templates Page</div>,
      },
      {
        path: "backtest-status",
        element: <div>Backtest Status Page</div>,
      },
      {
        path: "results",
        element: <div>Results Page</div>,
      },
      {
        path: "strategy-builder",
        element: <div>Strategy Builder Page</div>,
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

// Recursive function to handle nested routes
const renderRoutes = (routes) => {
  return routes.map((route) => {
    const { path, element, children, index } = route
    return (
      <Route key={path} path={path} index={index} element={element}>
        {children && renderRoutes(children)}
      </Route>
    )
  })
}
const Routers = () => {
  return (
    <Router>
      <Routes>{renderRoutes(routesConfig)}</Routes>
    </Router>
  )
}

export default Routers
