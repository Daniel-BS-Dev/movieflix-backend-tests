package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;

public class UserDTO  implements Serializable{
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private String email;
	
	private List<ReviewDTO> reviews = new ArrayList<>();

	public UserDTO() {
		
	}
	public UserDTO(Long id, String name) {
		this.id = id;
		this.name = name;
		
	}
	public UserDTO(User entity) {
		id = entity.getId();
		name = entity.getName();
		email = entity.getEmail();
		
	}
	public UserDTO(User entity, List<Review> list) {
		this(entity);
		list.forEach(x -> this.reviews.add(new ReviewDTO(x)));
		
	}
	public Long getId() {
		return id;
		
	}
	public void setId(Long id) {
		this.id = id;
		
	}
	public String getName() {
		return name;
		
	}
	public void setName(String name) {
		this.name = name;
		
	}
	public String getEmail() {
		return email;
		
	}
	public void setEmail(String email) {
		this.email = email;
		
	}
	public List<ReviewDTO> getReviews() {
		return reviews;
		
	}
	
	
}
