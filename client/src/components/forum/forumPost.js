import { Avatar, Badge } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import CommentIcon from '@material-ui/icons/Comment';
import './forumPost.css'

const ForumPost = ({item}) => {

  return (
     <div className="card">
      <div className="card-body">
        <div className='card_head'>
          <span className="tag tag-teal">{item.topic}</span>
          <small style={{textAlign: 'end'}}>13-11-2020</small>
        </div>
        <Link to={`/forum/${item.topic}/${item.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <div style={{marginTop: 10}}>
          <h4 style={{fontSize: 20}}>Why is the Tesla Cybertruck designed the way it is?</h4>
          <p style={{fontSize: 20}}>Numquam nemo magni temporibus quo reiciendis minima nostrum voluptas deserunt obcaecati exercitationem?</p>
        </div>
        </Link>
        <div className="card-user">
          <div className="user-info">
            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            <h4>John Due</h4>
          </div>
          <Link to={`/forum/${item.topic}/${item.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <div className="user-info__comment">
              <Badge color="secondary" badgeContent={0} showZero>
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
