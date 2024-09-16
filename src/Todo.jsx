
const Todo = ({task,isDone}) => {

    // return (
    //     <div>
    //         <ul>
    //             <li>Task : {task} --{isDone}</li>
    //         </ul>
    //     </div>
    // );
    // try rerendering...
    if(isDone==="true"){
        return(
            <div>
                <ul><li>Finished {task}</li></ul>
            </div>
        )
    }
    else{
        return(
            <div>
                <ul><li>Try again {task}</li></ul>
            </div>
        ) 
    }


};

export default Todo;