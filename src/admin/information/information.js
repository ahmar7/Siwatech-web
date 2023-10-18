import React, { useState, useEffect } from "react";

import { Navigate, useParams } from "react-router-dom";
import Header from "../../Layout/Admin/Header";
import SideBar from "../../Layout/Admin/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addInformationApi,
  getInformationApi,
  isLoginApi,
} from "../../Api/Services";
// import FormData from "form-data";
//

const Information = () => {
  let navigate = useNavigate();
  const [isDisable, setisDisable] = useState(false);

  const [val, setVal] = useState([{ heading: "", description: "" }]);
  const [why, setWhy] = useState([{ list: "lorem1" }]);
  const [user, setUser] = useState({
    heading: "",
  });
  // Don't remove this, admin auth Api
  let handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const abc = [...val, []];
    setVal(abc);
  };
  const handleAdd2 = (e) => {
    e.preventDefault();
    const abc = [...why, []];
    setWhy(abc);
  };
  const handleChangeInput = (e, i) => {
    const inputdata = [...val];
    let value = e.target.value;
    inputdata[i] = { heading: val[i].heading, description: value };
    setVal(inputdata);
  };
  const handleChangeInput2 = (e, i) => {
    const inputdata = [...why];
    let value = e.target.value;
    inputdata[i] = { list: value };
    setWhy(inputdata);
  };
  const handleChangeName = (e, i) => {
    const inputdata = [...val];
    let value = e.target.value;
    inputdata[i] = { heading: value, description: val[i].description };
    setVal(inputdata);
  };

  const handleDelete = (i) => {
    const deletVal = [...val];
    deletVal.splice(i, 1);
    setVal(deletVal);
  };
  const handleDelete2 = (i) => {
    const deletVal = [...why];
    deletVal.splice(i, 1);
    setWhy(deletVal);
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
  const updateInformation = async (e) => {
    try {
      e.preventDefault();
      setisDisable(true);
      let newHeading = user.heading;
      let body = { val, why, newHeading };

      const updateInformation = await addInformationApi(body);
      if (updateInformation.success) {
        toast.success(updateInformation.msg);
      } else {
        toast.error(updateInformation.msg);
      }
    } catch (error) {
      toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      setisDisable(false);
    }
  };
  const getAbout = async () => {
    try {
      const getinfo = await getInformationApi();

      if (getinfo.success) {
        setVal(getinfo.data.information);
        setWhy(getinfo.data.why.lists);
        setUser({ heading: getinfo.data.why.heading });
      } else {
        // toast.error(getinfo.msg);
      }
    } catch (error) {
      console.log("error: ", error);
      // toast.error(error?.data?.msg || error?.message || "Something went wrong");
    } finally {
      //   setisLoading(false);
      //
    }
  };
  console.log(val);

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
                        Imprint page Update
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form method="POST">
                    <h3 className="no-margin">Add detail For Imprint Page: </h3>
                    <br />
                    {val.map((data, i) => {
                      return (
                        <ul className=" no-pad flex-sng" key={i}>
                          <li>
                            <div className="flex-items align-left full-width">
                              <div className="indiv-field">
                                <label htmlFor="username">Heading</label>
                                <input
                                  name="heading"
                                  value={data.heading}
                                  required="true"
                                  placeholder="Enter Heading"
                                  onChange={(e) => handleChangeName(e, i)}
                                />
                              </div>

                              <div className="indiv-field">
                                <label htmlFor="username">Paragraph</label>

                                <textarea
                                  name="description"
                                  placeholder="Add  description"
                                  value={data.description}
                                  required="true"
                                  rows={7}
                                  onChange={(e) => handleChangeInput(e, i)}
                                />
                                <button
                                  className="del-btn"
                                  type="button"
                                  onClick={() => handleDelete(i)}
                                >
                                  x
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      );
                    })}

                    <div>
                      <button
                        className="btn  btn-primary"
                        onClick={handleAdd}
                        type="button"
                      >
                        Add new fields
                      </button>
                    </div>
                    <br />
                    <h3 className="cus-margin">Information Card Update</h3>
                    <div className="indiv-field">
                      <label htmlFor="username">Information Card Heading</label>
                      <input
                        name="heading"
                        placeholder="Lorem Ipsum"
                        type="text"
                        required="true"
                        onChange={handleInput}
                        value={user.heading}
                      />
                    </div>
                    <br />
                    <p className="cus-margin">Add list of informations</p>
                    <br />

                    {why.map((data, i) => {
                      return (
                        <ul className=" no-pad flex-sng" key={i}>
                          <li>
                            <p> Add List No: {i + 1} </p>
                            <div className="flex-items align-left full-width">
                              <div className="indiv-field">
                                <input
                                  name="description"
                                  placeholder="Add list"
                                  value={data.list}
                                  required="true"
                                  onChange={(e) => handleChangeInput2(e, i)}
                                />
                                <button
                                  className="del-btn"
                                  type="button"
                                  onClick={() => handleDelete2(i)}
                                >
                                  x
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      );
                    })}
                    <div>
                      <button
                        className="btn  btn-primary"
                        onClick={handleAdd2}
                        type="button"
                      >
                        Add new list
                      </button>
                    </div>
                    <div className="flex justify-space">
                      <div></div>
                      <button
                        className="save-data fix-btn  btn btn-success"
                        type="submit"
                        disabled={isDisable}
                        onClick={updateInformation}
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

export default Information;
