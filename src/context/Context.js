import React, { Component } from 'react'
import {Links} from './Data'
import {Devskills} from './Data'
import {Physics} from './Data'
import {Soft} from './Data'
import {Projects} from './Data'

const MyData = React.createContext();
class DataProvider extends Component {

    state={
        OpenSidebar:false,
        CloseLink:false,
        Links:Links,
        ShowHeader:false,
        Devskills:Devskills,
        Physics:Physics,
        Soft:Soft,
        Projects:Projects,
        backMode:false,
        setClass:JSON.parse(localStorage.getItem("Mode"))
    }
    // section open sidenav
    handleOpenSideNav = ()=>{
       this.setState({
        OpenSidebar:!this.state.OpenSidebar,
       })

    }
    // ChangeBackground mode
    handleMode=()=>{
        this.setState({
            backMode:!this.state.backMode
        })
    }

    darkMode=()=>{
        if(JSON.parse(localStorage.getItem("Mode"))){
            this.setState({setClass:false},()=>{
                localStorage.setItem("Mode",JSON.stringify(false))
            });
        }
        else{
            this.setState({setClass:true},()=>{
                localStorage.setItem("Mode",JSON.stringify(true))
            });
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.ScrollEffect)
    }
    // scrollbar effect
    ScrollEffect=()=>{
        if(window.scrollY>50){
            this.setState({
                ShowHeader:true,
            })
        }
        else{
            this.setState({
                ShowHeader:false
            })    
        }
    }

    // section close sidenav
    handleCloseSideNav = ()=>{
        // console.log('close nav');
        if(this.state.OpenSidebar===true){
            this.setState({
                OpenSidebar:false,
            })
        }
    }

    render() {
        return (
            <MyData.Provider value={{
                ...this.state, 
                handleOpenSideNav:this.handleOpenSideNav,
                handleCloseSideNav:this.handleCloseSideNav,
                handleMode:this.handleMode,
                darkMode:this.darkMode,

            }}>
                {this.props.children}
            </MyData.Provider>
        )
    }
}
const DataConsumer = MyData.Consumer
export{DataProvider,MyData, DataConsumer}

