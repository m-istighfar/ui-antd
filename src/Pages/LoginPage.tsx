import Login from "../containers/Login";

function LoginPage() {
  const handleLoginSuccess = (token: string, role: string) => {
    localStorage.setItem("accessToken", token);
    localStorage.setItem("role", role);
    console.log("Token:", token);
    console.log("Logged in with token:", token);
    console.log("Role:", role);
    window.location.replace("/dashboard");
  };

  return (
    <div className="App">
      <Login onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}

export default LoginPage;
