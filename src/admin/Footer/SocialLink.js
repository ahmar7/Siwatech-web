import React, { useState, useEffect } from "react";

import { Navigate, useParams } from "react-router-dom";
import Header from "../../Layout/Admin/Header";
import SideBar from "../../Layout/Admin/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addSocialLinkApi,
  getBelowBannerApi,
  getSocialFeatureApi,
  getSocialLinkApi,
  isLoginApi,
  updateBannersApi,
} from "../../Api/Services";
// import FormData from "form-data";
//

const SocialLink = () => {
  let navigate = useNavigate();
  const [isDisable, setisDisable] = useState(false);
  const [newSocial1, setNewSocial1] = useState([]);
  const [newSocial2, setNewSocial2] = useState([]);
  const [newSocial3, setNewSocial3] = useState([]);
  const [newSocial4, setNewSocial4] = useState([]);

  //
  const [socialLinks1, setsocialLink1] = useState([]);
  const [socialLinks2, setsocialLink2] = useState([]);
  const [socialLinks3, setsocialLink3] = useState([]);
  const [socialLinks4, setsocialLink4] = useState([]);
  const [socialFeature, setsocialFeature] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [user, setUser] = useState({
    socialName1: "Lorem Ipsum",
    socialName2: "Lorem Ipsum",
    socialName3: "Lorem Ipsum",
    socialName4: "Lorem Ipsum",
    socialLink1: "Lorem Ipsum",
    socialLink2: "Lorem Ipsum",
    socialLink3: "Lorem Ipsum",
    socialLink4: "Lorem Ipsum",
  });
  // Don't remove this, admin auth Api
  let handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const SocialLinks = async () => {
    try {
      const getSocial = await getSocialLinkApi();
      console.log("getSocial: ", getSocial);

      if (getSocial.success) {
        setsocialLink1(getSocial.data.col1.socialLogo.url);
        setsocialLink2(getSocial.data.col2.socialLogo.url);
        setsocialLink3(getSocial.data.col3.socialLogo.url);
        setsocialLink4(getSocial.data.col4.socialLogo.url);
        setUser({
          socialName1: getSocial.data.col1.socialData.socialName,
          socialName2: getSocial.data.col2.socialData.socialName,
          socialName3: getSocial.data.col3.socialData.socialName,
          socialName4: getSocial.data.col4.socialData.socialName,

          socialLink1: getSocial.data.col1.socialData.socialLink,
          socialLink2: getSocial.data.col2.socialData.socialLink,
          socialLink3: getSocial.data.col3.socialData.socialLink,
          socialLink4: getSocial.data.col4.socialData.socialLink,
        });
      } else {
        toast.error(getSocial.msg);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    }
    try {
      const getSocialFeature = await getSocialFeatureApi();

      if (getSocialFeature.success) {
        setsocialFeature(getSocialFeature.data.feature);
      } else {
        toast.error(getSocialFeature.msg);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      setisLoading(false);
    }
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

  let changeSocial1 = (e) => {
    setNewSocial1(e.target.files[0]);
    setsocialLink1(URL.createObjectURL(e.target.files[0]));
  };
  let changeSocial2 = (e) => {
    setNewSocial2(e.target.files[0]);
    setsocialLink2(URL.createObjectURL(e.target.files[0]));
  };
  let changeSocial3 = (e) => {
    setNewSocial3(e.target.files[0]);
    setsocialLink3(URL.createObjectURL(e.target.files[0]));
  };
  let changeSocial4 = (e) => {
    setNewSocial4(e.target.files[0]);
    setsocialLink4(URL.createObjectURL(e.target.files[0]));
  };

  const updateSocial = async () => {
    try {
      setisDisable(true);
      const formData = new FormData();
      formData.append("socialName1", user.socialName1);
      formData.append("socialName2", user.socialName2);
      formData.append("socialName3", user.socialName3);
      formData.append("socialName4", user.socialName4);
      formData.append("socialLink1", user.socialLink1);
      formData.append("socialLink2", user.socialLink2);
      formData.append("socialLink3", user.socialLink3);
      formData.append("socialLink4", user.socialLink4);

      formData.append("image1", newSocial1);
      formData.append("image2", newSocial2);
      formData.append("image3", newSocial3);
      formData.append("image4", newSocial4);

      const updateHeader = await addSocialLinkApi(formData);

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

  useEffect(() => {
    isAdmin();
    SocialLinks();
  }, []);

  if (isLoading) {
    return <div></div>;
  }
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
                        Social Links Update
                      </h2>
                      <p>
                        Please upload image of same size to avoid layout issues
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form method="POST">
                    <div className="flex-items  socialData">
                      <div className="indiv-field">
                        <h3>Social 1</h3>
                        <img
                          className="logo-to-show"
                          src={socialLinks1}
                          alt=""
                        />
                        <label className="label" htmlFor="social1">
                          <i class="fa-solid fa-upload"></i> Upload New
                          <span>
                            <input
                              name="social1"
                              type="file"
                              accept="image/*"
                              id="social1"
                              required="true"
                              onChange={changeSocial1}
                            />
                          </span>
                        </label>
                        <p>Social Name:</p>
                        <input
                          name="socialName1"
                          placeholder="Add Heading"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.socialName1}
                        />
                        <p>Social Link:</p>
                        <input
                          name="socialLink1"
                          placeholder="Add Heading"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.socialLink1}
                        />
                      </div>
                      <div className="indiv-field">
                        <h3>Social 2</h3>
                        <img
                          className="logo-to-show"
                          src={socialLinks2}
                          alt=""
                        />
                        <label className="label" htmlFor="social2">
                          <i class="fa-solid fa-upload"></i> Upload New
                          <span>
                            <input
                              name="social2"
                              type="file"
                              accept="image/*"
                              id="social2"
                              required="true"
                              onChange={changeSocial2}
                            />
                          </span>
                        </label>
                        <p>Social Name:</p>
                        <input
                          name="socialName2"
                          placeholder="Add Heading"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.socialName2}
                        />
                        <p>Social Link:</p>
                        <input
                          name="socialLink2"
                          placeholder="Add Heading"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.socialLink2}
                        />
                      </div>
                      <div className="indiv-field">
                        <h3>Social 3</h3>
                        <img
                          className="logo-to-show"
                          src={socialLinks3}
                          alt=""
                        />
                        <label className="label" htmlFor="social3">
                          <i class="fa-solid fa-upload"></i> Upload New
                          <span>
                            <input
                              name="social3"
                              type="file"
                              accept="image/*"
                              id="social3"
                              required="true"
                              onChange={changeSocial3}
                            />
                          </span>
                        </label>
                        <p>Social Name:</p>
                        <input
                          name="socialName3"
                          placeholder="Add Heading"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.socialName3}
                        />
                        <p>Social Link:</p>
                        <input
                          name="socialLink3"
                          placeholder="Add Heading"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.socialLink3}
                        />
                      </div>
                      <div className="indiv-field">
                        <h3>Social 4</h3>
                        <img
                          className="logo-to-show"
                          src={socialLinks4}
                          alt=""
                        />
                        <label className="label" htmlFor="social4">
                          <i class="fa-solid fa-upload"></i> Upload New
                          <span>
                            <input
                              name="social4"
                              type="file"
                              accept="image/*"
                              id="social4"
                              required="true"
                              onChange={changeSocial4}
                            />
                          </span>
                        </label>
                        <p>Social Name:</p>
                        <input
                          name="socialName4"
                          placeholder="Add Heading"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.socialName4}
                        />
                        <p>Social Link:</p>
                        <input
                          name="socialLink4"
                          placeholder="Add Heading"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.socialLink4}
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
                        onClick={updateSocial}
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

export default SocialLink;
