import React, { Component } from "react";
import API from "../../utils/API";
import Sidebar from "../../components/shared/Navigation";

import Choice from "../../components/dragdropURL/Choice";
import Question from "../../components/dragdropURL/Question";
import Result from "../../components/dragdropURL/Result";
import AuthUserContext from "../../components/Session/context";
import { withAuthorization } from "../../components/Session/index";

import "../../components/shared/Navigation/style.css";
import "./style.css";

// let quesAnsArray = [];
class DragDropPage extends Component {
  static contextType = AuthUserContext;

  state = {
    // QuesAnsArray: this.props.QuesAnsArray,

    buttonClicked: false,
    questionCount: 0,
    score: 0,
    userSelected: "",
    gameFinished: false
  };

  // =============Drag And Drop Code ========================

  onDragOver = ev => {
    ev.preventDefault();
  };

  onDragStart = (ev, choice) => {
    // console.log("dragStart : " + choice);
    ev.dataTransfer.setData("choice", choice);
  };

  onDrop = (ev, cat) => {
    let choice = ev.dataTransfer.getData("choice");
    // This bottom code will set the choices option dragged and not dragged --don't delete it
    let choices = this.props.QuesAnsArray[this.state.questionCount].choices.map(
      item => {
        item.category = "dragged";
        if (item.choice !== choice) {
          item.category = "notDragged";
        }

        return item;
      }
    );

    this.setState({
      // ...this.state,
      userSelected: choice
      // choices
    });
  };
  // ==================================
  generateScore = choice => {
    let rightAnswer = this.props.QuesAnsArray[
      this.state.questionCount
    ].choice1.trim();

    if (choice.trim() === rightAnswer) {
      this.setState({
        score: this.state.score + 1
      });
    }
  };

  // componentDidMount() {
  //   this.loadQuestions();
  //   console.log("in com did mount");
  // }

  // componentDidUpdate() {
  //   this.loadQuestions();
  //   console.log("in com did update");
  // }

  // loadQuestions = () => {
  //   API.getQuestions()
  //     .then(res => {
  //       res.data.map(item =>
  //         quesAnsArray.push({
  //           questions: item.question,
  //           choice1: item.choice1,
  //           choices: [
  //             {
  //               choice: item.choice1,
  //               category: "notDragged"
  //             },
  //             {
  //               choice: item.choice2,
  //               category: "notDragged"
  //             },
  //             {
  //               choice: item.choice3,
  //               category: "notDragged"
  //             }
  //           ]
  //         })
  //       );
  //       this.setState({
  //         QuesAnsArray: this.randomize(quesAnsArray)
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  // randomize = array => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }

  //   let newArray = [];
  //   for (let i = 0; i < 10; i++) {
  //     newArray.push(array[i]);
  //   }
  //   return newArray;
  // };

  onSubmitClick = () => {
    if (this.state.questionCount < 9) {
      this.generateScore(this.state.userSelected);
      this.setState({
        buttonClicked: true,
        questionCount: this.state.questionCount + 1
      });
      // console.log(this.state.questionCount);
    } else {
      this.saveScore();
      this.setState({
        gameFinished: true
      });
    }
    // This bottom code will reset the choices option dragged and not dragged back to original - don't delete it
    let choices = this.props.QuesAnsArray[this.state.questionCount].choices.map(
      item => {
        item.category = "notDragged";

        return item;
      }
    );
  };

  saveScore = () => {
    // console.log("in save score fun");
    API.saveScore({
      userName: this.context.email.substr(0, this.context.email.indexOf("@")),
      email: this.context.email,
      score: this.state.score
    })
      .then(res => console.log("score saved"))
      .catch(err => console.log(err));
  };

  render() {
    const quesAnsArray = this.props.QuesAnsArray;

    var choices = {
      notDragged: [],
      dragged: []
    };

    if (quesAnsArray.length > 0 && this.state.questionCount < 10) {
      if (this.state.buttonClicked === false) {
        quesAnsArray[this.state.questionCount].choices.forEach(item => {
          choices[item.category].push(
            <Choice
              key={item.choice}
              choice={item.choice}
              draggable
              onDragStart={e => this.onDragStart(e, item.choice)}
            >
              {item.choice}
            </Choice>
          );
        });
      } else if (this.state.buttonClicked === true) {
        quesAnsArray[this.state.questionCount].choices.forEach(item => {
          choices[item.category].push(
            <Choice
              key={item.choice}
              choice={item.choice}
              draggable
              onDragStart={e => this.onDragStart(e, item.choice)}
            >
              {item.choice}
            </Choice>
          );
        });
        // this.setState({
        //   choices: choices,
        //   buttonClicked: false
        // });
      }

      var QuestionComp = (
        <Question
          questions={
            this.props.QuesAnsArray[this.state.questionCount].questions
          }
        />
      );
    } else {
      // console.log("data not");
    }

    return (
      <>
        <div id="DragDropPage">
          <Sidebar>
            <h2
              id="score"
              className={this.state.gameFinished === false ? "show" : "hide"}
            >
              Score : <span>{this.state.score}</span>
            </h2>
          </Sidebar>

          <div className="DragDrop">
            <div id="tablecontainer">
              <div className="row">
                <div className="col-12 col-sm-10">
                  <div className="dragDropBorder">
                    <div
                      id="questionGameContainer"
                      className={
                        this.state.gameFinished === false ? "show" : "hide"
                      }
                    >
                      <div id="questionDiv">{QuestionComp}</div>
                      <div
                        id="dragDropArea"
                        onDragOver={e => this.onDragOver(e)}
                        onDrop={e => this.onDrop(e, "dragged")}
                      >
                        {choices.dragged}
                      </div>
                      <div
                        id="dragComponentsDiv"
                        onDrop={e => this.onDrop(e, "notDragged")}
                        onDragOver={e => this.onDragOver(e)}
                      >
                        {choices.notDragged}
                      </div>
                    </div>

                    <div className="row" id="btnDiv">
                      <div className="col-12">
                        {this.state.gameFinished === false ? (
                          <button
                            className="btn btn-primary"
                            onClick={this.onSubmitClick}
                          >
                            Next
                          </button>
                        ) : (
                          <Result score={this.state.score} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(DragDropPage);
