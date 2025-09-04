package com.myapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myapp.entity.Video;
import com.myapp.pojo.VideoReq;
import com.myapp.pojo.VideoResponse;
import com.myapp.repo.service.VideoService;

@RestController
@RequestMapping("/video")
@CrossOrigin("*")
public class VideoController {
	
	
	
	@Autowired
	private VideoService videoService;
	
	@PostMapping("/upload")
	public ResponseEntity<Video> createVideo(
			@RequestBody VideoReq videoReq
			)
	{
		
		Video uploadVideo = videoService.uploadVideo(videoReq);
		return new ResponseEntity<>(uploadVideo,HttpStatus.CREATED);
	}
	
	@PutMapping("edit/{id}")
	public ResponseEntity<String> editVideo(@RequestBody VideoReq videoReq,@PathVariable Integer id )
	{
		Integer editVideo = videoService.editVideo(videoReq, id);
		return new ResponseEntity<>(editVideo+"  Edited",HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<VideoResponse>> getAllVideo()
	{
	
		List<VideoResponse> allVideo = videoService.getAllVideo();
		return new ResponseEntity<>(allVideo,HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<VideoResponse> getVideoById(@PathVariable Integer id)
	{
		 VideoResponse videoById = videoService.getVideoById(id);
		 return new ResponseEntity<>(videoById,HttpStatus.OK);
	}
	
	@GetMapping("/category/{categoryId}")
	public ResponseEntity<List<VideoResponse>> getVideoBasedOnCategory(@PathVariable Integer categoryId)
	{
		List<VideoResponse> findvideoByCategores = videoService.findvideoByCategores(categoryId);
		return new ResponseEntity<>(findvideoByCategores,HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteVideo(@PathVariable Integer id)
	{
		Integer deleteVideo = videoService.deleteVideo(id);
		return new ResponseEntity<>("Video Id "+deleteVideo+" Deleted",HttpStatus.OK);
	}
	
	

}
