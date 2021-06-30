import { useEffect } from "react";
import { useState } from "react";





export function  BlogTeste()  {


    const [posts , setPosts] = useState([]);


    useEffect(()=>{

        
            fetch('https://jsonplaceholder.typicode.com/posts')
              .then((r) => r.json())
              .then((r) => setPosts(r));
              console.log(posts)
          



    },[])



    return (
        <div>
            <div>
                {posts.map( post=> {

                    <p>{post} ola</p>

                })}
            </div>
        </div>
    )










}