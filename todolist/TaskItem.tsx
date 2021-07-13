import { isCompositeComponent } from "react-dom/test-utils"


type TaskItemProps = {
    task : string;
    taskId : number;
    isComplete: boolean
}

export function TaskItem(props:TaskItemProps) {
    
    function handleRemoveTask() {



    }   

    function handleMarkTask() {
        
    }

    return (

        <li key={props.taskId}> {props.task} / <button>check</button> | <button onClick={handleRemoveTask}>remove</button> | {props.isComplete ? 'feito ' : 'nao feito'} </li>
    )
}