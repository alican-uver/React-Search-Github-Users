import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Follow from './Follow';

const User = () => {
    return (
        <section className="section">
            <UserWrapper className = "section-center">
                <Card />
                <Follow />
            </UserWrapper>
        </section>
    )
}

const UserWrapper = styled.div`
    padding-top:2rem;
    display:grid;
    grid-gap: 3rem 2rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`

export default User;
