package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import org.apache.catalina.User;

public class UserDTOUpdate  implements Serializable{
	private static final long serialVersionUID = 1L; 
	
	private String password;
	
	public UserDTOUpdate() {

	}

	public UserDTOUpdate(String password) {
		this.password = password;
	}

	public UserDTOUpdate(User entity) {
		password = entity.getPassword();
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
