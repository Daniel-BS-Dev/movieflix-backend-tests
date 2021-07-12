package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.dto.ReviewInsertDTO;
import com.devsuperior.movieflix.dto.UserDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.repositories.UserRepository;
import com.devsuperior.movieflix.services.exception.EntityNotFoundException;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Transactional(readOnly = true)
	public List<ReviewDTO> findAll(){
		List<Review> list = repository.findAll();
		return list.stream().map(x -> new ReviewDTO(x)).collect(Collectors.toList());
		
	
	}
	@Transactional(readOnly = true)
	public ReviewDTO findById(Long id) {
		Optional<Review> obj = repository.findById(id);
		Review entity = obj.orElseThrow(() -> new EntityNotFoundException("Entity not found"));
		return new ReviewDTO(entity);
		
	}
	@Transactional
	public ReviewInsertDTO insert(@Valid ReviewInsertDTO dto) {
		Review entity = new Review();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new ReviewInsertDTO(entity);
		
	}
	private void copyDtoToEntity(ReviewInsertDTO dto, Review entity) {
		
		
	   entity.setText(dto.getText());
	   
	   UserDTO userDto = new UserDTO();
	   userDto.setId(dto.getUserId());
	   User user = userRepository.getOne(userDto.getId());
	   entity.setUser(user);
	   
	   MovieDTO movieDto = new MovieDTO();
	   movieDto.setId(dto.getMovieId());
	   Movie movie = movieRepository.getOne(movieDto.getId());
	   entity.setMovie(movie);
	 
		
	}
}
