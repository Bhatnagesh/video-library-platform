package com.myapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myapp.entity.Admin;
import com.myapp.repo.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {
	
	@Autowired
	private AdminService adminService;

	@PostMapping("/login")
	public ResponseEntity<Integer> loginAdmin(@RequestBody Admin admin)
	{
		Integer loginAdminId = adminService.loginAdmin(admin);
		return new  ResponseEntity<>(loginAdminId,HttpStatus.OK);
	}
	
	@GetMapping("/data")
	public ResponseEntity<String> getData()
	{
		return new ResponseEntity<>("Welcome To Video Library Project",HttpStatus.OK);
	}
	
	
}
