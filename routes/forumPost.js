const express = require('express');
const verify = require('../middleware/verify');
const ForumPost = require('../modals/ForumPost');
const StudentUser = require('../modals/StudentUser');
const SubForum = require('../modals/SubForum');

module.exports = (app) => {

  app.post('/api/forum/:subForum', verify,async(req, res) =>{
    try{
      const subForumTopic = req.params.subForum;
      console.log(subForumTopic)
      let subForum = await SubForum.findOne();
      if(!subForum){
        subForum = new SubForum();
        await subForum.save();
      }

      subForum.subForumTopics.push(subForumTopic);
      
      await subForum.save();

      res.json(subForum)
    }catch (err) {
      res.status(500).send('Server Error');
      console.error(err.message);
    }
  })

  app.get('/api/forum/sub-forums', verify,async(req, res) =>{
    try{

      const subForum = await SubForum.findOne();

      res.json(subForum.subForumTopics)
    }catch (err) {
      res.status(500).send('Server Error');
      console.error(err.message);
    }
  })

  app.post(
    '/api/forum/post/:type',
    verify,
    async (req, res) => {
      try {
        const postType = req.params.type;

        const user = await StudentUser.findById(req.user.id).select('-password');

        const fields = {
          postType,
          title: req.body.title,
          detail: req.body.detail,
          name: user.name,
          user: req.user.id, 
        }
        console.log(fields)
        const newPost = new ForumPost(fields);
  
        const post = await newPost.save();
  
        res.json(post);

      } catch (err) {
        res.status(500).send('Server Error');
        console.error(err.message);
      }
    }
  );
  
  app.get('/api/forum/post', verify, async (req, res) => {
    try {
      posts = await ForumPost.find().sort({ date: -1 });
      res.json(posts);
    } catch (err) {
      // console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  app.get('/api/forum/post/:type', verify, async (req, res) => {

    try {
      const postType = req.params.type;
      
      let posts = await ForumPost.find({postType}).sort({ date: -1 });
      res.json(posts);
    } catch (err) {
      // console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  
  app.get('/api/forum/post/:type/:id', verify, async (req, res) => {
    try {
      console.log('id: ', req.params.id)
      const post = await ForumPost.findById(req.params.id);
      console.log('post: ', post);
      if (!post) return res.status(400).json({ msg: 'Post not found' });
      
      res.json(post);
    } catch (err) {
      console.error(err.message);
      if (err.kind == 'ObjectId') {
        return res.status(400).json({ msg: 'Post not found' });
      }
      res.status(500).send('Server Error');
    }
  });
  
  app.delete('/api/forum/post/:id', verify, async (req, res) => {
    try {
      const post = await ForumPost.findById(req.params.id);
  
      // Check for post
      if (!post) return res.status(400).json({ msg: 'Post not found' });
  
      // Check user
      if (post.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }
  
      await post.remove();
  
      res.json({ msg: 'Post removed' });
    } catch (err) {
      console.error(err.message);
  
      if (err.kind == 'ObjectId') {
        return res.status(400).json({ msg: 'Post not found' });
      }
      res.status(500).send('Server Error');
    }
  });

  app.post(
    '/api/forum/post/comment/:id',
    verify,
    async (req, res) => {
      try {
        console.log(req.body)
        const user = await StudentUser.findById(req.user.id).select('-password');
        const post = await ForumPost.findById(req.params.id);
  
        const newComment = {
          text: req.body.reply,
          name: user.name,
          user: req.user.id,
        };
  
        post.comments.push(newComment);
  
        await post.save();
  
        res.json(post.comments);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );
  
  app.delete('api/forum/post/comment/:id/:comment_id', verify, async (req, res) => {
    try {
      const post = await ForumPost.findById(req.params.id);
  
      // Pull out comment
      const comment = post.comments.find(
        (comment) => comment.id === req.params.comment_id
      );
      // Make sure comment exists
      if (!comment) {
        return res.status(404).json({ msg: 'Comment does not exist' });
      }
      // Check user
      if (comment.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }
  
      post.comments = post.comments.filter(
        ({ id }) => id !== req.params.comment_id
      );
  
      await post.save();
  
      return res.json(post.comments);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Server Error');
    }
  });

  // app.put('/like/:id', verify, async (req, res) => {
  //   try {
  //     const post = await Post.findById(req.params.id);
  
  //     // Check if the post has already been liked
  //     if (
  //       post.likes.filter((like) => like.user.toString() === req.user.id).length >
  //       0
  //     ) {
  //       return res.status(400).json({ msg: 'Post already liked' });
  //     }
  
  //     post.likes.unshift({ user: req.user.id });
  
  //     await post.save();
  
  //     res.json(post.likes);
  //   } catch (err) {
  //     console.error(err.message);
  //     res.status(500).send('Server Error');
  //   }
  // });
  
  // app.put('/unlike/:id', verify, async (req, res) => {
  //   try {
  //     const post = await Post.findById(req.params.id);
  
  //     // Check if the post has already been liked
  //     if (
  //       post.likes.filter((like) => like.user.toString() === req.user.id)
  //         .length === 0
  //     ) {
  //       return res.status(400).json({ msg: 'Post has not yet been liked' });
  //     }
  
  //     // Get remove index
  //     const removeIndex = post.likes
  //       .map((like) => like.user.toString())
  //       .indexOf(req.user.id);
  
  //     post.likes.splice(removeIndex, 1);
  
  //     await post.save();
  
  //     res.json(post.likes);
  //   } catch (err) {
  //     console.error(err.message);
  //     res.status(500).send('Server Error');
  //   }
  // });
}
