import logo from './logo.svg';
import './App.css';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Subject from './components/Subject';
import Control from './components/Control';
import React, { Component } from 'react';

// @desc State 사용자가 알 필요도 없고 알아서는 안되는 컴포넌트에 내부에 정보
class App extends Component {
  constructor(props) {
    // component의 render가 동작하기 전에 constructor가 먼저 동작해 컴포넌트를 초기화한다.
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'create',
      selected_content_id: 2,
      subject: { title: "WEB", sub: "World Wide Web!" },
      welcome: { title: 'welcome', desc: 'Hello, React!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is HyperText...' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' }
      ]
    }

  }
  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i = i + 1;
    }
  }
  getContent() {
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>

    }
    else if (this.state.mode === 'read') {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    }
    else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        // add content to  tihs.state.contents
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push({ id: this.max_content_id, title: _title, desc: _desc });
        // var _contents = this.state.contents.concat(
        //   { id: this.max_content_id, title: _title, desc: _desc }
        // );
        var newContents = Array.from(this.state.contents);
        newContents.push(
          { id: this.max_content_id, title: _title, desc: _desc }
        );
        this.setState({
          contents: newContents
        });
        console.log(_title, _desc)
      }.bind(this)}></CreateContent>

    }
    else if (this.state.mode === 'update') {
       _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function (_title, _desc) {
        // add content to  tihs.state.contents
        this.max_content_id = this.max_content_id + 1;

        var newContents = Array.from(this.state.contents);
        newContents.push(
          { id: this.max_content_id, title: _title, desc: _desc }
        );
        this.setState({
          contents: newContents
        });
        console.log(_title, _desc)
      }.bind(this)}></UpdateContent>
    }
    else if (this.state.mode === 'delete') {

    }

    return _article
  }

  render() {
    console.log('App render')
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        >
        </Subject>
        {/* TOC Component에 this.state.contents 데이터를 전달 */}
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            })
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Control
          onChangeMode={function (_mode) {
            this.setState({
              mode: _mode
            })
          }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}


export default App;
