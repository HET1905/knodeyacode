import React from "react";
import Sidebar from "../../components/shared/Navigation";
import '../../components/shared/Navigation/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import './styles.css';
// import Ticker from "react-ticker";
// import StockTicker from "../../components/ticker/ticker";
// // import NewTicker from "../../components/ticker/newTicker"
// import API from "../../utils/API";


class Profile extends React.Component {


  render() {
    return (
      <>
        <Sidebar />
        <div id="profileBackground">
          <div id="message">
            <h2 id="profileTitle">Welcome to Knode your Code!</h2>
            <h3 id="profileUser">Hello, User!</h3>
            <p id="profileText">Congratulations on starting your journey with us! Please see the navigation bar on the side to look through what we offer.</p>
          </div>

          <div id="progress">
            <h3 id="progressUser">User, This is your progress below:</h3>
            <p id="progressText">FlashCards:
          <ProgressBar animated now={45} striped variant="primary" label={`45%`} />
            </p>
            <p id="progressText">Your Highest Score on Drag and Drop Quiz:
          <ProgressBar animated now={95} striped variant="primary" label={`95%`} />
            </p>
          </div>
        </div>

        {/* <div id="brotherdiv">
          <h3 id="profileTitle">This is the profile page</h3>
          <div className="Flashpage">
            <div className="row">
              <div className="col-12 col-sm-2">
              </div>
            </div>
          </div>

          <footer id="ticker">
              {/* <StockTicker /> */}


        {/* <NewTicker /> */}

        {/* 
            </footer>

          </div>

        </div>

        <div id="profilemain">
          <div id="profileImage">
            <div id="triangle">

            </div>

          </div>

          </div>
        </div> */}
      </>
    );
  }
};

export default Profile;