import React, { useState, useEffect } from "react";
import "./DashBoard.css";
import Header from "../Layout/Admin/Header";
import SideBar from "../Layout/Admin/Sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  getProfileApi,
  updatePasswordApi,
  updateProfileApi,
} from "../Api/Services";
import { toast } from "react-toastify";

//
//

const UpdatePasswords = () => {
  let Navigate = useNavigate();
  const [isValidate, setisValidate] = useState(true);

  const [isDisable, setisDisable] = useState(false);
  const [user, setUser] = useState({
    oldPassword: "",
    newPassword: "",

    confirmPassword: "",
  });
  let handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  //
  const updatePassword = async (e) => {
    try {
      e.preventDefault();
      setisDisable(true);

      if (!user.oldPassword || !user.newPassword || !user.confirmPassword) {
        return toast.info("Please enter your password");
      }
      if (user.newPassword != user.confirmPassword) {
        return toast.info("New password and confirm password don't match");
      }
      let body = {
        oldPassword: user.oldPassword,
        newPassword: user.newPassword,
        confirmPassword: user.confirmPassword,
      };

      const updateHeader = await updatePasswordApi(body);
      console.log("updateHeader: ", updateHeader.success);

      if (updateHeader.success) {
        toast.success(updateHeader.msg);
        Navigate("/");
      } else {
        toast.error(updateHeader.msg);
        return false;
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      setisDisable(false);
    }
  };

  return (
    <>
      <SideBar />
      <div className="main-content">
        <Header />

        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8"></div>
        <div className="mt--7 container-fluid">
          <div className="row">
            <div className="mb-5 ">
              <div className="  shadow card">
                <div className="bg-transparent card-header">
                  <div className="align-items-center row">
                    <div className="col">
                      <h2 className="text-dark mb-0">Update Password</h2>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form method="POST">
                    <div className="flex-items">
                      <div className="indiv-field" style={{ width: "100%" }}>
                        <label htmlFor="username">Old Password </label>
                        <input
                          name="oldPassword"
                          placeholder="Enter Old Password"
                          type="password"
                          required="true"
                          onChange={handleInput}
                          value={user.oldPassword}
                        />
                      </div>
                      <div className="indiv-field">
                        <label htmlFor="username">New Password</label>
                        <input
                          name="newPassword"
                          placeholder="Enter New Password"
                          type="password"
                          required="true"
                          onChange={handleInput}
                          value={user.newPassword}
                        />
                      </div>
                      <div className="indiv-field">
                        <label htmlFor="username">Confirm Passord</label>
                        <input
                          name="confirmPassword"
                          placeholder="Confirm New Password"
                          type="password"
                          required="true"
                          onChange={handleInput}
                          value={user.confirmPassword}
                        />
                      </div>
                    </div>
                    <br />
                    <div className="flex justify-space">
                      <div></div>
                      <button
                        className="save-data  btn btn-success"
                        type="submit"
                        onClick={updatePassword}
                        disabled={isDisable}
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePasswords;
