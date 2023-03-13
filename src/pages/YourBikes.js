import React from "react";
import { connect } from "react-redux";
import axios from 'axios';

const YourBikes = ({ user, returnTokens }) => {
  console.log('bikes', user.data.bikes)
  return (
    <div>
      <h1>Bikes go here!</h1>
    </div>
  );
};

// class YourBikes extends React.Component {
//   // ({ user, returnTokens }) => {
//   componentDidMount() {
//     const storeBikes = async () => {
//       console.log("bikes:", this.props.user.data.bikes, 'tokens:', this.props.returnTokens);
//       // axios.get("http://localhost:4000/api/bikes")
//       //   .then(res => console.log('res!!:', res))
//       //   .catch(err => console.log('err!:', err))
//       try {
//         // If not redirected to Strava, return to home
//         if (_.isEmpty(this.props.location)) {
//           this.props.navigate("/");
//         }

//         // Save the Auth Token to the Store (it's located under 'search' for some reason)
//         const stravaAuthToken = cleanUpAuthToken(this.props.location.search);
//         // Post Request to Strava (with AuthToken) which returns Refresh Token and and Access Token
//         const tokens = await testAuthGetter(stravaAuthToken);
//         this.props.setUser(tokens);
//         const accessToken = tokens.access_token;
//         const userID = tokens.athlete.id;

//         // Axios request to get users info
//         const user = await getUserData(userID, accessToken);
//         this.props.setUserBikes(user);

//         // Once complete, go to display page
//         this.props.navigate("/yourbikes");
//       } catch (error) {
//         this.props.navigate("/");
//       }
//     };
//     storeBikes();
//   }

//   render() {

//     return (
//       <div>
//         <h1>Bikes go here!</h1>
//       </div>
//     );
//   }
// };

const mapStateToProps = (state) => {
  return {
    user: state.user,
    returnTokens: state.returnTokens,
  };
};

export default connect(mapStateToProps)(YourBikes);
