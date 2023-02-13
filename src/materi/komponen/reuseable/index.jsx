import React from "react";
import Bar from "./bar";
import Hello from "./hello";
import Product from "./product";

export default class Reuseable extends React.Component {
    render() {
        return(
            <div>
                <Hello>Hallo {this.name}</Hello>            
                <Bar/>
                <Product/>
            </div>
        )
    }
}