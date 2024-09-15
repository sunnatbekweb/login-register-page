import { useState } from "react";

interface FormData {
  email: string;
  password: string;
}

function App() {
  const [loginData, setLoginData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]:value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        Email:
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={loginData.email}
          onChange={handleLoginChange}
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
          value={loginData.password}
          onChange={handleLoginChange}
          required
        />
      </label>
      <br />
      <div className="remember_forget">
        <label>
          <input type="checkbox" name="remember" id="remember" />
          Remember me
        </label>
        <a href="#!">Forget password?</a>
      </div>
      <button type="submit">Submit</button>
      <p  className="noAccount">
        Dont have an account? <a href="#!">Register</a>
      </p>
    </form>
  );
}

export default App;
