package com.myapp.exception;

public class VideoIdNotFoundException extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public VideoIdNotFoundException(String message)
	{
		super(message);
	}

}
