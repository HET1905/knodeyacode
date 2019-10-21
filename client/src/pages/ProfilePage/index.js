import React from "react";
import Sidebar from "../../components/shared/Navigation";
import "../../components/shared/Navigation/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import AuthUserContext from "../../components/Session/context";
import { withAuthorization } from "../../components/Session/index";
import API from "../../utils/API";

class Profile extends React.Component {
  static contextType = AuthUserContext;

  state = {
    name: "",
    grade: 0,
    score: 0
  };

  componentDidMount() {
    this.getScore();
  }

  getScore = () => {
    API.findUserScore(
      this.context.email.substr(0, this.context.email.indexOf("@"))
    )
      .then(res => {
        if (res.data) {
          // console.log(res.data);
          // console.log(res.data[0].score);
          this.setState({
            score: res.data[0].score,
            grade: res.data[0].score * 10
          });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.context);
    // console.log(this.props);
    // console.log(this.state.score);
    return (
      <>
        <Sidebar />
        <div id="profileBackground">
          <div id="message">
            <h2 id="profileTitle">Welcome to Knode your Code!</h2>
            <h3 id="profileUser">
              Hello,{" "}
              {this.context.email.substr(0, this.context.email.indexOf("@"))}!
            </h3>
            <h6 id="profileText">
              Congratulations on starting your journey with us! Please see the
              navigation bar on the side to look through what we offer.
            </h6>
          </div>

          <div id="progress">
            <h3 id="progressUser">
              {this.context.email.substr(0, this.context.email.indexOf("@"))}'s
              progress below:
            </h3>
            <div id="progressText">
              FlashCards:
              <ProgressBar
                animated
                now={45}
                striped
                variant="primary"
                label={`45%`}
              />
            </div>
            <div id="progressText">
              Your Highest Score on Drag and Drop Quiz:
              <ProgressBar
                animated
                now={this.state.grade}
                striped
                variant="primary"
                label={`${this.state.score} out of 10`}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Profile);
