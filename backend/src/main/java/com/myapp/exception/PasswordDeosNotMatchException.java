package com.myapp.exception;

public class PasswordDeosNotMatchException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public PasswordDeosNotMatchException(String message)
	{
		super(message);
	}
	
}
