import React, {useState} from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Language from './Language'

const Header = () => {
    const [selected, setSelected] = useState(<i class="fas fa-globe"></i>);
    return (
        <header>
            <div className = "container header-container">
                <div className = "logo"></div>
                <nav>
                    <BrowserRouter>
                        <Link to = "/">
                            Mağazanı yarat
                        </Link>
                        <Link to = "/">
                            Necə işləyir?
                        </Link>
                        <Link to = "/">
                            FAQ
                        </Link>
                        <Language selected={selected} setSelected={setSelected}/>
                    </BrowserRouter>
                </nav>
            </div>
        </header>
    )
}

export default Header
