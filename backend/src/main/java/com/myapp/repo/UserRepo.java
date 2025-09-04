package com.myapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myapp.entity.User;

public interface UserRepo extends JpaRepository<User,Integer> {
	
	User findByEmail(String name);

}
