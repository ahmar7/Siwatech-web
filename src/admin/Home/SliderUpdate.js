import React, { useState, useEffect } from "react";

import { Navigate, useParams } from "react-router-dom";
import Header from "../../Layout/Admin/Header";
import SideBar from "../../Layout/Admin/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import "./SliderUpdate.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getSliderApi, isLoginApi, updateSliderApi } from "../../Api/Services";
// import FormData from "form-data";
//

const SliderUpdate = () => {
  let navigate = useNavigate();
  const [isDisable, setisDisable] = useState(false);
  const [newSlider1, setNewSlider1] = useState([]);
  const [newSlider2, setNewSlider2] = useState([]);
  const [newSlider3, setNewSlider3] = useState([]);
  const [slide1, setSlide1] = useState();
  const [slide2, setSlide2] = useState();
  const [slide3, setSlide3] = useState();
  const [user, setUser] = useState({
    bannerTextArray1: "Lorem Ipsum",
    bannerTextArray2: "Lorem Ipsum",
    bannerTextArray3: "Lorem Ipsum",
  });
  // Don't remove this, admin auth Api
  let handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
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

  let changeSlide1 = (e) => {
    setNewSlider1(e.target.files[0]);
    setSlide1(URL.createObjectURL(e.target.files[0]));
  };
  let changeSlide2 = (e) => {
    setNewSlider2(e.target.files[0]);
    setSlide2(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files);
  };
  console.log(slide1);
  let changeSlide3 = (e) => {
    setNewSlider3(e.target.files[0]);
    setSlide3(URL.createObjectURL(e.target.files[0]));
  };

  const updateBanner = async () => {
    try {
      setisDisable(true);
      const formData = new FormData();
      formData.append("bannerTextArray1", user.bannerTextArray1);
      formData.append("bannerTextArray2", user.bannerTextArray2);
      formData.append("bannerTextArray3", user.bannerTextArray3);
      formData.append("image1", newSlider1);
      console.log("newSlider1: ", newSlider1);
      formData.append("image2", newSlider2);
      formData.append("image3", newSlider3);
      console.log("newSlider3: ", newSlider3);
      const updateHeader = await updateSliderApi(formData);

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

  const getBanners = async () => {
    try {
      const getSlider = await getSliderApi();

      if (getSlider.success) {
        toast.success(getSlider.msg);
        setSlide1(getSlider.findHeader.image1.url);
        setSlide2(getSlider.findHeader.image2.url);
        setSlide3(getSlider.findHeader.image3.url);
        setNewSlider1(getSlider.findHeader.image1.url);
        setNewSlider2(getSlider.findHeader.image2.url);
        setNewSlider3(getSlider.findHeader.image3.url);
        setUser({
          bannerTextArray1: getSlider.findHeader.bannerText[0],
          bannerTextArray2: getSlider.findHeader.bannerText[1],
          bannerTextArray3: getSlider.findHeader.bannerText[2],
        });
        console.log(
          "getSlider.findHeader.bannerText: ",
          getSlider.findHeader.bannerText
        );
      } else {
        toast.error(getSlider.msg);
      }
    } catch (error) {
      console.log("error: ", error);
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
                        Home Slider Update
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
                        <label className="label" htmlFor="slide1">
                          <i class="fa-solid fa-upload"></i> Upload New
                          <span>
                            <input
                              name="slide1"
                              type="file"
                              accept="image/*"
                              id="slide1"
                              required="true"
                              onChange={changeSlide1}
                            />
                          </span>
                        </label>
                      </div>
                      <div className="indiv-field">
                        <h3>Slide 2</h3>
                        <img className="logo-to-show" src={slide2} alt="" />
                        <label className="label" htmlFor="slide2">
                          <i class="fa-solid fa-upload"></i> Upload New
                          <span>
                            <input
                              name="slide2"
                              type="file"
                              accept="image/*"
                              id="slide2"
                              required="true"
                              onChange={changeSlide2}
                            />
                          </span>
                        </label>
                      </div>
                      <div className="indiv-field">
                        <h3>Slide 3</h3>
                        <img className="logo-to-show" src={slide3} alt="" />
                        <label className="label" htmlFor="slide3">
                          <i class="fa-solid fa-upload"></i> Upload New
                          <span>
                            <input
                              name="slide3"
                              type="file"
                              accept="image/*"
                              id="slide3"
                              required="true"
                              onChange={changeSlide3}
                            />
                          </span>
                        </label>
                      </div>
                      <div className="indiv-field">
                        <label htmlFor="username">Service Name 1</label>
                        <input
                          name="bannerTextArray1"
                          placeholder="Lorem Ipsum"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.bannerTextArray1}
                        />
                      </div>
                      <div className="indiv-field">
                        <label htmlFor="username">Service Name 2</label>
                        <input
                          name="bannerTextArray2"
                          placeholder="Lorem Ipsum"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.bannerTextArray2}
                        />
                      </div>
                      <div className="indiv-field">
                        <label htmlFor="username">Service Name 3</label>
                        <input
                          name="bannerTextArray3"
                          placeholder="Lorem Ipsum"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.bannerTextArray3}
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
                        onClick={updateBanner}
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

export default SliderUpdate;
