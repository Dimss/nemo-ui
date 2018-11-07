import ApiClient from "../api/APIClient";
import { notification } from "antd";
export const SET_FEED = "SET_FEED";

export const setFeed = feed => {
  return {
    type: SET_FEED,
    feed: feed
  };
};

export function loadFeed() {
  return async (dispatch, getState) => {
    let err, resData;
    [err, resData] = await new ApiClient().fetchUserFeed();
    if (err) {
      notification.error({ message: "Error", description: err.message });
    } else {
      notification.success({
        message: "Success",
        description: "User feed is loaded"
      });
      dispatch(setFeed(resData.data.data));
    }
  };
}
