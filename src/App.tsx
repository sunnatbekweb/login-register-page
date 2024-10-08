import { useState, useEffect } from "react";

interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function App() {
  const [loginData, setLoginData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState<RegisterFormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [page, setPage] = useState<string | undefined>(
    () => localStorage.getItem("page") || "login"
  );

  useEffect(() => {
    if (page) {
      localStorage.setItem("page", page);
    }
  }, [page]);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (page === "login") {
      console.log("Login data: ", loginData);
    } else {
      console.log("Register data: ", registerData);
    }
  };

  const handlePageChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const dataPage = e.currentTarget.dataset.page;
    setPage(dataPage);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{page === "login" ? "Login" : "Register"}</h2>
      {page === "register" && (
        <div>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={registerData.fullName}
              onChange={handleRegisterChange}
              required
            />
          </label>
          <br />
        </div>
      )}
      <label>
        Email:
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={page === "login" ? loginData.email : registerData.email}
          onChange={page === "login" ? handleLoginChange : handleRegisterChange}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={page === "login" ? loginData.password : registerData.password}
          onChange={page === "login" ? handleLoginChange : handleRegisterChange}
          required
        />
      </label>
      <br />
      {page === "register" && (
        <div>
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={registerData.confirmPassword}
              onChange={handleRegisterChange}
              required
            />
          </label>
          <br />
        </div>
      )}
      <div className="remember_forget">
        <label>
          <input type="checkbox" name="remember" id="remember" />
          Remember me
        </label>
        <a href="#!">Forget password?</a>
      </div>
      <button type="submit">Submit</button>
      {page === "login" ? (
        <div className="noAccount">
          Don't have an account?{" "}
          <div data-page="register" onClick={handlePageChange}>
            Register
          </div>
        </div>
      ) : (
        <div className="noAccount">
          Already have an account?{" "}
          <div data-page="login" onClick={handlePageChange}>
            Login
          </div>
        </div>
      )}
    </form>
  );
}

export default App;
