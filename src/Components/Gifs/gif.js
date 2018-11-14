import React,{Component} from 'react';

// Component
import Image from './image';

class Gif extends Component{
    constructor(){
        super();
        this.state={'maxLimit':19};
    }
    componentDidMount(){
        window.addEventListener('scroll',()=>{
            if(window.pageYOffset+window.innerHeight>=document.body.offsetHeight){
                // maxLimit+=50;
                var limit = this.state.maxLimit;
                limit+=20
                this.setState({...this.state,'maxLimit':limit});
            }
        })
    }
    render(){
        return(
            <div className="col-12 col-sm-12 row">
                {this.props.data.map((element,index)=>{
                    if(index>this.state.maxLimit){
                        return;
                    }
                    return(
                        <Image key={element.id} src={element.images.downsized}></Image>
                    )
                })}
            </div>
        )
    }
}

export default Gif;