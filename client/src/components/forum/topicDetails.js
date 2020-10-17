import React, { Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ForumPost from "./forumPost";

const TopicDetails = ({ match }) => {
  const allQandA = [
    {
      id: "abc123",
      topic: match.params.topics,
      que: `why ${match.params.topics} seems so hard?`,
      repliescount: 3,
      upvotes: 10,
    },
    {
      id: "abc124",
      topic: match.params.topics,
      que: `who made ${match.params.topics} so hard?`,
      repliescount: 3,
      upvotes: 10,
    },
    {
      id: "abc125",
      topic: match.params.topics,
      que: `why should one learn ${match.params.topics}?`,
      repliescount: 3,
      upvotes: 10,
    },
  ]

  return (
    <Fragment>
      {allQandA.map((item) => (
        <ForumPost item={item}/>
      ))}
    </Fragment>
  );
};

export default TopicDetails;
