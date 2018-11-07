import Feed from "../views/feed/Feed";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setImageName } from "../actions/appHeaderActions";

const mapStateToProps = (state, ownProps) => ({
  feed: state.feedReducer.feed
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

Feed.contextTypes = {
  store: PropTypes.object
};

const FeedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);

export default FeedContainer;
