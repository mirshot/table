
import { Component } from 'react';
import './App.css';
import Table from './components/Table'
import SearchInput from './components/SearchInput';
import Pagination from './components/Pagination';

class App extends Component{
  
  instance = this;
  constructor(props){
    super(props)

    this.headers = [
      {
        key:'API',
        name:'API'
      },
      {
        key:'Description',
        name:'설명'
      },
      {
        key:'Auth',
        name:'Auth'
      },
      {
        key:'HTTPS',
        name:'HTTPS'
      },
      {
        key:'Cors',
        name:'Cors'
      },
      {
        key:'Link',
        name:'링크'
      },
      {
        key:'Category',
        name:'카테고리'
      }
    ]

    this.state = {
      tableData:[],
      totalPost:0,
      page:1
    }
  }

  componentDidMount(){
    this.loadData('ani')
  }

  clickedSearch(val){
    this.loadData(val)
  }

  loadData(category){
    fetch('https://api.publicapis.org/entries?category='+category).then((req)=>{
      return req.json();
    }).then((data)=>{
      console.log(data);

      this.setState({tableData:data.entries || [], totalPost:data.count, page:1});
    })
  }

  setPage(page){
    console.log(page)
    this.setState({page:page})
  }

  render(){
    return (
      <div className="App">
        <Table headers={this.headers} data={this.state.tableData} />
        <SearchInput clickedSearch={this.clickedSearch.bind(this)} />
        <Pagination 
          totalPost={this.state.totalPost}
          displayPost={10}
          displayPaging={10}
          setPage={this.setPage.bind(this)}
          page={this.state.page}
        />
      </div>
    );
  }
}

export default App;
