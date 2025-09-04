package com.myapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myapp.pojo.CommentReq;
import com.myapp.repo.service.CommentService;

@RestController
@RequestMapping("/comment")
class CommentController {
	
	
	@Autowired
	private CommentService commentService;

	@PostMapping("/video")
	public ResponseEntity<String> addComment(@RequestBody CommentReq commentReq) 
	{
	    Integer uploadComment = commentService.uploadComment(commentReq);
       return new ResponseEntity<>(commentReq.getCommentMessage(),HttpStatus.OK);
	}

}
