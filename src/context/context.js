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
    // loading 
    const [isLoading, setIsLoading] = useState(false);

    // get github User with api
    const searchUser = async user => {
        setIsLoading(true);
        const response = await axios.get(`${rootUrl}/users/${user}`)
            .catch(err => console.log(err));
        if (response) {
            console.log(response.data)
            setGithubUser(response.data)
            const { login, followers_url, following_url } = response.data;
            // get repos
            axios(`${rootUrl}/users/${login}/repos?per_page=100`)
                .then(response => setRepos(response.data));
            // get followers
            axios(`${rootUrl}/users/${login}/followers`)
                .then(response => setFollowers(response.data));
            // get following
            axios(`${rootUrl}/users/${login}/following`)
                .then(response => setFollowing(response.data));
        }
        else {
            console.log("Sorry no user you search");
        }
        checkRequests();
        setIsLoading(false);
    }

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
        githubUser, repos, followers, following,
        requests, searchUser, isLoading
    }

    return <GithubContext.Provider value={contextValue}>
        {children}
    </GithubContext.Provider>
}

export { GithubProvider, GithubContext };