import React, { useState, useEffect } from "react";

import { Navigate, useParams } from "react-router-dom";
import Header from "../../Layout/Admin/Header";
import SideBar from "../../Layout/Admin/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addSocialFeatureApi,
  getSocialFeatureApi,
  isLoginApi,
} from "../../Api/Services";
// import FormData from "form-data";
//

const SocialFeature = () => {
  let navigate = useNavigate();
  const [isDisable, setisDisable] = useState(false);
  const [newSocial1, setNewSocial1] = useState([]);
  //
  const [socialLinks1, setsocialLink1] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [user, setUser] = useState({
    featureName: "Lorem Ipsum",
  });
  // Don't remove this, admin auth Api
  let handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const SocialLinks = async () => {
    try {
      const getSocialFeature = await getSocialFeatureApi();

      if (getSocialFeature.success) {
        setsocialLink1(getSocialFeature.data.feature.featureImg.url);
        setUser({ featureName: getSocialFeature.data.feature.featureTitle });
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

  const updateSocial = async () => {
    try {
      setisDisable(true);
      const formData = new FormData();
      formData.append("featureName", user.featureName);

      formData.append("image1", newSocial1);

      const updateHeader = await addSocialFeatureApi(formData);

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
                        Social Feature Update
                      </h2>
                      <p>
                        Please upload image of same size to avoid layout issues
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form method="POST">
                    <div className="flex-items  socialDataFeature">
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
                        <p>Feature Name:</p>
                        <input
                          name="featureName"
                          placeholder="Add Heading"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.featureName}
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

export default SocialFeature;
