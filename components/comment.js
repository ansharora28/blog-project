import React from 'react';
import commentBox from 'commentbox.io';

class CommentBox extends React.Component {
  
    componentDidMount() {
      this.removeCommentBox = commentBox('5636187897200640-proj');
    }
  
    componentWillUnmount() {
      this.removeCommentBox();
    }
    
    render() {
      const styles = {
        backgroundColor: 'white',
        textColor: 'red',
        subtextColor: 'red',
      }
    
      return (
        <div className="commentbox" style={styles} />
      );
    }
    
  }
  export default CommentBox;