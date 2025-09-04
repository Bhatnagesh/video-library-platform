package com.myapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myapp.entity.Admin;

public interface AdminRepo extends JpaRepository<Admin,Integer> {
	
	
	Admin findByUserName(String userName);

}
