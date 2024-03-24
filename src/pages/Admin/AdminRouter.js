import React from 'react';
import { Routes, Route } from "react-router-dom"

import { ALayout, Scan } from '@/pages/Admin'
import { Qrcode } from '@/pages/Admin/Qrcode'
import { User, UEdit, UAdd } from '@/pages/Admin/User'

import Error from '@/_utils/Error'

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout/>}>
                <Route index element={<Scan/>}/>
                <Route path="dashboard" element={<Scan/>}/>
                <Route path="user">
                    <Route path="index" element={<User/>}/>
                    <Route path="edit/:uid" element={<UEdit/>}/>
                    <Route path="add" element={<UAdd/>}/>
                </Route>
                <Route path="qrcode">
                    <Route path="index" element={<Qrcode/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    );
};

export default AdminRouter;