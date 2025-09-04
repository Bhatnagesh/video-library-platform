package com.myapp.utils;

import java.util.List;
import java.util.stream.Collectors;

import com.myapp.entity.Comment;
import com.myapp.entity.Video;
import com.myapp.pojo.CommentRes;
import com.myapp.pojo.VideoResponse;

public class VideoMapper {
	
		
	public static VideoResponse toVideoResponse(Video video)
	{
		VideoResponse videoRepsonse=new VideoResponse();
		videoRepsonse.setId(video.getId());
		videoRepsonse.setTitle(video.getTitle());
		videoRepsonse.setUrl(video.getUrl());
		videoRepsonse.setDecription(video.getDecription());
		videoRepsonse.setLikes(video.getLikes());
		videoRepsonse.setViews(video.getViews());
		videoRepsonse.setDislike(video.getDislike());
		videoRepsonse.setCategoryName(video.getCategory().getCategoryName());
		
		List<CommentRes> collectedComment = video.getComments().stream().map(VideoMapper::toCommentResponse)
		.collect(Collectors.toList());
		 
		videoRepsonse.setComments(collectedComment);
		
		 return videoRepsonse;
	}
	
	public static CommentRes  toCommentResponse(Comment comment)
	{
		CommentRes commentRes=new CommentRes();
		commentRes.setId(comment.getId());
		commentRes.setText(comment.getText());
		commentRes.setUserName(comment.getUser().getUserName());
		return commentRes;
	}
	
}
