import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import Header from "../../Layout/Admin/Header";
import SideBar from "../../Layout/Admin/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";

import {
  addLandProsuctApi,
  isLoginApi,
  updateHeaderApi,
} from "../../Api/Services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import FormData from "form-data";
//

const AddLandProduct = () => {
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
  const [logo, setLogo] = useState();

  const [user, setUser] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
    youtubeLink: "",
    remarks: "",
  });
  let handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  let changeLogo = (e) => {
    setisLogo(e.target.files[0]);
    setLogo(URL.createObjectURL(e.target.files[0]));
  };
  const updateHeader = async () => {
    try {
      if (
        !user.name ||
        !user.price ||
        !user.description ||
        !user.stock ||
        !user.youtubeLink ||
        !user.remarks ||
        !isLogo
      ) {
        return toast.error("Please fill all the fields");
      }
      setisDisable(true);
      const formData = new FormData();

      formData.append("name", user.name);
      formData.append("price", user.price);
      formData.append("description", user.description);
      formData.append("stock", user.stock);
      formData.append("youtubeLink", user.youtubeLink);
      formData.append("remarks", user.remarks);
      formData.append("image", isLogo);
      console.log("isLogo:1 ", isLogo);

      const updateHeader = await addLandProsuctApi(formData);

      if (updateHeader.success) {
        navigate("/allLand-products");
        return toast.success(updateHeader.msg);
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
                        Add Product
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
                      <div className="indiv-field cover">
                        <h3>Image</h3>
                        <img className="logo-to-show" src={logo} alt="" />
                        <label className="label" htmlFor="logo">
                          <i class="fa-solid fa-upload"></i> Upload
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
                        <label htmlFor="username">Product Name </label>
                        <input
                          name="name"
                          placeholder="Enter Product Name"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.name}
                        />
                      </div>
                      <div className="indiv-field">
                        <label htmlFor="username">Product Price</label>
                        <input
                          name="price"
                          placeholder="Enter Product Price"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.price}
                        />
                      </div>
                      <div className="indiv-field">
                        <label htmlFor="username">Enter Description</label>
                        <textarea
                          name="description"
                          placeholder="Enter description"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.description}
                        />
                      </div>
                      <div className="indiv-field">
                        <label htmlFor="username">
                          Enter Stock Availability
                        </label>
                        <input
                          name="stock"
                          placeholder="Enter availability"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.stock}
                        />
                      </div>
                      <div className="indiv-field">
                        <label htmlFor="username">Add Youtube Link</label>
                        <input
                          name="youtubeLink"
                          placeholder="Add link"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.youtubeLink}
                        />
                      </div>
                      <div className="indiv-field">
                        <label htmlFor="username">Add Remarks</label>
                        <textarea
                          name="remarks"
                          placeholder="Add link"
                          type="text"
                          required="true"
                          onChange={handleInput}
                          value={user.remarks}
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

export default AddLandProduct;
