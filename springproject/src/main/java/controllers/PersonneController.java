package controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import entities.Personne;
import entities.User;
import services.PersonneService;

@RestController
@RequestMapping("/personne")
public class PersonneController {
	@Autowired
	PersonneService personneService;
	@CrossOrigin
	@PostMapping("/add")
	public String addPersonne(@RequestBody Personne p)
	{
		personneService.addPersonne(p);
		return"Person Added Succefully";
		
	}
	@CrossOrigin
	@GetMapping("/getById/{id}")
	public Personne  GetById(@PathVariable int id)
	{
		return personneService.getById(id);
	
		
	}
	@CrossOrigin
	@PostMapping("/update")
	public String updatePersonne(@RequestBody Personne p)
	{
		personneService.updatePersonne(p);
		return"Person updated Succefully";
		
	}
	@CrossOrigin
	@GetMapping("/getAll")
	public List<Personne>  GetAll()
	{
		return personneService.getAll();
	
	}
	@CrossOrigin
	@PostMapping("/delete")
	public String deletePersonne(@RequestBody Personne p)
	{
		personneService.deletePersonne(p);
		return"Person deleted Succefully";
		
	}
	
	@CrossOrigin
	@PostMapping("/login")
	public Personne login(@RequestBody User user) {
		return personneService.connexion(user.getEmail(), user.getPassword());
	}

	
}
