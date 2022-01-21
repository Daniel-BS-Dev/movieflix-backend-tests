package com.devsuperior.movieflix.dto;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;

public class UserDTOReviews extends UserDTO{
	private static final long serialVersionUID = 1L;
	
	private List<ReviewDTO> reviews = new ArrayList<>();
	

	public UserDTOReviews() {
		super();
	}

	public UserDTOReviews(Long id, String name) {
		super(id, name);
	}

	public UserDTOReviews(User entity) {
		super(entity);
		
	}

	public UserDTOReviews(User entity, List<Review> list) {
		this(entity);
		list.forEach(x -> this.reviews.add(new ReviewDTO(x)));
		
	}

	public List<ReviewDTO> getReviews() {
		return reviews;
	}

}
