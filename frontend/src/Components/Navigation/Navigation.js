import React, {Component} from "react";
import "./Navigation.css"
import addIcon from "../../assets/addIcon.svg"
class Navigation extends Component {
    constructor(props) {
        super(props)
        this.showSideButtons = this.props.isLoggedIn || false
    }
    render() {

        return (
            <nav className = "navbar navbar-expand-md navbar-light Navigation">
                <span className = "navbar-brand" > Student Sublets </span>
                {this.getSideButtons()}
             
            </nav>
        )
    }
    getSideButtons() {
        if(this.showSideButtons) {
                return (
                <ul className = "navbar-nav ml-auto">

                <li className = "nav-item">
                    
                    <span className = "nav-link link">
                    <img  src = {addIcon} alt = "add" className = "addImage img-fluid" />

                        New Listing
                    </span>
                </li>
                
            </ul>
           )
        }else{
            return null
        }
    }



}
export default Navigation;