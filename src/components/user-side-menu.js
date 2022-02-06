import React,{Component} from "react";
import Card from "../../node_modules/react-bootstrap/Card";
import ListGroup from "../../node_modules/react-bootstrap/ListGroup";

class UserSideMenu extends Component{
    render(){
        return(        
            <Card className="w-100 border-0">
                <ListGroup className="bg-white">
                    <ListGroup.Item action 
                        data-val="dashboard"
                        className="border-violet bg-transparent text-violet"
                        onClick={this.props.navigate.bind(this)}>
                        Dashboard
                    </ListGroup.Item>
                    <ListGroup.Item action
                        data-val="messages"
                        className="border-violet bg-transparent text-violet"
                        onClick={this.props.navigate.bind(this)}>
                        Messages
                    </ListGroup.Item>
                    <ListGroup.Item action
                        data-val="logout"
                        className="border-violet bg-transparent text-violet"
                        onClick={this.props.navigate.bind(this)}>
                        Logout
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        );
    }
}

export default UserSideMenu;