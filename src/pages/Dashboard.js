import React, {useContext} from 'react';
import {Info, Search, User, Repos} from '../components/index';
import Spinner from '../components/Spinner';
import { GithubContext } from '../context/context';

const Dashboard = () => {
    const {isLoading} = useContext(GithubContext);
    
    if (isLoading) {
        return <main>
            <Search />
            <Spinner />
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
