import { Avatar, Badge, Button, Divider } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSpecificPost } from "../../redux/actions/forum";
import Loading from "../loading/Loading";
import Reply from "./reply";

const SelectedTopicDetails = () => {

  const {topics, id} = useParams()
  const dispatch = useDispatch();

  const [showReplyModal, setShowReplyModal] = useState(false);
  const {specificPost, loading, postComments} = useSelector(state => ({
    specificPost: state.forum.specificPost,
    postComments: state.forum.postComments,
    loading : state.loading
  }));

  const handleReplyClick = () => {
    setShowReplyModal(!showReplyModal);
  }

  useEffect(() => {
    dispatch(fetchSpecificPost(topics,id))
  }, [])

  if(loading){
    return <Loading/>
  }else{
    return (
      <div className="card">
        <div className="card-body">
          <div className='card_head' style={{marginBottom: 20}}>
            <span className="tag tag-teal">{specificPost.postType}</span>
            <small style={{textAlign: 'end'}}>{specificPost.date}</small>
            </div>
            <div style={{display:'flex'}}>
              <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              <h4 style={{paddingLeft: 10, color:'grey'}}>{specificPost.name}</h4>
            </div>
            <div style={{marginTop: 10}}>
              <h4 style={{fontSize: 20}}>{specificPost.title}</h4>
              <p style={{fontSize: 20}}>{specificPost.detail}</p>
            </div>
          {postComments.map(comment => (
            <Fragment>
            <Divider />
              <div className='card_head' style={{marginTop: 20,marginBottom: 20}}>
                <span className="tag tag-teal" style={{backgroundColor: 'grey'}}>replied by</span>
                <small style={{textAlign: 'end'}}>{comment.date}</small>
                </div>
                <div style={{display:'flex'}}>
                  <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <h4 style={{paddingLeft: 10, color:'grey'}}>{comment.name}</h4>
                </div>
                <div style={{marginTop: 10}}>
                  <p style={{fontSize: 20}}>{comment.text}</p>
                </div>
                <div>
              </div>
            </Fragment>
          ))}
        </div>
        <Divider />
        <Button variant="contained" color="primary" onClick={handleReplyClick}>
          Reply
        </Button>
        {showReplyModal && (
          <Reply id={id} type={topics} showReplyModal={showReplyModal} handleReplyClick={handleReplyClick}/>
        )}
      </div>
    );
  }
};

export default SelectedTopicDetails;
// Isme file mai hum comment wala integrate kar sakte
