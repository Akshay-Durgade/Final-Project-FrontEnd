import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="lg">
      <form action="" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="./Signup"> Signup </a>
        </p>
      </form>
    </div>
    // hii
  );
}

export default Login;
