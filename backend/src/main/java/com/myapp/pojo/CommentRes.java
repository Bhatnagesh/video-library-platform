package com.myapp.pojo;

import lombok.Data;

@Data
public class CommentRes {

	    private Integer id;
	    private String text;
	    private String userName; // only username
}
