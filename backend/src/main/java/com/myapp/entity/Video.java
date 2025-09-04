package com.myapp.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@Data
public class Video {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Integer id;
	private String title;
	private String url;
	private String decription;
	private Integer likes;
	private Integer views;
	private Integer dislike;
	
	
	@OneToMany(mappedBy = "video", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonManagedReference
    private List<Comment> comments = new ArrayList<>();
    
	@ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
	

}
