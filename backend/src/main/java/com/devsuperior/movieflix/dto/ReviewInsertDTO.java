package com.devsuperior.movieflix.dto;

import java.io.Serializable;

//import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
//import com.devsuperior.movieflix.entities.User;

public class ReviewInsertDTO  implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String text;
	private Long user;
	//private Long movie;
	
	
	public ReviewInsertDTO() {
		
	}
	public ReviewInsertDTO(Review entity) {
		this.id = entity.getId();
		this.text = entity.getText();
	    entity.getUser().setId(user);
		//this.movie = entity.getMovie().getId();
		
	}
	public String getText() {
		return text;
		
	}
	public void setText(String text) {
		this.text = text;
		
	}
	public Long getId() {
		return id;
		
	}
	public void setId(Long id) {
		this.id = id;
		
	}
    public Long getUser() {
		return user;
		
	}
	public void setUser(Long name) {
	   this.user = name;
		
	}
	/*
	public Long getMovie() {
		return movie;
		
	}
	public void setMovie(Long movie) {
		this.movie = movie;
		
	}
  */
}
