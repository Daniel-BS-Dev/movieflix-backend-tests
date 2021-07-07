package com.devsuperior.movieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.dto.MovieReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.services.exception.EntityNotFoundException;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;

	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(PageRequest pageRequest) {
		Page<Movie> page = repository.findAll(pageRequest);
		return page.map(x -> new MovieDTO(x));
		
	}
	@Transactional(readOnly = true)
	public MovieReviewDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie entity = obj.orElseThrow(() -> new EntityNotFoundException("Entity not found"));
		return new MovieReviewDTO(entity, entity.getReviews());
		
	}
	
	
	

}
