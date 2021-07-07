package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;

public class ReviewOptionDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String text;
	private Long userId;
	//private Long movieId;
	
	
	public ReviewOptionDTO() {
		
	}
	public ReviewOptionDTO(Long id, String text, Long userId, Long movie) {
		this.id = id;
		this.text = text;
		this.userId = userId;
		//this.movieId = movie;
		
		
	}
	public ReviewOptionDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		userId = entity.getUser().getId();
		//movieId = entity.getMovie().getId();

		
	}
	public Long getId() {
		return id;
		
	}
	public void setId(Long id) {
		this.id = id;
		
	}
	public String getText() {
		return text;
		
	}
	public void setText(String text) {
		this.text = text;
		
	}
	public Long getUserId() {
		return userId;
		
	}
	public void setUserId(Long userId) {
		this.userId = userId;
		
	}
	
	//public Long getMovieId() {
	//	return movieId;
		
	//}
	//public void setMovieId(Long movieId) {
	//	this.movieId = movieId;
		
	//}
	
	
	

}
