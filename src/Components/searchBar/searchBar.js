import React,{Component} from 'react';

// CSS
import './searchBar.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

// KEY
import {Config} from '../../config';

// Store
import {Store} from '../../Models/Store';

class SearchBar extends Component{
    constructor(){
        super();
        this.state={'error':''};
    }
    submitQuery(event){
        event.preventDefault();
        var query = this.refs.search.value;
        this.refs.search.value='';
        if(!query){
            this.setState({...this.state,'error':'Please enter something'});
            setTimeout(()=>{
                this.setState({...this.state,'error':''});
            },1000);
            return; 
        };
        var url = 'https://api.giphy.com/v1/gifs/search?api_key='+Config.apiKey+'&q='+query+'&limit=100&lang=en' 
        fetch(url).then(response=>response.json()
        .then(data=>{
            Store.dispatch({
                'type':'search',
                'payLoad':data.data
            })
        })
        .catch(err=>console.log(err)))
        .catch(err=>console.log(err));

    }
    render(){
        return(
            <form 
            onSubmit={this.submitQuery.bind(this)}
            className="form"
            >
                <div 
                className="inputSection">
                    <input 
                    type="text" 
                    placeholder="Search gifs" 
                    ref="search"
                    className="input"
                    />
                    <i 
                    className="fa fa-search" 
                    aria-hidden="true"
                    onClick={this.submitQuery.bind(this)}>
                    </i>
                    <p 
                    className="error">
                        {this.state.error}
                    </p>
                </div>
            </form>
        )
    }
}

export default SearchBar;