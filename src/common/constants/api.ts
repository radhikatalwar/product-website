import { $axios, API_URL } from "./axios.instance";

const getApiCall = (
  endPoint: string,
  params: string,
  successCallback: Function,
  errorCallback: Function
) => {
  $axios
    .get(API_URL + endPoint + params, {})
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === "ERR_NETWORK") {
        errorCallback({
          statusCode: "",
          message: err.message,
        });
      } else if (err.response) {
        errorCallback(err.response.data);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        });
      }
    });
};

/** Not using during this assignment , use if needed */
const postApiCall = (
  endPoint: string,
  dataToSend: { [key: string]: any },
  successCallback: Function,
  errorCallback: Function
) => {
  $axios
    .post(API_URL + endPoint, dataToSend)
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === "ERR_NETWORK") {
        errorCallback({
          statusCode: "",
          message: err.message,
        });
      } else if (err.response) {
        errorCallback(err.response.data);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        });
      }
    });
};

/** Not using during this assignment , use if needed */
const putApiCall = (
  endPoint: string,
  params: { [key: string]: any },
  successCallback: Function,
  errorCallback: Function
) => {
  $axios
    .put(API_URL + endPoint, params)
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === "ERR_NETWORK") {
        errorCallback({
          statusCode: "",
          message: err.message,
        });
      } else if (err.response) {
        errorCallback(err.response.data);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        });
      }
    });
};

/** Not using during this assignment , use if needed */
const patchApiCall = (
  endPoint: string,
  params: { [key: string]: any } | string,
  successCallback: Function,
  errorCallback: Function
) => {
  $axios
    .patch(API_URL + endPoint, params)
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === "ERR_NETWORK") {
        errorCallback({
          statusCode: "",
          message: err.message,
        });
      } else if (err.response) {
        errorCallback(err.response.data);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        });
      }
    });
};

const deleteApiCall = (
  endPoint: string,
  params: any,
  successCallback: Function,
  errorCallback: Function
) => {
  $axios
    .delete(API_URL + endPoint + params, {})
    .then((res: any) => {
      successCallback(res);
    })
    .catch((err: any) => {
      if (err.code === "ERR_NETWORK") {
        errorCallback({
          statusCode: "",
          message: err.message,
        });
      } else if (err.response) {
        errorCallback(err.response.data);
      } else if (!err.response) {
        errorCallback({
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        });
      }
    });
};

export { getApiCall, postApiCall, putApiCall, patchApiCall, deleteApiCall };
