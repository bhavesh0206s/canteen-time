import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchAllForumPost, fetchTopicWiseForumPost } from "../../redux/actions/forum";
import Loading from "../loading/Loading";
import ForumPost from "./forumPost";

const TopicDetails = ({ match }) => {

  const {forumTopicPosts, loading} = useSelector(state => ({
    forumTopicPosts: state.forum.specificPosts,
    loading : state.loading
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopicWiseForumPost(match.params.topics));
  }, [match.params.topics]);

  if(loading){
    return <Loading />
  }else{
    return (
      <Fragment>
        {forumTopicPosts.map((item) => (
          <ForumPost item={item}/>
        ))}
      </Fragment>
    );
  }
};

export default TopicDetails;
