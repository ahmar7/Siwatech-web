import React, { useState, useEffect } from "react";

import { Navigate, useParams } from "react-router-dom";
import Header from "../../Layout/Admin/Header";
import SideBar from "../../Layout/Admin/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAboutApi,
  getBelowBannerApi,
  isLoginApi,
  updateAboutApi,
  updateBannersApi,
} from "../../Api/Services";
// import FormData from "form-data";
//

const HomeAbout = () => {
  let navigate = useNavigate();
  const [isDisable, setisDisable] = useState(false);
  const [newSlider1, setNewSlider1] = useState([]);
  const [newSlider2, setNewSlider2] = useState([]);

  const [about, setAbout] = useState([]);
  const [user, setUser] = useState({
    heading: "Lorem Ipsum",
    paragraph: "Lorem Ipsum",
  });
  // Don't remove this, admin auth Api
  let handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
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
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
    }
  };
  // Don't remove this, admin auth Api
  const updateAbout = async () => {
    try {
      setisDisable(true);
      const formData = new FormData();
      formData.append("heading", user.heading);
      formData.append("paragraph", user.paragraph);
      let body = { user };

      const updateAbout = await updateAboutApi(body);
      if (updateAbout.success) {
        toast.success(updateAbout.msg);
      } else {
        toast.error(updateAbout.msg);
      }
    } catch (error) {
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      setisDisable(false);
    }
  };

  const getAbout = async () => {
    try {
      const getAbout = await getAboutApi();

      if (getAbout.success) {
        setUser({
          heading: getAbout.About.heading,
          paragraph: getAbout.About.paragraph,
        });
      } else {
        toast.error(getAbout.msg);
      }
    } catch (error) {
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      //  setisLoading(false);
    }
  };

  useEffect(() => {
    isAdmin();
    getAbout();
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
                        Home About Update
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form method="POST">
                    <div className="flex-items align-left full-width">
                      <div className="indiv-field">
                        <label htmlFor="username"> Heading</label>
                        <input
                          name="heading"
                          placeholder="Add Heading"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.heading}
                        />
                      </div>
                      <div className="indiv-field">
                        <label htmlFor="username">Paragraph</label>
                        <textarea
                          className="txt-area"
                          name="paragraph"
                          placeholder="Enter Paragraph"
                          type="text"
                          required="true"
                          rows={10}
                          onChange={handleInput}
                          value={user.paragraph}
                        />
                      </div>
                    </div>
                    <br />
                    <div className="flex justify-space">
                      <div></div>
                      <button
                        className="save-data fix-btn  btn btn-success"
                        type="submit"
                        disabled={isDisable}
                        onClick={updateAbout}
                      >
                        {isDisable ? (
                          <div
                            className="spinner-border  text-success"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        ) : (
                          "Save"
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

export default HomeAbout;
