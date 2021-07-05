package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;

public class ReviewDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String text;
	private String user_name;
	
	
	public ReviewDTO() {
		
	}
	public ReviewDTO(Long id, String text, String user_id, Movie movie) {
		this.id = id;
		this.text = text;
		this.user_name = user_id;
		
		
	}
	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		user_name = entity.getUser().getName();

		
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
	public String getUser() {
		return user_name;
		
	}
	public void setUser(String user) {
		this.user_name = user;
		
}
	
	

}
