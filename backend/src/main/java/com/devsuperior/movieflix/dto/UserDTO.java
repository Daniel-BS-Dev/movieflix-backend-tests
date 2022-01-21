package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;

public class UserDTO extends UserInsertDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private List<ReviewDTO> reviews = new ArrayList<>();
	
	
	public UserDTO() {
		super();
	
	}

	public UserDTO(Long id, String name, String email) {
		super(id, name, email);
		
	}
	
	public UserDTO(User entity) {
		super(entity);
	
	}

	public UserDTO(User entity, List<Review> list) {
		this(entity);
		list.forEach(x -> this.reviews.add(new ReviewDTO(x)));
		
	}
	
	public List<ReviewDTO> getReviews() {
		return reviews;
		
	}
	
	
}
