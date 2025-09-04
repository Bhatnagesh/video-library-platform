package com.myapp.pojo;

import java.util.List;

import lombok.Data;

@Data
public class VideoResponse {

	private Integer id;
	private String title;
	private String url;
	private String decription;
	private Integer likes;
	private Integer views;
	private Integer dislike;
	private List<CommentRes> comments;
	private String categoryName;

}
