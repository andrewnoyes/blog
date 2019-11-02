import { Link } from "gatsby";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface IHeaderProps {
    siteTitle: string;
}

const Header: FunctionComponent<IHeaderProps> = props => (
    <StyledHeader>
        <Container>
            <Title>
                <StyledLink to="/">{props.siteTitle}</StyledLink>
            </Title>
        </Container>
    </StyledHeader>
);

export default Header;

const StyledHeader = styled.header`
    background-color: #333;
    margin-bottom: 1.45rem;
`;

const Container = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
`;

const Title = styled.h1`
    margin: 0;
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`;
