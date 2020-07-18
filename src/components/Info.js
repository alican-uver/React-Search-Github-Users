import React, { useContext } from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { GoRepo, GoGist } from "react-icons/go";

const Info = () => {
  const { githubUser } = useContext(GithubContext);
  const { public_repos, followers, following, public_gists } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: "gists",
      value: public_gists,
      color: "yellow",
    },
  ];

  return (
    <section className="section">
      <InfoWrapper className="section-center">
        {items.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </InfoWrapper>
    </section>
  );
};

// items for each column
const Item = ({ icon, label, value, color }) => {
  return (
    <article className="item">
      <span className={color}>{icon}</span>
      <div className="item__info">
        <h3 className="item__value">{value}</h3>
        <p className="item__label">{label}</p>
      </div>
    </article>
  );
};

// styles
const InfoWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem 2rem;
  .item {
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #f1f1f1;
    
    &__value {
    margin-bottom: 0;
      }

    &__label {
    margin-top: 10px;
    text-transform: capitalize;
      }
    span {
    width: 3.2rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    }
  .icon {
    font-size: 1.5rem;
    }
  }
  /* colors */
  .pink {
    background: pink;
  }
  .green {
    background: green;
  }
  .purple {
    background: purple;
  }
  .yellow {
    background: rgb(236, 236, 69);
  }
`;

export default Info;
