import React, { Component } from "react";
import { ReactComponent as Moon } from "./Moon.svg";
import { ReactComponent as Sun } from "./Sun.svg";
import "../DarkMode.css"


class DarkModeToggle extends Component {
    state = {};
    setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
    };
    setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
    };

    toggleTheme = (e) => {
        if (e.target.checked) {
            this.setDarkMode();
        } else {
            this.setLightMode();
        }
    };
    render() {
        return (
            <div className='dark_mode'>
                <input
                    className='dark_mode_input'
                    type='checkbox'
                    id='darkmode-toggle'
                    onChange={this.toggleTheme}
                    
                />
                <label className='dark_mode_label' for='darkmode-toggle'>
                    <Sun />
                    <Moon />
                </label>
            </div>
        )
    }
}
export default DarkModeToggle