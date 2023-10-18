import React, { useState, useEffect } from "react";
import "./DashBoard.css";
import Header from "../Layout/Admin/Header";
import SideBar from "../Layout/Admin/Sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getProfileApi, isLoginApi, updateProfileApi } from "../Api/Services";
import { toast } from "react-toastify";
import Modal from "react-modal";
//
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const UpdateProfile = () => {
  let Navigate = useNavigate();
  // Don't remove this, admin auth Api
  const isAdmin = async () => {
    try {
      const getSlider = await isLoginApi();

      if (getSlider.statusCode === 401 || getSlider.statusCode === 403) {
        return Navigate("/admin-login");
      } else {
        toast.error(getSlider.msg);
      }
    } catch (error) {
      console.log("getSlider.msg: ", error);
      console.log("error: ", error);
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
    }
  };
  // Don't remove this, admin auth Api
  const [isDisable, setisDisable] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(e) {
    e.preventDefault();
    if (!user.email || !user.name) {
      return toast.info("Please Fill all the Informations");
    }
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    let body = document.querySelector("body");
    body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    let body = document.querySelector("body");
    body.style.overflow = "auto";
  }
  let handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  useEffect(() => {}, []);
  //

  const updateProfile = async () => {
    try {
      setisDisable(true);

      if (!user.password) {
        return toast.info("Please enter your password");
      }
      let body = {
        newName: user.name,
        newEmail: user.email,
        password: user.password,
      };

      const updateHeader = await updateProfileApi(body);

      if (updateHeader.success) {
        toast.success(updateHeader.msg);
        closeModal();
      } else {
        toast.error(updateHeader.msg);
        user.password = "";
      }
    } catch (error) {
      user.password = "";
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      setisDisable(false);
    }
  };
  const getProfile = async () => {
    try {
      setisDisable(true);

      const updateHeader = await getProfileApi();
      console.log("updateHeader: ", updateHeader);

      if (updateHeader.success) {
        setUser(updateHeader.user);
      } else {
        toast.error(updateHeader.msg);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      setisDisable(false);
    }
  };

  useEffect(() => {
    isAdmin();
    getProfile();
  }, []);
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
                      <h2 className="text-dark mb-0">Update Profile</h2>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form method="POST">
                    <div className="flex-items">
                      <div className="indiv-field" style={{ width: "100%" }}>
                        <label htmlFor="username">Name</label>
                        <input
                          name="name"
                          placeholder="Enter your Name"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.name}
                        />
                      </div>
                      <div className="indiv-field" style={{ width: "100%" }}>
                        <label htmlFor="username">Email</label>
                        <input
                          name="email"
                          placeholder="Enter your Email"
                          type="email"
                          required="true"
                          onChange={handleInput}
                          value={user.email}
                        />
                      </div>
                    </div>
                    <br />
                    <div className="flex justify-space">
                      <div>
                        {" "}
                        <Link
                          to="/update-password"
                          className="save-data  btn btn-primary"
                          type="submit"
                        >
                          Change Password
                        </Link>
                      </div>
                      <button
                        className="save-data  btn btn-success"
                        type="submit"
                        onClick={openModal}
                        disabled={isDisable}
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onAfterOpen={afterOpenModal}
        contentLabel="Example Modal"
      >
        <div>
          <p style={{ margin: 0, fontWeight: "bold" }}>
            Enter your password to confirm the changes:
          </p>
        </div>
        <form className="indiv-field" style={{ width: "100%" }}>
          <input
            className="modal-input "
            type="password"
            name="password"
            onChange={handleInput}
            value={user.password}
            placeholder="Password"
          />
          <div className="btn-con">
            <button
              type="button"
              disabled={isDisable}
              onClick={updateProfile}
              className="btn btn-success"
            >
              Save
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="btn btn-primary"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default UpdateProfile;
