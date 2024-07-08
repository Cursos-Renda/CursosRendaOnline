import { HomePage } from '@/pages/homePage';
import React from 'react';
import { Route, Routes } from "react-router-dom"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
    )
}