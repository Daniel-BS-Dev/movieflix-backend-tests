package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;

public class GenreMovieDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	
	List<MovieDTO> movies = new ArrayList<>();
	
	public GenreMovieDTO() {
		
	}
	public GenreMovieDTO(Long id, String name) {
		this.id = id;
		this.name = name;
		
	}
	public GenreMovieDTO(Genre entity) {
		id = entity.getId();
		name = entity.getName();
		
	}
	public GenreMovieDTO(Genre entity, Set<Movie> list) {
		this(entity);
		list.forEach(x -> this.movies.add(new MovieDTO(x)));;
		
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
	public List<MovieDTO> getMovies() {
		return movies;
		
	}	

}
