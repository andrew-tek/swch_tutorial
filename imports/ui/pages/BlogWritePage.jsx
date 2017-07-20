import React, {Component} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import {EditorState, convertToRaw} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';



export default class BlogWritePage extends Component {

  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
  }

  onEditorStateChange = (editorState) => {
  this.setState({
    editorState,
  });
}

  render() {

    const {editorState} = this.state;
let addBlog = () => {
  let content = convertToRaw(editorState.getCurrentContent());
  let title = this.refs.title.value;
        let addBlog = {
          content: content,
          title: title
        }
        Meteor.call("insertBlog", addBlog, function(error, result) {
          if (result === 'success') {
            console.warn("successful");
          }
          else {
            console.warn("error");
            return;
          }
        });
      }


    return (
    <div>
      <div className="container">
              <div className="form-group">
                <label htmlFor="usr">Title:</label>
                <input ref="title" type="text" className="form-control" id="usr" />
              </div>
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
              />
            </div>
            <button type = "submit" className = "btn btn-default" onClick = {addBlog} > Submit </button>
          </div>


    )
  }
}
