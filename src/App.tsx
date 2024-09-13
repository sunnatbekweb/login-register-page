import { useState } from "react";

interface FormData {
  email: string;
  password: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
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
          value={formData.email}
          onChange={handleChange}
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
          value={formData.password}
          onChange={handleChange}
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
