import React, { FormEvent } from 'react';
import { useState } from 'react';
import { TaskItem } from './TaskItem';

type Task = {
  content : string;
  id : number;
  isComplete: boolean;
}



function App() {

  const [ newTask , setNewtask] = useState<string>('');
  const [taskList , setTaskList] = useState<Task[]>([]);
  const [idCounter , setIdCounter] = useState(0)

  function handleAddTask(event:FormEvent) {

    event.preventDefault();

    if(newTask.trim() === '') {
      alert('voce nao pode enviar nada em branco');
      return;
    }

    let task:Task = {
      content : newTask,
      id : idCounter,
      isComplete: false
    }


    setIdCounter( idCounter + 1)

    setTaskList(taskList.concat(task));
    setNewtask('')


  }



  return (
    <>
    <h1>ola mundo este e meu app em react</h1>

    <div>
      <form onSubmit={handleAddTask}>
          <input 
              type="text"
              placeholder='digite sua tarefa aqui'
              onChange={ e => { setNewtask(e.target.value)}}
              value = {newTask}

          />

          <button type={'submit'}>add</button>

      </form>

      <div>
        <ul>
          {taskList.map( task => {

            return ( <TaskItem  task={task.content} taskId={task.id} isComplete={task.isComplete}/> )
            
            
          })}
        </ul>
      </div>
      
    </div>
    </>
  );
}

export default App;
