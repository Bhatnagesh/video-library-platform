package com.myapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myapp.entity.Category;

public interface CategoryRepo extends JpaRepository<Category,Integer> {
	
	
	Category findByCategoryName(String categoryName);

}
