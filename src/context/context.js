import React, { useState, useEffect, createContext } from 'react';
import myInfo from './staticData/myInfo';
import myRepos from './staticData/myRepos';
import myFollowers from './staticData/myFollowers';

const rootUrl = "https://api.github.com";

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(myInfo);
    const [repos, setRepos] = useState(myRepos);
    const [followers, setFollowers] = useState(myFollowers);

    const contextValue = {
        githubUser, repos, followers
    }

    return <GithubContext.Provider value = {contextValue}>
        {children}
    </GithubContext.Provider>
}

export {GithubProvider, GithubContext};