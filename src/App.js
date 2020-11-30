import logo from './logo.svg';
import './App.css';
import TOC from'./components/TOC';
import Content from'./components/Content';
import Subject from'./components/Subject';
import React, { Component } from 'react';

// function App() {
//   return (
//     <div className="App">
//       Hello, React!!
//     </div>
//   );
// }


// class Subject extends Component {
//   render() {
//     return (
//       <header>
//         <h1>{this.props.title}</h1>
//         {this.props.sub}
//       </header>
//     );
//   }
// }

// @desc State 사용자가 알 필요도 없고 알아서는 안되는 컴포넌트에 내부에 정보
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}


export default App;
