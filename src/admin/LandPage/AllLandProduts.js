import React, { useState, useEffect } from "react";

import { NavLink, useParams } from "react-router-dom";
import Header from "../../Layout/Admin/Header";
import SideBar from "../../Layout/Admin/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";

import {
  deleteLandProductApi,
  isLoginApi,
  getLandProductApi,
} from "../../Api/Services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import FormData from "form-data";
//

const AllLandProducts = () => {
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
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisable, setisDisable] = useState(false);

  const getAllProducts = async () => {
    try {
      const updateHeader = await getLandProductApi();
      console.log("updateHeader: ", updateHeader);

      if (updateHeader.success) {
        setProducts(updateHeader.products);
      } else {
        toast.error(updateHeader.msg);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  const deleteProducts = async (item) => {
    setisDisable(true);
    console.log(item._id);
    try {
      const updateHeader = await deleteLandProductApi(item._id);

      if (updateHeader.success) {
        getAllProducts();
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
    getAllProducts();
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
                  <div
                    className="listing"
                    data-ajax-wishlist="true"
                    data-compare-ajax="true"
                  >
                    {products.map((item) => {
                      return (
                        <>
                          <div className="product--box box--minimal">
                            <div className="box--content is--rounded">
                              <div className="product--badges" />
                              <div className="product--info">
                                <a
                                  title="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                                  className="product--image"
                                  href="javascript:void(0)"
                                >
                                  <span className="image--element">
                                    <span className="image--media">
                                      <picture>
                                        <img
                                          loading="lazy"
                                          srcSet={item.image.url}
                                          alt="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                                          title="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                                        />
                                      </picture>
                                    </span>
                                  </span>
                                </a>
                                <a
                                  className="product--title"
                                  title="Petrol engine Kohler 6.5 HP including hydraulic pump, hydraulic unit"
                                  href="javascript:void(0)"
                                >
                                  <font style={{ verticalAlign: "inherit" }}>
                                    <font style={{ verticalAlign: "inherit" }}>
                                      {item.name}
                                    </font>
                                  </font>
                                </a>
                                <div className="product--rating-container" />
                                <div className="product--price-info">
                                  <div
                                    className="price--unit"
                                    title="Contents"
                                  />
                                  <div className="product--price-outer">
                                    <div className="product--price">
                                      <span className="price--default is--nowrap">
                                        <font
                                          style={{ verticalAlign: "inherit" }}
                                        >
                                          <font
                                            style={{ verticalAlign: "inherit" }}
                                          >
                                            {`$${item.price}`}
                                          </font>
                                        </font>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="btns-to">
                                <NavLink
                                  to={`/updateMisc-product/${item._id}`}
                                  disabled={isDisable}
                                  className="save-data fix-btn  btn btn-success"
                                >
                                  Update
                                </NavLink>
                                <button
                                  disabled={isDisable}
                                  onClick={() => deleteProducts(item)}
                                  className="save-data fix-btn  btn btn-danger"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllLandProducts;
