import React, { FunctionComponent } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./header";
import Footer from "./footer";
// import "./layout.css";

export interface ILayoutProps {
    children: React.ReactNode;
}

const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Reset />
            <Content>
                <main>{children}</main>
                <Footer />
            </Content>
        </>
    );
};

export default Layout;

const Content = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: 0;
`;

const Reset = createGlobalStyle`
    html {
        box-sizing: border-box;
        height: 100%;
    }
    *,
    *:after,
    *:before {
        box-sizing: inherit;
    }
    body {
        margin: 0;
        padding: 0;
        font-size: 18px;
        font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;
    }
    a,
    a:hover,
    a:visited {
        text-decoration: none;
    }
    blockquote {
        padding: 1rem;
        background-color: #f8f8f8;
        font-size: 80%;
    }
    pre code {
        background-color: transparent;
    }
    hr {
        border: none;
        border-bottom: 1px solid #eaeaea;
        margin-block-start: 2em;
        margin-block-end: 2em;
    }
`;
