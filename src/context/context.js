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
    const [isUserOk, setIsUserOk] = useState(true);

    // get github User with api
    const searchUser = async user => {
        setIsLoading(true);
        const response = await axios.get(`${rootUrl}/users/${user}`)
            .catch(err => console.log(err));
        if (response) {
            setIsUserOk(true);
            setGithubUser(response.data)
            const { login, followers_url } = response.data;

            await Promise.allSettled([
                axios(`${rootUrl}/users/${login}/repos?per_page=100`),
                axios(`${followers_url}?per_page=100`),
                axios(`${rootUrl}/users/${login}/following?per_page=100`)
            ]).then((results) => {
                const [repos, followers, following] = results;
                const statusOk = "fulfilled";
                if (repos.status === statusOk &&
                    followers.status === statusOk &&
                    following.status === statusOk) {
                    setRepos(repos.value.data);
                    setFollowers(followers.value.data);
                    setFollowing(following.value.data);
                }
                else {
                    console.log("sorry there is a error here.");

                }
            })
        }
        else {
            setIsUserOk(false);
        }
        checkRequests();
        setIsLoading(false);
    }

    // check requests limit
    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`)
            .then((data) => {
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
        requests, searchUser, isLoading, isUserOk
    }

    return <GithubContext.Provider value={contextValue}>
        {children}
    </GithubContext.Provider>
}

export { GithubProvider, GithubContext };