package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;

public class MovieReviewDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String title;
	private String subTitle;
	private Integer year;
	private String imgUri;
	private String synopsis;
	
	List<ReviewDTO> reviews = new ArrayList<>();
	
	public MovieReviewDTO() {
		
	}
	public MovieReviewDTO(Long id, String title, String subTitle, Integer year, String imgUri, String synopsis) {
		this.id = id;
		this.title = title;
		this.subTitle = subTitle;
		this.year = year;
		this.imgUri = imgUri;
		this.synopsis = synopsis;
		
	}
	public MovieReviewDTO(Movie entity) {
		id = entity.getId();
		title = entity.getTitle();
		subTitle = entity.getSubTitle();
		year = entity.getYear();
		imgUri = entity.getImgUri();
		synopsis = entity.getSynopsis();
		
	}
	public MovieReviewDTO(Movie entity, List<Review> list) {
		this(entity);
		list.forEach(x -> this.reviews.add(new ReviewDTO(x)));
		
	}
	public Long getId() {
		return id;
		
	}
	public void setId(Long id) {
		this.id = id;
		
	}
	public String getTitle() {
		return title;
		
	}
	public void setTitle(String title) {
		this.title = title;
		
	}
	public String getSubTitle() {
		return subTitle;
		
	}
	public void setSubTitle(String subTitle) {
		this.subTitle = subTitle;
		
	}
	public Integer getYear() {
		return year;
		
	}
	public void setYear(Integer year) {
		this.year = year;
		
	}
	public String getImgUri() {
		return imgUri;
		
	}
	public void setImgUri(String imgUri) {
		this.imgUri = imgUri;
		
	}
	public String getSynopsis() {
		return synopsis;
		
	}
	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
		
	}
	public List<ReviewDTO> getReviews() {
		return reviews;
		
	}
	
	
}
