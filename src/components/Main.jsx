import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Movies from "./Movies";

const Main = () =>{
    return(
        <main>
            <Routes>
                <Route path="/" element={<Movies />} />
            </Routes>
        </main>
    )
}

export default Main;