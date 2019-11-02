import React from "react";
import styled from "styled-components";

const Footer = () => (
    <StyledFooter>
        <StyledAnchor
            href="https://github.com/andrewnoyes"
            target="_blank"
            rel="noopener noreferrer"
        >
            andrewnoyes
        </StyledAnchor>
    </StyledFooter>
);

export default Footer;

const StyledAnchor = styled.a`
    text-decoration: none;
    transition: color 200ms;
    color: #1890ff;
    &:hover {
        text-decoration: underline;
        color: #1581e6;
    }
`;

const StyledFooter = styled.footer`
    text-align: center;
    font-size: 12px;
`;
