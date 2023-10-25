import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard"; // Import your Dashboard component
import RegisterPage from "./RegisterPage";
import Verify from "./component2/Verify";
import VerifyEmail from "./component2/VerifyEmail";
import LandingPage from "./component2/LandingPage";
import RequestPasswordResetPage from "./RequestPasswordResetPage";
import ResetPasswordInfo from "./component2/ContentArea/ResetPasswordInfo";
import PasswordReset from "./component2/ResetPasswordForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<RequestPasswordResetPage />} />
        <Route path="/forgot-password-info" element={<ResetPasswordInfo />} />
        <Route path="/reset-password/:resetToken" element={<PasswordReset />} />
      </Routes>
    </Router>
  );
}

export default App;
