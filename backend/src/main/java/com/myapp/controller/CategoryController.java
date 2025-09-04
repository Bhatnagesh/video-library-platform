package com.myapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.GetExchange;

import com.myapp.entity.Category;
import com.myapp.repo.service.CategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {
	
	
	@Autowired
	private CategoryService categoryService;
	
	@PostMapping("/create")
	public ResponseEntity<Integer> createCategoryy(@RequestBody Category category)
	{
		 Integer categoryId = categoryService.createCategory(category);
		 
		 return new ResponseEntity<>(categoryId,HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Category>> getAllCategory()
	{
		List<Category> allCategory = categoryService.getAllCategory();
		return new ResponseEntity<>(allCategory,HttpStatus.OK);
	}
	
	

}
