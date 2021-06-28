import { FormEvent, useState } from "react";
import { DefaultNavbar } from "../../components/Default-navbar";



import './style.scss'

type TodoItem =  {
    id: number;
    value: string;
}


export function TasksPage() {


    var taskList = []
    const [ newToDoItem , setNewToDoItem] = useState('')



    function handleCreateNewToDo(event:FormEvent) {
            event.preventDefault();

            if(newToDoItem.trim() == "") {
                return
                // digite algo
            }

            const ToDoItem  = {

                content : newToDoItem
                
            }




    }



    return (
        <>
        <DefaultNavbar textLogo={ 'react notes'} capitalize= {true}/>

        <main className='list-area'>
            <div className="container">
                <div className='top-area'>
                   <div className='title'>
                        <h1>Digite seu To Do: {newToDoItem}</h1>
                    </div>
                
                    <div>
                        <form action="" onSubmit={handleCreateNewToDo}>
                            <input 
                                type="text" 
                                placeholder="texto legal aqui"
                                onChange = { event => { setNewToDoItem(event.target.value)}}
                                value = {newToDoItem}
                            
                            />
                            <button type='submit'>Adcionar</button>
                        </form>
                    </div> 
                </div>
                
            </div>
               
        </main>

        </>






    )



}