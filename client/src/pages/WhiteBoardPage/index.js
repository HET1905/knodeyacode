import React from "react";
import Sidebar from '../../components/shared/Sidebar';
import { SketchField, Tools } from 'react-sketch';
import "./style.css";

class WhiteBoardPage extends React.Component {


    render() {
        return (
            <div>
                <Sidebar />
                <div id="content">
                    <button id="reset" onClick={()=> window.location.reload(false)}>Reset</button>
                </div>

                <div id="whiteboard">
                    <SketchField width='1122px'
                        height='768px'
                        tool={Tools.Pencil}
                        backgroundColor="white"
                        lineColor='black'
                        lineWidth={3} />
                </div>
            </div>)
    }
}

export default WhiteBoardPage;