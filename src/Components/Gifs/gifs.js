import React,{Component} from 'react';

// Components
import Gif from './gif';

// CSS
import './gif.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

//KEY
import {Config} from '../../config';

// Redux Linking
import {connect} from 'react-redux';

class Gifs extends Component{
    constructor(){
        super();
        this.state={'gifs':null,'error':''};
    }
    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/trending?api_key='+Config.apiKey+'&limit=100&rating=G').then(response=>response.json()
        .then(data=>{
            this.setState({...this.state,'gifs':data.data});
        })
        .catch(err=>{
            this.setState({...this.state,'error':'Please try again'})
        }))
        .catch(err=>{
            this.setState({...this.state,'error':'Please try again'})
        });

        // If even after 12 seconds, we are not able to fetch the data
        setTimeout(()=>{
            if(!this.state.gifs && !this.props.searched){
                this.setState({...this.state,'error':'Please try again'});
            }
        },12000);
    }
    render(){
        if(this.state.error){
            return(
                <p className="err">{this.state.error}</p>
            )
        }
        if(this.props.searched){
            if(this.props.searched.length==0){
                return(
                    <p className="err">Please try again</p>
                ) 
            }
        }
        if(!this.state.gifs && !this.props.searched){
            return(
                <div className="imgContainer">
                    <img src={require('../../assets/images/loader.gif')} alt="Loading..."/>
                </div>
            )
        }
        if(this.props.searched){
            return(
                <div className="row">
                    <Gif data={this.props.searched}></Gif>
                </div>
            )
        }
        return(
            <div className="row">
                <Gif data={this.state.gifs}></Gif>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    if(state.searchedData){
        var data = state.searchedData;
        return {searched:data};
    }
    return{}
}

export default connect(mapStateToProps)(Gifs);