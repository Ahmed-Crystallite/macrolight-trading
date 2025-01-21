import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

// Pages
import {
  BacktestStatus,
  Dashboard,
  ForgotPassword,
  Login,
  NotFound,
  Results,
  Signup,
  StrategyBuilder,
  Templates,
  TradeList,
} from "@/pages"

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
        element: <TradeList />,
      },
      {
        path: "templates",
        element: <Templates />,
      },
      {
        path: "backtest-status",
        element: <BacktestStatus />,
      },
      {
        path: "results",
        element: <Results />,
      },
      {
        path: "strategy-builder",
        element: <StrategyBuilder />,
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
            element: <div className="container">Profile Page</div>,
          },
          {
            path: "preferences",
            element: <div className="container">Preferences Page</div>,
          },
          {
            path: "security",
            element: <div className="container">Security Page</div>,
          },
          {
            path: "payment-method",
            element: <div className="container">Payment Method Page</div>,
          },
        ],
      },
      {
        path: "policies",
        children: [
          {
            path: "",
            index: true,
            element: <div className="container">Setting Page</div>,
          },
          {
            path: "terms-and-conditions",
            element: <div className="container">TermsAndConditions Page</div>,
          },
          {
            path: "privacy-policy",
            element: <div className="container">PrivacyPolicy Page</div>,
          },
          {
            path: "disclaimer",
            element: <div className="container">Disclaimer Page</div>,
          },
          {
            path: "cookie-policy",
            element: <div className="container">CookiePolicy Page</div>,
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
