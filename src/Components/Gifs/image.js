import React,{Component} from 'react';

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            didLoad: false
        }
    }
    onLoad(){
        this.setState({
            didLoad: true
        })
    }
    render() {
        const style = this.state.didLoad ? {} : {visibility: 'hidden'}
        const style2 = this.state.didLoad ? {visibility: 'hidden'} : {}
        return (
            <div className="col-md-3 col-sm-6 col-6 gifContainer">
                <img style={style} className="gif" src={this.props.src.url} onLoad={this.onLoad.bind(this)} alt="Can't Load"/>
                <img style={style2} src={require('../../assets/images/loader.gif')} alt="..."/>
            </div>
        )
    }
}

export default Image;