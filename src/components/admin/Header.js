import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { accountService } from '@/_services';

const Header = () => {
    let navigate = useNavigate()

    // Gestion du bouton de déconnexion
    const logout = () => {
        accountService.logout()
        navigate('/auth/login')
    }

    return (
        <div className="AHeader">
            Header Admin
            <Button type="primary" onClick={logout}>Se déconnecter</Button>
        </div>
    );
};

export default Header;