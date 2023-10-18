import React, { useState } from "react";
import "./AdminLogin.css";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginApi } from "../../Api/Services";
const AdminLogin = () => {
  const [isloading, setisloading] = useState(false);

  let Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("Please fill both the required fields");
    }
    setisloading(true);
    try {
      let data = { email, password };

      const updateHeader = await loginApi(data);

      if (updateHeader.success) {
        toast.success(updateHeader.msg);
        Navigate("/slider-update");
      } else {
        toast.error(updateHeader.msg);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      setisloading(false);
    }
  };
  return (
    <div className="login-section">
      <form className="login-admin">
        <h3 className="mbr">Login Here</h3>

        <label htmlFor="username">Email</label>
        <input
          type="email"
          name="email"
          id="your_name"
          required="true"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          id="your_pass"
          className="lower-mb"
          placeholder="Enter Password"
        />

        <button className="bkk admin-button" onClick={logIn}>
          {isloading ? (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
