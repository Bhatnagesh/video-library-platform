package com.myapp.repo.service;

import java.util.List;

import com.myapp.entity.Video;
import com.myapp.pojo.VideoReq;
import com.myapp.pojo.VideoResponse;

public interface VideoService {

	
	Video uploadVideo(VideoReq video);
	
	List<VideoResponse> getAllVideo();
	
	VideoResponse getVideoById(Integer id);
	
	List<VideoResponse> findvideoByCategores(Integer categoryId);
	
	Integer deleteVideo(Integer id);
	
	Integer editVideo(VideoReq video,Integer id);
	
	
	
}
