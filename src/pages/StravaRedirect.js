import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

import { setUser, setUserBikes } from "../actions";
import {
  cleanUpAuthToken,
  testAuthGetter,
  getUserData,
} from "../utils/functions";
import  { withRouter } from "../router/withRouter"

class StravaRedirect extends React.Component {
  componentDidMount() {
    const authenticate = async () => {

      try {
        // If not redirected to Strava, return to home
        if (_.isEmpty(this.props.location)) {
          this.props.navigate('/')
        }

        // Save the Auth Token to the Store (it's located under 'search' for some reason)
        const stravaAuthToken = cleanUpAuthToken(this.props.location.search);
        // Post Request to Strava (with AuthToken) which returns Refresh Token and and Access Token
        const tokens = await testAuthGetter(stravaAuthToken);
        this.props.setUser(tokens);
        const accessToken = tokens.access_token;
        const userID = tokens.athlete.id;

        // Axios request to get users info
        const user = await getUserData(userID, accessToken);
        this.props.setUserBikes(user);

        // Once complete, go to display page
        this.props.navigate('/yourbikes')
      } catch (error) {
        this.props.navigate('/')
      }
    };
    authenticate();
  }

  render() {
    return <div>Loading</div>;
  }
}

const mapStateToProps = (state) => {
  return { authTokenURL: state.authTokenURL };
};

export default connect(mapStateToProps, {
  setUserBikes,
  setUser,
})(withRouter(StravaRedirect));
