import { Component } from "react"

class Pagination extends Component{

  constructor(props){
    super(props);

    this.aVoid = '#';
  }

  clickedPage(e){
    e.preventDefault();
    if(e.target.parentNode.classList.contains('disabled')) return;
    const page = e.target.getAttribute('data-page');
    if(page === 'next' && !e.target.parentNode.classList.contains('disabled')){
      this.props.setPage(this.props.page+1)
    }else if(page === 'prev' && !e.target.parentNode.classList.contains('disabled')){
      this.props.setPage(this.props.page-1)
    }else{
      this.props.setPage(page)
    }
  }

  renderPage(){
    const pagingNum = Math.ceil(this.props.totalPost/this.props.displayPost)
    const currentSection = Math.floor((this.props.page-1)/this.props.displayPaging);
    const start = 1 + currentSection*this.props.displayPaging;
    const len = Math.min(start+this.props.displayPaging-1, pagingNum);

    const arr = [];

    arr.push(<li className={
      this.props.page === 1? 'disabled' : ''
    }><a href={this.aVoid} onClick={this.clickedPage.bind(this)} data-page="prev">prev</a></li>
    )
    for(let i=start; i<=len; i++){
      const page = i;
      arr.push(
        <li className={
          page === this.props.page ? 'active' : ''
        }><a href={this.aVoid} onClick={this.clickedPage.bind(this)} data-page={page}>{page}</a></li>
      )
    }

    arr.push(<li className={
      this.props.page === pagingNum? 'disabled' : ''
    }><a href={this.aVoid} onClick={this.clickedPage.bind(this)} data-page="next">next</a></li>
    )
    return arr;
  }

  render(){
    return (
      <ul className="pagination">        
        {          
          this.renderPage()
        }
      </ul>
    )
  }
}

export default Pagination