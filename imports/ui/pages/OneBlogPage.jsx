import React, {Component} from 'react';
import {Link} from 'react-router';
import {convertFromRaw, EditorState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

export default class OneBlogPage extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {editorState: EditorState.createEmpty()};
  // }
  render() {
    if (this.props.loading) {
      return <h1> loading... </h1>
    } else {
      let blog = this.props.blog;
      let content = convertFromRaw(blog.content);
      let editorState = EditorState.createWithContent(content);
      return (
        <div>
          <div className="container">
            <h1 className= "text-center"> {blog.title}</h1>
            <Editor editorState={editorState} toolbarHidden readOnly/>
          </div>
        </div>
      )
    }
  }
}
