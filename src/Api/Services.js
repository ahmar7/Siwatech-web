import { deleteApi, getApi, putApi, postApi, patchApi } from "./axiosService";

export const loginApi = (data) => {
  return postApi("login", data);
};
export const updateProfileApi = (data) => {
  return postApi("update-profile", data);
};
export const getProfileApi = () => {
  return getApi("update-profile");
};
export const addMiscProsuctApi = (data) => {
  return postApi("addMiscProduct", data);
};
export const updatePasswordApi = (data) => {
  return postApi("update-password", data);
};
export const addLandProsuctApi = (data) => {
  return postApi("addLandProduct", data);
};

export const updateHeaderApi = (data) => {
  return patchApi("addHeader", data);
};
export const getSliderApi = () => {
  return getApi("getBanners");
};
export const getMiscProductApi = () => {
  return getApi("getMiscProducts");
};
export const getLandProductApi = () => {
  return getApi("getLandProducts");
};
export const getSingleLandProductApi = (id) => {
  return getApi(`getLandProducts/${id}`);
};
export const getSingleMiscProductApi = (id) => {
  return getApi(`getMiscProducts/${id}`);
};
export const getInformationApi = () => {
  return getApi("getInformation");
};

export const isLoginApi = () => {
  return getApi("auth");
};
export const getBelowBannerApi = () => {
  return getApi("getBelowBanners");
};
export const getAboutApi = () => {
  return getApi("getHomeAbout");
};
export const getSocialLinkApi = () => {
  return getApi("getSocialLinks");
};
export const getSocialFeatureApi = () => {
  return getApi("getSocialFeature");
};
export const getMiscBannerApi = () => {
  return getApi("getMiscBanner");
};
export const getLandBannerApi = () => {
  return getApi("getLandBanner");
};
export const updateSliderApi = (data) => {
  return patchApi("addSlider", data);
};
export const updateMiscProductApi = (data, id) => {
  return putApi(`/updateMiscProducts/${id}`, data);
};
export const updateLandProductApi = (data, id) => {
  return putApi(`/updateLandProducts/${id}`, data);
};
export const updateBannersApi = (data) => {
  return patchApi("addBanners", data);
};
export const updateAboutApi = (data) => {
  return patchApi("updateHomeAbout", data);
};
export const addInformationApi = (data) => {
  return patchApi("addInformation", data);
};
export const addSocialLinkApi = (data) => {
  return patchApi("addSocial", data);
};
export const addSocialFeatureApi = (data) => {
  return patchApi("addSocialFeature", data);
};
export const addMiscBannerApi = (data) => {
  return patchApi("updateMiscBanner", data);
};
export const addLandBannerApi = (data) => {
  return patchApi("updateLandBanner", data);
};
export const deleteMiscProductApi = (id) => {
  return deleteApi(`/product/${id}`);
};
export const deleteLandProductApi = (id) => {
  return deleteApi(`/productLand/${id}`);
};
