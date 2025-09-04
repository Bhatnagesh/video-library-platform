package com.myapp.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myapp.entity.Comment;
import com.myapp.entity.User;
import com.myapp.entity.Video;
import com.myapp.exception.VideoIdNotFoundException;
import com.myapp.pojo.CommentReq;
import com.myapp.repo.CommentRepo;
import com.myapp.repo.UserRepo;
import com.myapp.repo.VideoRepo;
import com.myapp.repo.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	private CommentRepo commentRepo;

	@Autowired
	private VideoRepo videoRepo;

	@Autowired
	private UserRepo userRepo;

	private Video video;

	private User user;

	@Override
	public Integer uploadComment(CommentReq commentReq) {
	    User user = userRepo.findById(commentReq.getUserId())
	                        .orElseThrow(() -> new RuntimeException("User not found"));

	    Video video = videoRepo.findById(commentReq.getVideoId())
	                           .orElseThrow(() -> new VideoIdNotFoundException("Video Id not Exits"));

	    Comment comment = new Comment();
	    comment.setText(commentReq.getCommentMessage());
	    comment.setUser(user);
	    comment.setVideo(video);

	    return commentRepo.save(comment).getId();
	}


}
