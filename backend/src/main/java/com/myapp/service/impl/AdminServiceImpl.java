package com.myapp.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myapp.entity.Admin;
import com.myapp.exception.NameNotFoundException;
import com.myapp.exception.PasswordDeosNotMatchException;
import com.myapp.repo.AdminRepo;
import com.myapp.repo.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {
	
	
	@Autowired
	private AdminRepo adminRepo;
	
	@Override
	public Integer loginAdmin(Admin admin) {
		
	     Admin byAdminUserName = adminRepo.findByUserName(admin.getUserName());
	     if(byAdminUserName==null)
	     {
	    	 throw new NameNotFoundException(" User name not exists");
	     }
	     if(!byAdminUserName.getPassword().equals(admin.getPassword()))
	     {
	    	 throw new PasswordDeosNotMatchException("Password does not match");
	     }
		
		return byAdminUserName.getId();
	}

}
