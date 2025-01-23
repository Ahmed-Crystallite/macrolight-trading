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
  PaymentMethod,
  Preferences,
  Profile,
  Results,
  Security,
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
            index: true,
            element: <Navigate to="profile" replace />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "preferences",
            element: <Preferences />,
          },
          {
            path: "security",
            element: <Security />,
          },
          {
            path: "payment-method",
            element: <PaymentMethod />,
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

const renderRoutes = (routes) => {
  return routes.map((route, index) => {
    const { path, element, children } = route
    return (
      <Route key={`${path}-${index}`} path={path} element={element}>
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
