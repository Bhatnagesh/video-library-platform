package com.myapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myapp.entity.Category;
import com.myapp.repo.CategoryRepo;
import com.myapp.repo.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService{
	
	
	@Autowired
	private CategoryRepo categoryRepo;
	
	@Override
	public Integer createCategory(Category category) {
	
		Category save = categoryRepo.save(category);
		
		return save.getId();
	}
	
	@Override
	public List<Category> getAllCategory() {
		List<Category> all = categoryRepo.findAll();
		return all;
	}

}
