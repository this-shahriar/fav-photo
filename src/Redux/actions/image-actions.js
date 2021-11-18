import axios from "axios";

export const acceptImage = (image) => (dispatch) => {
  dispatch({ type: "ACCEPT", payload: image });
};

export const rejectImage = (image) => (dispatch) => {
  dispatch({ type: "REJECT", payload: image });
};

export const removeImage = (image) => (dispatch) => {
  dispatch({ type: "REMOVE", payload: image });
};

export const removeAllAccepted = () => (dispatch) => {
  dispatch({ type: "REMOVE_ALL_ACCEPTED", payload: null });
};

export const getNewImage = (rejected) => async (dispatch) => {
  dispatch({ type: "GETNEW", payload: null });
  const res = await axios({
    method: "get",
    url: process.env.REACT_APP_UNSPLASH_BASE + "photos/random",
    params: {
      client_id: process.env.REACT_APP_UNSPLASH_ACCESS,
    },
  });

  if (res?.data?.urls?.regular) {
    if (rejected.includes(res.data.id)) getNewImage(rejected);
    else
      dispatch({
        type: "GETNEW",
        payload: {
          id: res.data.id,
          url: res.data.urls.regular,
        },
      });
  } else {
    //no fancy error toasts for now 😌
    alert("Error fetching data");
  }
};
