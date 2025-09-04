package com.myapp.pojo;

import lombok.Data;

@Data
public class CommentReq {
	
	
	private Integer videoId;
	
	private Integer userId;
	
	private String commentMessage;

}
