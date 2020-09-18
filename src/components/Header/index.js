import React from 'react';
import { CgProfile } from 'react-icons/cg';

import './styles.css';

const Header = () => (
    <header className="main-header">
        <div className="brand">
            <h2>Facebook.</h2>
        </div>
        <div className="profile">
            <a href="#">
                <p>Meu perfil</p>
                <CgProfile />
            </a>
        </div>
    </header>
);

export default Header;