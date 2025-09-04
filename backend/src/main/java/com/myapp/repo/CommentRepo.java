package com.myapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.myapp.entity.Comment;

public interface CommentRepo extends  JpaRepository<Comment,Integer> {
	
	@Modifying
	@Query("DELETE FROM Comment c WHERE c.video.id = :videoId")
	void deleteByVideoId(Integer videoId);

	
}
