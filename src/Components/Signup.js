import React from "react";
import "./signup.css";
function Signup() {
  return (
    <>
      <div>
        <h1 className="mt-2">Registration</h1>
        <form>
          <label for="name text-start">Name:</label>
          <input type="text" id="name" name="name" required />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label for="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            required
          />

          <label for="adhar">Aadhar Card Number:</label>
          <input
            type="text"
            id="adhar"
            name="adhar"
            pattern="[0-9]{12}"
            required
          />

          <label for="pincode">Pin Code:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            pattern="[0-9]{6}"
            required
          />

          <label for="district">District:</label>
          <input type="text" id="district" name="district" required />

          <label for="city">City:</label>
          <input type="text" id="city" name="city" required />

          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <label for="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />

          <label for="role">Select Role:</label>
          <select id="role" name="Role" required>
            <option value="admin">Farmer</option>
            <option value="user">Customer </option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
