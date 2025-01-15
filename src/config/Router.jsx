// React Router Dom
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
// Pages
import { ForgotPassword, Login, Signup } from "@/pages"

// // Components
// import {
//   Footer,
//   Header,
// } from "@/components"
const Routers = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" replace />} /> 
        <Route path="login" element={<Login />} /> 
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route
          path="terms-and-conditions"
          element={<div>TermsAndConditions Page</div>}
        />
        <Route path="privacy-policy" element={<div>PrivacyPolicy Page</div>} />
        {/* Dashboard Routes */}
        <Route path="dashboard" element={<div>Dashboard Page</div>} />
            <Route
              path="dashboard/trade-list"
              element={<div>trade-lis Page</div>}
            />
            <Route
              path="dashboard/templates"
              element={<div>templates Page</div>}
            />
            <Route path="dashboard/backtest-status" element={<div>backtest-status Page</div>} />
            <Route path="dashboard/results" element={<div>Results</div>} />
            <Route path="dashboard/strategy-builder" element={<div>Strategy Builder</div>} />
            <Route path="dashboard/report" element={<div>Report Page</div>} />
            <Route path="dashboard/settings">
              <Route index element={<div>Setting Page</div>} />
            <Route path="dashboard/settings/profile" element={<div>Profile Page</div>} />
              <Route path="dashboard/post" element={<div>Post Job Page</div>} />
              <Route
                path="dashboard/single"
                element={<div>Job Details Page</div>}
              />
            </Route>

        {/* Catch-All Route */}
        <Route path="*" element={<div>NotFound Page</div>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default Routers
