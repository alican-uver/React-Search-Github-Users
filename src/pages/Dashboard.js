import React, {useContext} from 'react';
import { Navbar, Info, Search, User, Repos} from '../components/index';
import { GithubContext } from '../context/context';

const Dashboard = () => {
    const {isLoading} = useContext(GithubContext);
    
    if (isLoading) {
        return <main>
            <Navbar />
            <Search />
            <p> Will Come Spinner! </p>
        </main>
    }
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
