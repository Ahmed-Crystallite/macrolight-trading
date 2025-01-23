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
  CookiePolicy,
  Dashboard,
  Disclaimer,
  ForgotPassword,
  Login,
  NotFound,
  PaymentMethod,
  Policies,
  Preferences,
  PrivacyPolicy,
  Profile,
  Results,
  Security,
  Signup,
  StrategyBuilder,
  Templates,
  TermsOfService,
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
            element: <Policies />,
          },
          {
            path: "terms-and-conditions",
            element: <TermsOfService />,
          },
          {
            path: "privacy-policy",
            element: <PrivacyPolicy />,
          },
          {
            path: "disclaimer",
            element: <Disclaimer />,
          },
          {
            path: "cookie-policy",
            element: <CookiePolicy />,
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
