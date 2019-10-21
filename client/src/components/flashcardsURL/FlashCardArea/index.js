import React from "react";
import NoteCards from "../Notecard/notecard";
import "./style.css";

function FlashCard(props) {
  // console.log(props);
  return (
    <main>
      <div id="questioncontainer">
        <NoteCards questionArray={props.questionArray} />
      </div>
    </main>
  );
}
export default FlashCard;
