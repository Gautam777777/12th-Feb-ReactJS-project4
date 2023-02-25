//1.Import Area
import { Component } from "react";


//2.Class Defination
class BComp2 extends Component{
    //1. Properties/Variables
    name = "MINAKSHI";

    //2.Constructor

    //3.Methods
    //Every class component must have render method
    render(){
        let m = "MINAKSHI";
        //Every function/method return something
        return <span>Hii {this.name}..., How Are You?</span>
    }
}

//3.Export Area
export default BComp2;