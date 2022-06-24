import { Component } from "react";

class SearchInput extends Component{
  constructor(props){
    super(props)

    this.state = {
      value:''
    }
  }

  onChange(e){
    this.setState({value:e.target.value})
  }

  render(){
    return (
      <div className="search-input-wrap">
        <input value={this.state.value} onChange={this.onChange.bind(this)}></input>
        <button onClick={()=>{
          this.props.clickedSearch(this.state.value)
        }}>SEARCH</button>
      </div>
    )
  }
}

export default SearchInput