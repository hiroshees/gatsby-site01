import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">top</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/orange">go to orange</Link></li>
                    <li><Link to="/apple">go to apple</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export {Header }
