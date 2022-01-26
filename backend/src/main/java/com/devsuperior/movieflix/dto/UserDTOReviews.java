package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;

public class UserDTOReviews implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	
	private List<ReviewDTO> reviews = new ArrayList<>();
	
	
	public UserDTOReviews() {
	
	}

	public UserDTOReviews(Long id, String name) {
		this.id = id;
		this.name = name;
	}

	public UserDTOReviews(User entity) {
		id = entity.getId();
		name = entity.getName();
	}


	public UserDTOReviews(User entity, List<Review> list) {
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

	public List<ReviewDTO> getReviews() {
		return reviews;
	}

}
