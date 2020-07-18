import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Followers from './Followers';

const User = () => {
    return (
        <section className="section">
            <UserWrapper className = "section-center">
                <Card />
                <Followers />
            </UserWrapper>
        </section>
    )
}

const UserWrapper = styled.div`
    padding-top:2rem;
    display:grid;
    grid-gap: 3rem 2rem;
    grid-template-columns: 1fr 1fr;
`

export default User;
