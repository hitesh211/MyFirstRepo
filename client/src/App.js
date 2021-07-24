import React from "react";
import Edit from "./components/Edit";

//components that are used...
import Input from "./components/Input";
import List from "./components/List";

const App = () =>{
    return(
        <>
        <div className="main_div">
            <div className="Centre_div">
                <Input />
                <div className="task_list">
                    <List />
                </div>
            </div>
        </div>
    </>
    ) 
}

export default App;