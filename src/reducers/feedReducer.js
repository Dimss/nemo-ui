import { SET_FEED } from "../actions/feedActions";

const defaultState = {
  feed: []
};

const feedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FEED:
      console.log(action.feed);
      return Object.assign({}, state, { feed: action.feed });
    default:
      return state;
  }
};

export default feedReducer;
