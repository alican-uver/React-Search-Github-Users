import React from 'react';
import { Navbar, Info, Search, User, Repos} from '../components/index';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Search />
            <Info />
            <User />
            <Repos />
        </div>
    )
}

export default Dashboard
