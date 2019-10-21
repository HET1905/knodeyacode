import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withAuthentication } from "./components/Session";

import API from "./utils/API";

// Main Page
import MainPage from "./pages/MainPage";

//Profile Page
import ProfilePage from "./pages/ProfilePage";
import SignInPage from "./pages/SignIn";

// Games
import DragDropPage from "../src/pages/DragAndDropPage";
import FlashCardPage from "../src/pages/FlashCardPage";
import MemoryGamePage from "../src/pages/MemoryPage";
import WhiteBoardPage from "./pages/WhiteBoardPage";

// Leaderboard
import LeaderboardPage from "../src/pages/LeaderboardPage";
import Result from "../src/components/dragdropURL/Result";

let quesAnsArray = [];
class App extends React.Component {
  state = {
    QuesAnsArray: []
    // buttonClicked: false,
    // questionCount: 0,
    // score: 0,
    // userSelected: "",
    // gameFinished: false
  };
  componentDidMount() {
    this.loadQuestions();
    // console.log("in com did mount");
  }
  loadQuestions = () => {
    API.getQuestions()
      .then(res => {
        res.data.map(item =>
          quesAnsArray.push({
            questions: item.question,
            choice1: item.choice1,
            choices: [
              {
                choice: item.choice1,
                category: "notDragged"
              },
              {
                choice: item.choice2,
                category: "notDragged"
              },
              {
                choice: item.choice3,
                category: "notDragged"
              }
            ]
          })
        );
        this.setState({
          QuesAnsArray: this.randomize(quesAnsArray)
        });
        console.log(this.state.QuesAnsArray);
      })
      .catch(err => console.log(err));
  };
  randomize = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    let newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/signin" component={SignInPage} />
          <Route exact path="/profile" component={ProfilePage} />

          {/* Original code */}
          {/* <Route exact path="/draganddrop" component={DragDropPage} /> */}

          <Route
            exact
            path="/draganddrop"
            render={() => (
              <DragDropPage QuesAnsArray={this.state.QuesAnsArray} />
            )}
          />

          {/* <Route
            path="/dashboard"
            render={props => <Dashboard {...props} isAuthed={true} />}
          /> */}

          <Route exact path="/flashcard" component={FlashCardPage} />
          <Route exact path="/memorygame" component={MemoryGamePage} />
          <Route exact path="/whiteboard" component={WhiteBoardPage} />
          <Route exact path="/leaderboard" component={LeaderboardPage} />
          <Route exact path="/Result" component={Result} />
        </Switch>
      </Router>
    );
  }
}

export default withAuthentication(App);
