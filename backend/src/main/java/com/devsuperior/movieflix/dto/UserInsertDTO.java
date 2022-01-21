package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.devsuperior.movieflix.entities.User;

public class UserInsertDTO implements Serializable{
	private static final long serialVersionUID = 1L; 
	
	private Long id;
	private String name;
	private String email;
	private String password;

   private List<RoleDTO> roles = new ArrayList<>();
	
    public UserInsertDTO() {
		
	}
	
	public UserInsertDTO(Long id, String name, String email) {
		this.id = id;
		this.name = name;
		this.email = email;

	}
	
	public UserInsertDTO(User entity) {
		id = entity.getId();
		name = entity.getName();
		email = entity.getEmail();
		password = entity.getPassword();
		entity.getRoles().forEach(x -> roles.add(new RoleDTO(x)));
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<RoleDTO> getRoles() {
		return roles;
	}
	
	

}
