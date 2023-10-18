import React, { useState, useEffect } from "react";
import "./DashBoard.css";
import { useParams } from "react-router-dom";
import Header from "../Layout/Admin/Header";
import SideBar from "../Layout/Admin/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import "./DashBoard.css";
import "./NewMovie.css";
import "./Login/AdminLogin.css";
import { baseUrl } from "../utils/Constant";
import { isLoginApi, updateHeaderApi } from "../Api/Services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import FormData from "form-data";
//

const HeaderUpdate = () => {
  // Don't remove this, admin auth Api
  const isAdmin = async () => {
    try {
      const getSlider = await isLoginApi();

      if (getSlider.statusCode === 401 || getSlider.statusCode === 403) {
        return navigate("/admin-login");
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
  const { id } = useParams();
  let navigate = useNavigate();
  const [isDisable, setisDisable] = useState(false);
  const [isLogo, setisLogo] = useState();
  const [consult, setConsult] = useState();
  const [newConsult, setNewConsult] = useState();
  const [logo, setLogo] = useState();

  const [user, setUser] = useState({
    email: "",
    phone: "",
    address: "",
    availabilityFrom: "",
    availabilityTo: "",
  });
  let handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  let changeConsult = (e) => {
    setConsult(e.target.files[0]);
    setNewConsult(URL.createObjectURL(e.target.files[0]));
  };
  let changeLogo = (e) => {
    setisLogo(e.target.files[0]);
    setLogo(URL.createObjectURL(e.target.files[0]));
  };
  let getHeader = async () => {
    try {
      let res = await fetch(`${baseUrl}getHeader`, {
        method: "GET",
        credentials: "include",

        headers: { "Content-Type": "application/json" },
      });
      let data = await res.json();
      if (res.status === 401 || res.status === 403) {
        navigate("/admin-login");
        return;
      } else if (res.status === 200) {
        setUser({
          email: data.findHeader.email,
          phone: data.findHeader.phone,
          address: data.findHeader.address,
          availabilityFrom: data.findHeader.availabilityFrom,
          availabilityTo: data.findHeader.availabilityTo,
        });
        setLogo(data.findHeader.logo.url);
        setisLogo(data.findHeader.logo.url);
        setConsult(data.findHeader.consultImg.url);
        setNewConsult(data.findHeader.consultImg.url);
      } else {
        toast.error("something went wrong, please try again later");
        console.log(res.status);
        return false;
      }
    } catch (e) {
      console.log("e: ", e);
      toast.error("something went wrong, please try again later");
    } finally {
    }
  };
  const updateHeader = async () => {
    try {
      setisDisable(true);
      const formData = new FormData();

      formData.append("email", user.email);
      formData.append("phone", user.phone);
      formData.append("address", user.address);
      formData.append("availabilityFrom", user.availabilityFrom);
      // formData.append("availabilityTo", user.availabilityTo);
      formData.append("logo", isLogo);
      formData.append("consultImg", consult);

      const updateHeader = await updateHeaderApi(formData);

      if (updateHeader.success) {
        toast.success(updateHeader.msg);
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
    getHeader();
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
                      <h2
                        className="text-dark mb-0"
                        style={{ fontWeight: "normal" }}
                      >
                        Navbar Update
                      </h2>
                      <p>
                        Please fill input fields with the same format as it is
                        in input placeholder{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form method="POST">
                    <div className="flex-items">
                      <div className="indiv-field">
                        <h3>Logo</h3>
                        <img className="logo-to-show" src={logo} alt="" />
                        <label className="label" htmlFor="logo">
                          <i class="fa-solid fa-upload"></i> Upload new
                          <span>
                            <input
                              name="logo"
                              type="file"
                              accept="image/*"
                              id="logo"
                              required="true"
                              onChange={changeLogo}
                            />
                          </span>
                        </label>
                      </div>
                      <div className="indiv-field">
                        <h3>Consult Image</h3>
                        <img className="logo-to-show" src={newConsult} alt="" />
                        <label className="label" htmlFor="consult">
                          <i class="fa-solid fa-upload"></i> Upload new
                          <span>
                            <input
                              name="consult"
                              type="file"
                              accept="image/*"
                              id="consult"
                              required="true"
                              onChange={changeConsult}
                            />
                          </span>
                        </label>
                      </div>

                      <div className="indiv-field">
                        <label htmlFor="username">email </label>
                        <input
                          name="email"
                          placeholder="abc@gmail.com"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.email}
                        />
                      </div>
                      <div className="indiv-field">
                        <label htmlFor="username">phone</label>
                        <input
                          name="phone"
                          placeholder="+1 123 456 7890"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.phone}
                        />
                      </div>
                      <div className="indiv-field">
                        <label htmlFor="username">address</label>
                        <input
                          name="address"
                          placeholder="Enter address"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.address}
                        />
                      </div>
                      <div className="indiv-field">
                        <label htmlFor="username">Availability</label>
                        <input
                          name="availabilityFrom"
                          placeholder="Enter availability"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.availabilityFrom}
                        />
                      </div>
                      {/* <div className="indiv-field">
                        <label htmlFor="username">availabilityTo</label>
                        <input
                          name="availabilityTo"
                          placeholder="Confirm availabilityTo"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.availabilityTo}
                        />
                      </div> */}
                    </div>
                    <br />
                    <div className="flex justify-space">
                      <div></div>
                      <button
                        className="save-data fix-btn  btn btn-success"
                        type="submit"
                        disabled={isDisable}
                        onClick={updateHeader}
                      >
                        {isDisable ? (
                          <div
                            className="spinner-border  text-success"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        ) : (
                          "Update"
                        )}
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

export default HeaderUpdate;
