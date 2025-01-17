package com.devsuperior.movieflix.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.devsuperior.movieflix.dto.UserDTO;
import com.devsuperior.movieflix.dto.UserDTOReviews;
import com.devsuperior.movieflix.dto.UserDTOUpdate;
import com.devsuperior.movieflix.dto.UserInsertDTO;
import com.devsuperior.movieflix.services.UserService;

@RestController
@RequestMapping(value ="/users")
public class UserResource {
	
	@Autowired
	private UserService service;
	
	@GetMapping
	public ResponseEntity<List<UserDTOReviews>> findAll(){
		   List<UserDTOReviews> list = service.findAll();
		   return ResponseEntity.ok().body(list);
		   
    }
	
	@PostMapping
	public ResponseEntity<UserInsertDTO> insert(@RequestBody UserInsertDTO dto){
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	@PutMapping
	public ResponseEntity<UserDTOUpdate> insert(@RequestBody UserDTOUpdate dto){
	 service.update(dto);
	 return ResponseEntity.ok().body(dto);
	}
}