import React from "react";
import styled from "styled-components";
import Counter from "../counter";


const ImgProduct = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

const CardContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
`;

const Image = styled.img`
    width: 100%;
`;

const Heading = styled.h1`
    font-size: 18px;
`;

const Price = styled.p`
    color: grey;
    font-size: 22px;
`;

const Description = styled.p`
    font-size: small;
`;

export default class Product extends React.Component {
    state = {
        harga: 19.95
    }

    handleValue = (data) => {
        this.setState({harga: data * 19.95})
    }

    render() {
        return(
            <div>
                <CardContainer>
                    <Image src={ImgProduct}/>
                    <Heading>Title Card</Heading>
                    <Price>{"$"}{this.state.harga}</Price>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel.</Description>
                    <Counter receiveValue={this.handleValue}/>
                </CardContainer>
            </div>
        )
    }
}