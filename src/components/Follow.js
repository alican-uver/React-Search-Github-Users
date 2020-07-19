import React, { useContext, useState } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";

const Follow = () => {
  const { followers, following } = useContext(GithubContext);
  const [isFollowers, setIsFollowers] = useState(true);

  return (
    <FollowWrapper>
      <>
        <div className="buttons">
          <a
            href="#followers"
            className="btn"
            onClick={() => setIsFollowers(true)}
          >
            followers
          </a>
          <a
            href="#following"
            className="btn"
            onClick={() => setIsFollowers(false)}
          >
            following
          </a>
        </div>
        {isFollowers
          ? followers.map((follow) => {
              const { avatar_url: img, html_url, login, id } = follow;
              return (
                <div className="follow" key={id}>
                  <img className="follow__img" src={img} alt="login" />
                  <div>
                    <h4 className="follow__name">{login}</h4>
                    <a className="follow__url" href={html_url}>
                      {html_url}
                    </a>
                  </div>
                </div>
              );
            })
          : following.map((follow) => {
              const { avatar_url: img, html_url, login, id } = follow;
              return (
                <div className="follow" key={id}>
                  <img className="follow__img" src={img} alt="login" />
                  <div>
                    <h4 className="follow__name">{login}</h4>
                    <a className="follow__url" href={html_url}>
                      {html_url}
                    </a>
                  </div>
                </div>
              );
            })}
      </>
    </FollowWrapper>
  );
};

const FollowWrapper = styled.div`
  overflow: scroll;
  height: 260px;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(45px, 1fr));
  grid-gap: 1.25rem 1rem;
  padding: 0 2rem;
  background: #f1f1f1;
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.4rem;
    a {
      margin: 5px;
      text-transform: capitalize;
    }
  }
  .follow {
    padding: 0.15rem 0.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    &__img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 1rem;
    }
    &__name {
      margin: 0;
    }
    &__url {
      font-weight: 300;
    }
  }
`;

export default Follow;
