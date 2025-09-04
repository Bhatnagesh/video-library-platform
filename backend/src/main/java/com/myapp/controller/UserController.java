package com.myapp.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.myapp.entity.User;
import com.myapp.pojo.UserLoginReq;
import com.myapp.repo.service.UserService;

@Controller
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<Integer> resgisterUser(@RequestBody User user)
	{
		  Integer userId = userService.createUser(user);
		  return new ResponseEntity<>(userId,HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public ResponseEntity<String> loginUser(@RequestBody UserLoginReq loginReq)
	{
		String userByEmail = userService.findUserByEmail(loginReq);
		return new ResponseEntity<String>(userByEmail,HttpStatus.OK);
	}
	
	@GetMapping("/email/{email}")
	public ResponseEntity<Map<String, Boolean>> checkEmail(@PathVariable String email) {
	    boolean exists = userService.findEmail(email);
	    Map<String, Boolean> response = new HashMap<>();
	    response.put("exists", exists);
	    return ResponseEntity.ok(response);
	}


}
