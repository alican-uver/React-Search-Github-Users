import React, { useState, useEffect, createContext } from 'react';
import myInfo from './staticData/myInfo';
import myRepos from './staticData/myRepos';
import myFollowers from './staticData/myFollowers';
import myFollowing from './staticData/myFollowing';
import axios from 'axios';

const rootUrl = "https://api.github.com";

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(myInfo);
    const [repos, setRepos] = useState(myRepos);
    const [followers, setFollowers] = useState(myFollowers);
    const [following, setFollowing] = useState(myFollowing);

    // Request
    const [requests, setRequests] = useState(0);

    // check requests limit
    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`)
            .then((data) => {
                console.log(data)
                const { remaining } = data.data.rate;
                setRequests(remaining);
                if (remaining === 0) {
                    // error!!
                }
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        checkRequests();
    }, []);

    const contextValue = {
        githubUser, repos, followers, following, requests
    }

    return <GithubContext.Provider value={contextValue}>
        {children}
    </GithubContext.Provider>
}

export { GithubProvider, GithubContext };