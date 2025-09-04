package com.myapp.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.myapp.entity.User;
import com.myapp.exception.NameNotFoundException;
import com.myapp.exception.PasswordDeosNotMatchException;
import com.myapp.pojo.UserLoginReq;
import com.myapp.repo.UserRepo;
import com.myapp.repo.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepo userRepo;
	
	@Override
	public Integer createUser(User user) {
		 
		User save = userRepo.save(user);
		
		return save.getId();
	}
	
	
	@Override
	public String findUserByEmail(UserLoginReq userReq) {
		
		User user = userRepo.findByEmail(userReq.getEmail());
		if(user==null)
		{
			throw new NameNotFoundException(userReq.getEmail() + "Not Found");
		}
		if(user.getPassword().equals(userReq.getPassword()))
		{
			return user.getUserName();
		}
		throw new PasswordDeosNotMatchException(userReq.getPassword()+" Password 	Does not match");
	}
	
	@Override
	@GetMapping("/email/{email}")
	public Boolean findEmail(String email)
	{
		    User byEmail = userRepo.findByEmail(email);
		    return byEmail != null; // true if found, false if not
	}

}
