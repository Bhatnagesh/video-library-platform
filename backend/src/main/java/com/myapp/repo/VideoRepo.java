package com.myapp.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myapp.entity.Video;

public interface VideoRepo extends JpaRepository<Video,Integer> {
	
	  List<Video> findByCategoryId(Integer categoryId); 

}
