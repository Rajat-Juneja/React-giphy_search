import React,{Component} from 'react';

// Components
import SearchBar from '../searchBar/searchBar';
import Gifs from '../Gifs/gifs';

// CSS
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Main extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="container">
                <SearchBar></SearchBar>
                <Gifs></Gifs>
            </div>
        )
    }
}

export default Main;