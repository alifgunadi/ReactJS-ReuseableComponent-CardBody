import React from "react";
import styled from "styled-components";

const Nav = styled.div`
    width: 300px;
    background-color: #4C4C4C;
    overflow: auto;
    margin: 0 auto;
`;

const Link = styled.a`
    float: right;
    padding: 12px;
    color: white;
    text-decoration: none;
    font-size: 24px;
`;

export default class Bar extends React.Component {


    render() {
        return(
            <Nav>
                <Link href="#">{this.handleValue}</Link>
            </Nav>
        )
    }
}

