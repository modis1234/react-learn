import logo from './logo.svg';
import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import React, { Component } from 'react';

// @desc State 사용자가 알 필요도 없고 알아서는 안되는 컴포넌트에 내부에 정보
class App extends Component {
  constructor(props) {
    // component의 render가 동작하기 전에 constructor가 먼저 동작해 컴포넌트를 초기화한다.
    super(props);
    this.state = {
      subject: { title: "WEB", sub: "World Wide Web!" },
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText...'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }

  }

  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        {/* TOC Component에 this.state.contents 데이터를 전달 */}
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}


export default App;
