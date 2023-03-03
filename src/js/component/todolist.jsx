import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [tempArray, setTempArray] = useState([
        { task: "Walk dogs", done: false },
        { task: "Go to Gym", done: false },
        { task: "Do dishes", done: false },
        { task: "Work 4 hours", done: false },
        { task: "Organize Desk", done: false },
    ]);
    //const arregloTemp = [“Pasear al perro”, “Ir al cine”];
    const deleteTask = (index) => {
        setTempArray(
          tempArray.filter((item, i) => {
            return i !== index;
          })
        );
      };

    //added an array with colors to loop as tasks are being added.
    const bgColors = ["#FF69B4", "#40E0D0", "#FEFF38", "#FE18D3", "#39FF14"];

    useEffect(() => { console.log("se renderizó el componente") }, [tempArray]);
    
    return(
    <>
        <div><h1 className="header">Fresh Organizer<i className="fa fa-rocket"></i></h1></div>
        <div className="container">
        <div className="container-fluid justify-content-center align-item-center mt-10" id="bar">
          <div className="row d-flex justify-content-center">
             <input className="pending" placeholder="Add a new task" onKeyDown={(e) => {
                if (e.keyCode === 13) { //el 13 significa enter
                //console.log("Presionaste el enter")
                  setTempArray([...tempArray, { task: e.target.value, done: false }]);
            }
          }} 
        />
    </div>
    <div className="row d-flex justify-content-center">
        <h1 className="title">Tasks</h1>
    </div>
    <div className="row d-flex justify-content-center " style={{ maxHeight: "200px", overflowY: "scroll" }}>
        {tempArray && tempArray.length > 0 ?
            <>
                {tempArray.map((item, index) => {
                     const bgColor = bgColors[index % bgColors.length];
                    return (
                        <><li key={index} className="d-flex justify-content-between pending background" style={{ backgroundColor: bgColor}}>
                            {index + 1}  {item.task}  <span>{item.done ? "Done" : ""}</span>
                            <button className="btn btn-danger hidden" type="button" onClick={() => { deleteTask(index); } }>
                                <i className="fas fa-trash-alt w-5 align-center"></i>
                            </button>
                        </li></>
                    );
                })}
            </>
            :
            <>
                <h1 className="pending">No pending tasks</h1>
            </>
        }
          <h2 className="pending">Task amount left: {tempArray.length} </h2>
      </div>
    </div>
    </div> 

    <div className="text-center bottom-fixed bottom">
       <p className="fixed-bottom">
        Made by
        <a href="https://github.com/EffySolorzano"> Solórzano</a>
        <i className="fa fa-feather"></i>
        <div><i className="fa-regular fa-copyright"></i>1989 Copyright</div>
        </p> 
    </div>
    </>
	
    );
};

export default TodoList;
