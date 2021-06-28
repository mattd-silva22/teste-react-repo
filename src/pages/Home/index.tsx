import { DefaultNavbar } from "../../components/Default-navbar";

import './style.scss'




export function Home() {




    return(
        <div className='body'>
            <DefaultNavbar textLogo='React notes'/>
            <main>
                <div className="container">
                    <div className="login-box">
                        <div className="title-area">
                            <h1>crie sua lista de tarefas!</h1>
                        </div>

                        <p className='slipter'>ou</p>
                        
                        <div>
                            <button>login com google</button>
                        </div>
                            
                        
                    </div>
                </div>
            </main>
        </div>
    )

}