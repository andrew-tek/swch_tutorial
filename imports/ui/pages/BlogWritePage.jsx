import React, {Component} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import {EditorState, convertToRaw} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {browserHistory} from 'react-router'
import {Link} from 'react-router';



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
            browserHistory.push("/blogs");
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
  <br/>
  <br/>
  <br/>

    <label htmlFor="usr">Title:</label>

    <input ref="title" type="text" className="form-control" style={{
      border: "thin solid black"
    }} id="usr"/>
  </div>
  <br/>
  <label htmlFor="usr">Body:</label>
  <div>
  <div
     style={{
    border: "thin solid black",
    }}
    >
    <Editor editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={this.onEditorStateChange}/>
    </div>
    <br/>
      <button type="submit" className="btn btn-default pull-right" onClick = {addBlog}>
        Submit
      </button>
  </div>
</div>
          </div>
        )
  }
}
