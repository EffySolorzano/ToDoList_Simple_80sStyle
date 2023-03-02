import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [tempArray, setTempArray] = useState([
        { task: "Walk dogs", done: false },
        { task: "Gym", done: false }
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
    const bgColors = ["#f77de6", "#007bff", "#28a745", "#dc3545", "#6c757d"];

    useEffect(() => { console.log("se renderizó el componente") }, [tempArray]);
    
    return(
    <>
        <div className="container-fluid justify-content-center align-item-center">
    <div className="row d-flex justify-content-center">
        <input placeholder="Agregue una tarea nueva" onKeyDown={(e) => {
            if (e.keyCode === 13) { //el 13 significa enter
                //console.log("Presionaste el enter")
                setTempArray([...tempArray, { task: e.target.value, done: false }]);
            }
          }} 
        />
    </div>
    <div className="row d-flex justify-content-center">
        <h1>Tasks</h1>
    </div>
    <div className="row d-flex justify-content-center">
        {tempArray && tempArray.length > 0 ?
            <>
                {tempArray.map((item, index) => {
                     const bgColor = bgColors[index % bgColors.length];
                    return (
                        <><li key={index} className="d-flex justify-content-between" style={{ backgroundColor: bgColor}}>
                            {index + 1}  {item.task}  <span>{item.done ? "Done" : "Pending"}</span>
                            <button className="btn btn-danger hidden" type="button" onClick={() => { deleteTask(index); } }>
                                <i className="fas fa-trash-alt w-5 align-center"></i>
                            </button>
                        </li></>
                    );
                })}
            </>
            :
            <>
                <h1>No pending tasks</h1>
            </>
        }
        <h2>Task amount left: {tempArray.length} </h2>
    </div>
</div>

<div className="text-center bottom-fixed">
    <p className="fixed-bottom">
        Made by
        <a href="https://github.com/EffySolorzano"> Solórzano</a>
        <i className="fa fa-feather"></i>
    </p>
</div>
    </>
	
    );
};

export default TodoList;
