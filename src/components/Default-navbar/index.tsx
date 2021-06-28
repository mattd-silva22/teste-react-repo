

import './style.scss';



type NavbarProps = {
    textLogo : string;
    capitalize? : boolean;
}

export function DefaultNavbar(props:NavbarProps) {
    


    return (
        <header className='navbar-top'>
            <div className="container">
                <div className="logo-area">
                    <h1 className={props.capitalize? 'capitalize-text' : ''}>{props.textLogo}</h1>
                </div>

                <div>
        
                </div>
            </div>
        </header>
    )
}