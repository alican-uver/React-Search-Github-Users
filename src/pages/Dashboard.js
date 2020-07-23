import React, { useContext } from 'react';
import { Info, Search, User, Repos } from '../components/index';
import Spinner from '../components/Spinner';
import { GithubContext } from '../context/context';

const Dashboard = () => {
    const { isLoading, isUserOk } = useContext(GithubContext);

    if (isLoading) {
        return <main>
            <Search />
            <Spinner />
        </main>
    }
    return (
        <div>
            {
                isUserOk ? <> <Search />
                    <Info />
                    <User />
                    <Repos /> </>
                    :
                    <>
                        <Search />
                        <div className="no-user">
                            <p className = "no-user-text">There is no user you search</p>
                        </div>
                    </>
            }
        </div>
    )
}

export default Dashboard;
