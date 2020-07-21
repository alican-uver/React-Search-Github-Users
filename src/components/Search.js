import React, { useState, useContext } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { GithubContext } from "../context/context";

const Search = () => {
  const [user, setUser] = useState("");
  const { requests } = useContext(GithubContext);
  const submit = (e) => {
    e.preventDefault();
    if (user) {
      // function will come from context
    }
  };

  return (
    <section className="section">
      <SearchWrapper className="section-center search">
        <form onSubmit={submit} className="search__form">
          <div className="search__control">
            <MdSearch className="search__icon" />
            <input
              className="search__input"
              type="text"
              placeholder="search github user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {requests > 0 && (
              <button className="search__button" type="submit" className="btn">
                Search
              </button>
            )}
          </div>
        </form>
        <div className="search__requests">
          <h3>
            <strong>Requests</strong>: {requests} / 60
          </h3>
        </div>
      </SearchWrapper>
    </section>
  );
};

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  position: relative;
  .search {
    &__form {
      background: #f1f1f1;
      padding: 10px;
      border-radius: 10px;
      flex: 1 1 auto;
      @media screen and (min-width: 576px) {
        margin-right: 2rem;
      }
    }
    &__control {
      width: 100;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 1rem;
    }
    &__input {
      border: 0;
      outline: 0;
      background: transparent;
      text-transform: uppercase;
      padding: 10px;
      &:focus {
        outline: 1px solid #fff;
      }
    }
    &__icon {
      font-size: 25px;
    }
    &__requests {
      color: gray;
      strong {
        padding-right: 0.3rem;
      }
    }
  }
`;

export default Search;
