package com.myapp.repo.service;

import java.util.List;

import com.myapp.entity.Category;

public interface CategoryService {
	
	Integer createCategory(Category category);
	
	List<Category> getAllCategory();
}
