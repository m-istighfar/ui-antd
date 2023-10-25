import React from "react";
import Register from "./component2/Register";

const RegisterPage: React.FC = () => {
  const handleRegisterSuccess = () => {};

  return (
    <div className="App">
      <Register onRegisterSuccess={handleRegisterSuccess} />
    </div>
  );
};

export default RegisterPage;
