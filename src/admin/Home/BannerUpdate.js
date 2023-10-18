import React, { useState, useEffect } from "react";

import { Navigate, useParams } from "react-router-dom";
import Header from "../../Layout/Admin/Header";
import SideBar from "../../Layout/Admin/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getBelowBannerApi,
  isLoginApi,
  updateBannersApi,
} from "../../Api/Services";
// import FormData from "form-data";
//

const BannerUpdate = () => {
  let navigate = useNavigate();
  const [isDisable, setisDisable] = useState(false);
  const [slide1, setSlide1] = useState();
  const [newSlider1, setNewSlider1] = useState([]);
  const [newSlider2, setNewSlider2] = useState([]);
  const [slide2, setSlide2] = useState();

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

  let changeBanner1 = (e) => {
    setNewSlider1(e.target.files[0]);
    setSlide1(URL.createObjectURL(e.target.files[0]));
  };
  let changeBanner2 = (e) => {
    setNewSlider2(e.target.files[0]);
    setSlide2(URL.createObjectURL(e.target.files[0]));
  };

  const updateBanners = async () => {
    try {
      setisDisable(true);
      const formData = new FormData();
      formData.append("image1", newSlider1);
      formData.append("image2", newSlider2);

      const updateHeader = await updateBannersApi(formData);

      if (updateHeader.success) {
        toast.success(updateHeader.msg);
      } else {
        toast.error(updateHeader.msg);
      }
    } catch (error) {
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      setisDisable(false);
    }
  };

  const getBanners = async () => {
    try {
      const getSlider = await getBelowBannerApi();

      if (getSlider.success) {
        setSlide1(getSlider.findBelow.banner1.url);
        setSlide2(getSlider.findBelow.banner2.url);
        setNewSlider1(getSlider.findBelow.banner1.url);
        setNewSlider2(getSlider.findBelow.banner2.url);
      } else {
        toast.error(getSlider.msg);
      }
    } catch (error) {
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
    }
  };

  useEffect(() => {
    isAdmin();
    getBanners();
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
                        Home Banners Update
                      </h2>
                      <p>
                        Please upload image of same size to avoid layout issues
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form method="POST">
                    <div className="flex-items full-width">
                      <div className="indiv-field">
                        <h3>Slide 1</h3>
                        <img className="logo-to-show" src={slide1} alt="" />
                        <label className="label" htmlFor="belowbanner1">
                          <i class="fa-solid fa-upload"></i> Upload New
                          <span>
                            <input
                              name="belowbanner1"
                              type="file"
                              accept="image/*"
                              id="belowbanner1"
                              required="true"
                              onChange={changeBanner1}
                            />
                          </span>
                        </label>
                      </div>
                      <div className="indiv-field">
                        <h3>Slide 2</h3>
                        <img className="logo-to-show" src={slide2} alt="" />
                        <label className="label" htmlFor="belowbanner2">
                          <i class="fa-solid fa-upload"></i> Upload New
                          <span>
                            <input
                              name="belowbanner2"
                              type="file"
                              accept="image/*"
                              id="belowbanner2"
                              required="true"
                              onChange={changeBanner2}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <br />
                    <div className="flex justify-space">
                      <div></div>
                      <button
                        className="save-data fix-btn  btn btn-success"
                        type="submit"
                        disabled={isDisable}
                        onClick={updateBanners}
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

export default BannerUpdate;
