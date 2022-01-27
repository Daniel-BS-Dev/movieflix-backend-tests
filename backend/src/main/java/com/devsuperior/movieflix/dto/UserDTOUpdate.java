package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import org.apache.catalina.User;

public class UserDTOUpdate  implements Serializable{
	private static final long serialVersionUID = 1L; 
	
	private String newPassword;
	private String password;
	
	public UserDTOUpdate() {

	}

	public UserDTOUpdate(String password, String newPassword) {
		this.password = password;
		this.newPassword = newPassword;
	}

	public UserDTOUpdate(User entity) {
		newPassword= entity.getPassword();
		password = entity.getPassword();
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	
}
