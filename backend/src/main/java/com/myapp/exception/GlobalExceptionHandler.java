package com.myapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.myapp.pojo.ErrorRes;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	
	@ExceptionHandler(VideoIdNotFoundException.class)
	public ResponseEntity<ErrorRes> videoIdNotFound(VideoIdNotFoundException message)
	{
		ErrorRes errorRes=new ErrorRes();
		errorRes.setMessage(message.getMessage());
		errorRes.setStatus("400");
		return new ResponseEntity<>(errorRes,HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(NameNotFoundException.class)
	public ResponseEntity<ErrorRes> nameNotFound(NameNotFoundException message)
	{
		ErrorRes errorRes=new ErrorRes();
		errorRes.setMessage(message.getMessage());
		errorRes.setStatus("500");
		return new ResponseEntity<>(errorRes,HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(PasswordDeosNotMatchException.class)
	public ResponseEntity<ErrorRes> passwordDeosNotMacth(PasswordDeosNotMatchException message)
	{
		ErrorRes errorRes=new ErrorRes();
		errorRes.setMessage(message.getMessage());
		errorRes.setStatus("500");
		return new ResponseEntity<>(errorRes,HttpStatus.BAD_REQUEST);
	}

}
