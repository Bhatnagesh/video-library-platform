package com.myapp.exception;

public class NameNotFoundException extends RuntimeException {
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public NameNotFoundException(String message) {
		super(message);
	}

}
