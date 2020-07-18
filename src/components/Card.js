import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

const Card = () => {
  const { githubUser } = useContext(GithubContext);
  const {
    avatar_url,
    bio,
    blog,
    name,
    company,
    location,
    html_url,
  } = githubUser;
  return (
    <CardWrapper className="card">
      <div className="card__header">
        <img className="card__img" src={avatar_url} alt="avatar-img" />
        <div>
          <h4 className="card__name">{name}</h4>
          <p className="card__company">{company || "Company Name"}</p>
        </div>
        <a className="btn" href={html_url}>
          Follow
        </a>
      </div>
      <div className="card__body">
        <div>
          <MdBusiness className="icon" />
          <span className="card__bio">{bio}</span>
        </div>
        <div>
          <MdLocationOn className="icon" />
          <span className="card__location">{location || "earth"}</span>
        </div>
        <div>
          <MdLink className="icon" />
          <a href={blog} className="card__link">
            {blog}
          </a>
        </div>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  background: #f1f1f1;
  padding: 1.5rem;
  .card {
    /* card header */
    &__header {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      column-gap: 1rem;
      margin-bottom: 1rem;
    }
    &__img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    &__name {
      margin-bottom: 0;
    }
    &__company {
      font-style: italic;
    }
    /* card body */
    &__body {
      div {
        display: flex;
        align-items: center;
        margin-bottom: 0.3rem;
      }
      .icon {
        font-size: 1.5rem;
        margin-right: 0.5rem;
        color: #449872;
      }
    }
  }
`;

export default Card;
