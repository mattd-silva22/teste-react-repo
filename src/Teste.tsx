import { useEffect } from "react"
import { FormEvent } from "react"
import { useRef } from "react"
import { useState } from "react"
import { setTextRange } from "typescript"


type  List = string[]
    




export function Teste() {

    

    const [ text , setText] = useState('')
    const [ color , setColor] = useState('Red')
    const [ counter , setCounter] = useState(0)
    const [list , setList] = useState<List>([])

    const TaskList:List = []

    

    
    const increase = ()=> {

        setCounter(counter + 1)

        
    }

    const changeColor = ()=> {

        if ( color == 'Red') {

            setColor('Blue')
        } else {

            setColor('Red')
    }
        }
    
    const handleCreateToDo = (e:FormEvent)=> {
        e.preventDefault()
        setList(list.concat(text))
        setText('')


    }
        


    return (
        <>
        <div>

            <div>Hello world</div>
            <p>Contador: {counter}</p>
            <p> <button onClick={increase}>clique aqui</button> </p>

        </div>

        <div>
            <p className={color}   >Cor atual: {color}</p>
            <p> <button onClick={changeColor}>clique aqui</button> </p>
        </div>


        <div>
            <p>Seu textos: {text}</p>
            
                <form action="" onSubmit={handleCreateToDo} >
                    <input 
                        type="text"
                        onChange={e => { setText(e.target.value)  }}
                        value={text}
                    />
                    <button onSubmit={handleCreateToDo}> clique aqui</button>
                </form>    

                <ul>
                    {list.map( item => {

                        return (
                            <li>{item}</li>
                        )


                    })}
                </ul>
            
        </div>
            
            
        </>
    )



}