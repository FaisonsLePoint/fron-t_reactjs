import React from 'react';

import './admin.css'

import Header from '@/components/admin/Header'
import TabMenu from '@/components/admin/TabMenu'


const ALayout = () => {
    return (
        <div className="ALayout">
            <Header/>
            <div id="admin">
                <TabMenu/>
            </div>
        </div>
    );
};

export default ALayout;