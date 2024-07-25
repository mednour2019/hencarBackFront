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

import entities.Locateur;

import services.LocateurService;

@RestController
@RequestMapping("/locateur")
public class LocateurController {
	@Autowired
	LocateurService locateurService;
	@CrossOrigin
	@PostMapping("/add")
	public String addLocateur(@RequestBody Locateur l)
	{
		locateurService.addLocateur(l);
		return"Locateur Added Succefully";
		
	}
	@CrossOrigin
	@GetMapping("/getById/{id}")
	public Locateur  GetById(@PathVariable int id)
	{
		return locateurService.getById(id);
	
		
	}
	@CrossOrigin
	@PostMapping("/update")
	public String updateLocateur(@RequestBody Locateur l)
	{
		locateurService.updateLocateur(l);
		return"Locateur updated Succefully";
		
	}
	@CrossOrigin
	@GetMapping("/getAll")
	public List<Locateur>  GetAll()
	{
		return locateurService.getAll();
	
		
	}
	@CrossOrigin
	@PostMapping("/delete")
	public String deleteLocateur(@RequestBody Locateur l)
	{
		locateurService.deleteLocateur(l);
		return"Locateur deleted Succefully";
		
	}
}
