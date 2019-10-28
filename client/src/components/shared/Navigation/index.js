import React from "react";
import logo from "../Navigation/logo.png";
import { Link } from "react-router-dom";
// import Timer from "../../../components/memorygameURL/Timer/timer";
// import Header from "../../memorygameURL/header/header";
// import AuthUserContext from '../../Session/context'
import { withAuthorization } from "../../Session/index";

// styling sheet
import "./style.css";

class Sidebar extends React.Component {
  signOutUser = () => {
    this.props.firebase.doSignOutUser();
    this.props.history.push("/");
  };
  render() {
    return (
      <>
        <div className="NavPlz">
          <nav className="navbar navbar-expand-lg navbar-dark black">
            <Link to="/" className="navbar-brand logo">
              <img src={logo} alt={logo} />
            </Link>

            {this.props.children}

            <button
              className="btn btn-primary mainButton signOut"
              onClick={this.signOutUser}
            >
              Sign Out
            </button>
          </nav>

          <div className="main-menu">
            {/* <h3>Games and Activities</h3> */}
            <ul className="linklist">
              <li>
                <Link to="/profile">
                  <i className="fa fa-home fa-2x"></i>
                  <span className="nav-text">Profile</span>
                </Link>
              </li>
              <li className="has-subnav">
                <Link to="/draganddrop">
                  <i className="fa fa-laptop fa-2x"></i>
                  <span className="nav-text">Drag and Drop</span>
                </Link>
              </li>
              <li className="has-subnav">
                <Link to="/flashcard">
                  <i className="fa fa-folder-open fa-2x"></i>
                  <span className="nav-text">Flash Cards</span>
                </Link>
              </li>
              <li>
                <Link to="/whiteboard">
                  <i className="fa fa-bar-chart-o fa-2x"></i>
                  <span className="nav-text">White Board</span>
                </Link>
              </li>
              <li>
                <Link to="/memorygame">
                  <i className="fa fa-info fa-2x"></i>
                  <span className="nav-text">Memory Match</span>
                </Link>
              </li>
              <li>
                <Link to="/leaderboard">
                  <i className="fa fa-table fa-2x"></i>
                  <span className="nav-text">Leader board</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Sidebar);
