function App() {
  return (
    <>
      <div className="container">
        <form action="#!">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <button>LogIn</button>
        </form>
      </div>
    </>
  );
}

export default App;
