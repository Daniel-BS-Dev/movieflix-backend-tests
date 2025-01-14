package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.RoleDTO;
import com.devsuperior.movieflix.dto.UserDTOReviews;
import com.devsuperior.movieflix.dto.UserDTOUpdate;
import com.devsuperior.movieflix.dto.UserInsertDTO;
import com.devsuperior.movieflix.entities.Role;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.RoleRepository;
import com.devsuperior.movieflix.repositories.UserRepository;
import com.devsuperior.movieflix.services.exception.EntityNotFoundException;
import com.devsuperior.movieflix.services.exception.ResourceNotFoundException;

@Service
public class UserService implements UserDetailsService {
	
	private static Logger logger = LoggerFactory.getLogger(UserService.class);
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		User user =repository.findByEmail(username);
		if(user == null) {
			logger.error("User not found " + username);
			throw new UsernameNotFoundException("Email not found");
			
		}
		logger.info("User found "+ username);
		return user;
		
	}
	
	@Transactional(readOnly = true)
	public List<UserDTOReviews> findAll(){
	List<User> list = repository.findAll(Sort.by(Direction.DESC));
	return list.stream().map(x -> new UserDTOReviews(x, x.getReviews())).collect(Collectors.toList());
	
   }
	  
	@Transactional
	public UserInsertDTO insert(UserInsertDTO dto) {
		
		User user = new User();
		
		user.setName(dto.getName());
		user.setEmail(dto.getEmail());
		user.setPassword(passwordEncoder.encode(dto.getPassword()));
		
		for(RoleDTO roles : dto.getRoles()) {
			Role role = roleRepository.findById(roles.getId()).get();
			user.getRoles().add(role);
		}
		
		user = repository.save(user);
	
		return new UserInsertDTO(user);
	}

	
	@Transactional
	public UserDTOUpdate update(UserDTOUpdate dto) {
		try {
		   User user = repository.findByEmail(dto.getEmail());
		   if(!dto.getNewPassword().equals(dto.getPassword())){
				throw new ResourceNotFoundException("Senha são diferentes");
		   
		   }
		   user.setPassword(passwordEncoder.encode(dto.getPassword()));
		   user = repository.save(user);
		   return new UserDTOUpdate(user.getPassword(), dto.getPassword()); 
	
		}
		catch(NullPointerException e) {
			throw new EntityNotFoundException("Email não Existe");
		}
	
	}
	  
   
	  
}