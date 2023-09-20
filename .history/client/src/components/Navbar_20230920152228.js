import React, {BrowserRouter, Routes, Route} from 'react';
import Homepage from './Homepage';
import Homepage from './GamesPage';

function Navbar() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}>
                    <Route path="/games" element={<GamesPage/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Navbar;