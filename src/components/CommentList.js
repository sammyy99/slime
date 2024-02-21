import React from "react";
import Comment from "./Comment";


    // In short in this recurssion concept we basically just change the props of child component 
    // (first - commentList had props as array of "parent comment data" 
    // then within commentlist component we again use that componentList component
    // and we give the nested data of current element as prop to this nested component(CommentList)
    // So what happens is map function changes its prop till props reaches last level of nested data


const CommentList = ({ commentData }) => {
  return commentData.map((comment, i) => (  
    
    <div key={i}>
      <Comment data={comment} />
      <div className="ml-5 border-l border-gray-500">
        <CommentList commentData={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
