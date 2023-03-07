import React from "react";
import { connect } from "react-redux";

const YourBikes = ({ user, returnTokens }) => {
  console.log('bikes', user.data.bikes)
  return (
    <div>
      <h1>Bikes go here!</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    returnTokens: state.returnTokens,
  };
};

export default connect(mapStateToProps)(YourBikes);
