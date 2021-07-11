package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;

public class ReviewDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String text;
	private String userName;

	
	public ReviewDTO() {
		
	}
	public ReviewDTO(Long id, String text, String user, Movie movie) {
		this.id = id;
		this.text = text;
		this.userName = user;
		
		
	}
	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		userName = entity.getUser().getName();

		
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
	public String getUserName() {
		return userName;
		
	}
	public void setUserName(String user) {
		this.userName = user;
		
	}
}
