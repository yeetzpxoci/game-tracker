import React, {BrowserRouter, Routes, Route} from 'react';
import Homepage from './Homepage';
import Homepage from './GamelistPage';

function Navbar() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />}>
                    <Route index element={<GamelistPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Navbar;