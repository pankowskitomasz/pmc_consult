import React,{Component} from "react";
import AboutShort from "../components/about-short";


class About extends Component{
    render(){
        return(          
            <main className="minh-100vh bg-about d-flex align-items-center">     
                <AboutShort/>
            </main>
        );
    }
}

export default About;