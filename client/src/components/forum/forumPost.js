import { Avatar, Badge, IconButton } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CommentIcon from '@material-ui/icons/Comment';
import './forumPost.css'

const ForumPost = ({item}) => {

  return (
     <div className="card">
      <div className="card-body">
        <div className='card_head'>
          <span className="tag tag-teal">{item.postType || 'ALL'}</span>
          <small style={{textAlign: 'end'}}>{item.date.toString()}</small>
        </div>
        <Link to={`/forum/${item.postType}/${item._id.toString()}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <div style={{marginTop: 10}}>
          <h4 style={{fontSize: 20}}>{item.title}</h4>
          <p style={{fontSize: 20}}>{item.detail}</p>
        </div>
        </Link>
        <div className="card-user">
          <div className="user-info">
            <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random/200x200?sig=1" />
            <h4>{item.name}</h4>
          </div>
          <Link to={`/forum/${item.postType}/${item._id.toString()}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <div className="user-info__comment">
              <Badge color="secondary" badgeContent={item.comments.length} showZero>
                <CommentIcon />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
 
export default ForumPost
