import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PostsActions from '../store/posts/actions';
import './PostsScreen.css';

class PostsScreen extends Component {

  componentDidMount() {
    this.props.dispatch(PostsActions.fetchPosts());
  }

  render() {
    return (
      <h2>Done</h2>
    );
  }

}


function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(PostsScreen);
