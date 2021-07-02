package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import com.devsuperior.movieflix.entities.Movie;

public class MovieDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String title;
	private String subTitle;
	private Integer year;
	private String imgUri;

	
	public MovieDTO() {
		
	}
	public MovieDTO(Long id, String title, String subTitle, Integer year, String imgUri) {
		this.id = id;
		this.title = title;
		this.subTitle = subTitle;
		this.year = year;
		this.imgUri = imgUri;
		
	}
	public MovieDTO(Movie entity) {
		id = entity.getId();
		title = entity.getTitle();
		subTitle = entity.getSubTitle();
		year = entity.getYear();
		imgUri = entity.getImgUri();
		
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
	
	
	

}
