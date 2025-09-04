package com.myapp.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myapp.entity.Category;
import com.myapp.entity.Video;
import com.myapp.exception.VideoIdNotFoundException;
import com.myapp.pojo.CommentRes;
import com.myapp.pojo.VideoReq;
import com.myapp.pojo.VideoResponse;
import com.myapp.repo.CategoryRepo;
import com.myapp.repo.CommentRepo;
import com.myapp.repo.VideoRepo;
import com.myapp.repo.service.VideoService;
import com.myapp.utils.VideoMapper;

import jakarta.transaction.Transactional;

@Service
public class VideoServiceImpl implements VideoService {

	@Autowired
	private VideoRepo videoRepo;
	
	
	@Autowired
	private CategoryRepo categoryRepo;
	
	@Autowired
	private CommentRepo commentRepo;
	
	@Transactional
	public void deleteVideofromComment(Integer videoId) {
	    commentRepo.deleteByVideoId(videoId); // custom query
	  
	}

	

	@Override
	public Video uploadVideo(VideoReq videoReq) {
		
		Video video=new Video();
		video.setTitle(videoReq.getTitle());
		video.setUrl(videoReq.getUrl());
		video.setDecription(videoReq.getDecription());
		
		Category byCategoryName = categoryRepo.findByCategoryName(videoReq.getCategory());
		
		video.setCategory(byCategoryName);
		
		Video save = videoRepo.save(video);

		return save;
	}
	@Override
	public List<VideoResponse> getAllVideo() {
		
        List<Video> videos = videoRepo.findAll();

        List<VideoResponse> collect = videos.stream().map(VideoMapper::toVideoResponse).collect(Collectors.toList());
        
        return collect;
        
	    
       
//       return  	videos.stream().map(video->{
//        		VideoResponse videoResponse=new VideoResponse();
//        		videoResponse.setId(video.getId());
//        		videoResponse.setTitle(video.getTitle());
//        		videoResponse.setUrl(video.getUrl());
//        		videoResponse.setDecription(video.getDecription());
//        		videoResponse.setLikes(video.getLikes());
//        		videoResponse.setViews(video.getViews());
//        		videoResponse.setDislike(video.getDislike());
//        		videoResponse.setCategoryName(video.getCategory().getCategoryName());
//        		
//        		List<CommentRes> commentResponses = video.getComments().stream().map(comment->{
//        			CommentRes cr = new CommentRes();
//        	            cr.setId(comment.getId());
//        	            cr.setText(comment.getText());
//        	            cr.setUserName(comment.getUser().getUserName());
//        	            return cr;
//        		}).toList();
//        		videoResponse.setComments(commentResponses);
//        		  return videoResponse;
//        	}).toList();
        }
        
        
       
	
	
	@Override
	public VideoResponse getVideoById(Integer id) {
		
		Optional<Video> byId = Optional.ofNullable(videoRepo.findById(id).orElseThrow(()->new VideoIdNotFoundException("Id not exits")));
		if(byId.isPresent())
		{
			Video video = byId.get();
			VideoResponse videoResponse=new VideoResponse();
			videoResponse.setId(video.getId());
			videoResponse.setTitle(video.getTitle());
			videoResponse.setUrl(video.getUrl());
			videoResponse.setDecription(video.getDecription());
			videoResponse.setLikes(video.getLikes());
			videoResponse.setDislike(video.getDislike());
			videoResponse.setCategoryName(video.getCategory().getCategoryName());
			
		   List<CommentRes> collect = video.getComments().stream().map(VideoMapper::toCommentResponse).collect(Collectors.toList());
		   videoResponse.setComments(collect);
		   return videoResponse;
		}
		return null;
	}
	
	@Override
	public List<VideoResponse> findvideoByCategores(Integer categoryId) {
		
		List<Video> video = videoRepo.findByCategoryId(categoryId);
		
		List<VideoResponse> videoResponses = video.stream().map(VideoMapper::toVideoResponse).collect(Collectors.toList());
		
		
		return videoResponses;
	}
	
	
	@Override
	@Transactional
	public Integer deleteVideo(Integer id) {
		deleteVideofromComment(id);
		Video video = videoRepo.findById(id).orElseThrow(()->new VideoIdNotFoundException("Id not exits"));
		videoRepo.deleteById(video.getId());
		
		return video.getId();
	}
	@Override
	public Integer editVideo(VideoReq videoReq,Integer id) {
		
		Optional<Video> byId = videoRepo.findById(id);
	    Video editVideo = byId.get();
		Category byCategoryName = categoryRepo.findByCategoryName(videoReq.getCategory());
		
		editVideo.setCategory(byCategoryName);
		editVideo.setTitle(videoReq.getTitle());
		editVideo.setDecription(videoReq.getDecription());
		editVideo.setUrl(videoReq.getUrl());
		
		Integer id2 = videoRepo.save(editVideo).getId();
	    
		return id2;
	}


}
