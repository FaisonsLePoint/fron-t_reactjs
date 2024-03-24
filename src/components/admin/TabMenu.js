import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Tabs } from 'antd';
import { Scan } from '@/pages/Admin';

const items = [
    {
        key: '1',
        label: 'Badgeages',
        children: <Scan/>,
    },
    {
        key: '2',
        label: 'Gestion des utilisateurs.trices',
        children: <div>
                        <ul>
                            <li>
                                <ul>
                                    <li><Link to="/admin/user/index">Liste</Link></li>
                                    <li><Link to="/admin/user/add">Ajouter</Link></li>
                                    <li><Link to="/admin/user/add">Modifier</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div id="admin_body"><Outlet/></div>
                    </div>,
    },
    {
        key: '3',
        label: 'Génération des QR Codes',
        children: 'TBD',        
    }
  ];

const TabMenu = () => {
    return (
        <div className="SideMenu">
            <Tabs defaultActiveKey="1" type="card" items={items}/>
        </div>
    );
};

export default TabMenu;