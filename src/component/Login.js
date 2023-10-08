const LoginForm = () => {
  return (
    <div
      className="bg-gradient-to-r from-white to-blue-500"
      style={{ height: "100vh"}}
    >
      <div>
        <form className="flex flex-col">
          <h1>Login</h1>
          <div className="w-1/4">
            <input
              className="w-full p-2 mb-4 border rounded-md"
              placeholder="Username"
            ></input>
            <input
              className="w-full p-2 mb-4 border rounded-md"
              placeholder="Password"
            ></input>
            <div>
              <button>Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
