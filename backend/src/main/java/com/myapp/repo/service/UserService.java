package com.myapp.repo.service;

import com.myapp.entity.User;
import com.myapp.pojo.UserLoginReq;

public interface UserService {
	
	Integer createUser(User user);
	
	String findUserByEmail(UserLoginReq email);
	
	public Boolean findEmail(String email);

}
