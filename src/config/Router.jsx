import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

// Pages
import { Dashboard, ForgotPassword, Login, NotFound, Signup } from "@/pages"

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
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        index: true,
        element: <Dashboard />,
      },
      {
        path: "trade-list",
        element: <div className="container">Trade List Page</div>,
      },
      {
        path: "templates",
        element: <div className="container">Templates Page</div>,
      },
      {
        path: "backtest-status",
        element: <div className="container">Backtest Status Page</div>,
      },
      {
        path: "results",
        element: <div className="container">Results Page</div>,
      },
      {
        path: "strategy-builder",
        element: <div className="container">Strategy Builder Page</div>,
      },
      {
        path: "report",
        element: <div className="container">Report Page</div>,
      },
      {
        path: "settings",
        children: [
          {
            path: "",
            index: true,
            element: <div className="container">Setting Page</div>,
          },
          {
            path: "profile",
            element: <div className="container">Profile Page</div>,
          },
          {
            path: "post",
            element: <div className="container">Post Job Page</div>,
          },
          {
            path: "single",
            element: <div className="container">Job Details Page</div>,
          },
        ],
      },
      {
        path: "terms-and-conditions",
        element: <div className="container">TermsAndConditions Page</div>,
      },
      {
        path: "privacy-policy",
        element: <div className="container">PrivacyPolicy Page</div>,
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
