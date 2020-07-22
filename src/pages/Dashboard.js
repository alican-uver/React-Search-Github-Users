import React, {useContext} from 'react';
import {Info, Search, User, Repos} from '../components/index';
import { GithubContext } from '../context/context';

const Dashboard = () => {
    const {isLoading} = useContext(GithubContext);
    
    if (isLoading) {
        return <main>
            <Search />
            <p> Will Come Spinner! </p>
        </main>
    }
    return (
        <div>
            <Search />
            <Info />
            <User />
            <Repos />
        </div>
    )
}

export default Dashboard
