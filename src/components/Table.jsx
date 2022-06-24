import React, {Component} from 'react';

class Table extends Component{

  render(){
    return(
      <table>
        <thead>
          <tr>
            {
              this.props.headers.map((item)=>
                (<th key={item.key}>{item.name}</th>)
              )
            }
          </tr>
        </thead>
        <tbody>
          {
            this.props.data.length ?
            this.props.data.map((item, i)=>
              (
                <tr key={i}>
                  {this.props.headers.map((header, j)=>
                    (
                      <td key={header.key}>{item[header.key]}</td>
                    )
                  )}
                </tr>
              )
            ) :<tr><td colSpan={this.props.headers.length}>조회된 데이터가 없습니다.</td></tr>
          } 
        </tbody>
      </table>
    )
  }
}

export default Table