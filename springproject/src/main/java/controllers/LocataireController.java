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
import entities.Locataire;

import services.LocataireService;

@RestController
@RequestMapping("/locataire")
public class LocataireController {
	@Autowired
	LocataireService locataireService;
	@CrossOrigin
	@PostMapping("/add")
	public String addLocataire(@RequestBody Locataire l)
	{
		locataireService.addLocataire(l);
		return"Locataire Added Succefully";
		
	}
	@CrossOrigin
	@GetMapping("/getById/{id}")
	public Locataire  GetById(@PathVariable int id)
	{
		return locataireService.getById(id);
	
		
	}
	@CrossOrigin
	@PostMapping("/update")
	public String updateLocataire(@RequestBody Locataire l)
	{
		locataireService.updateLocataire(l);
		return"Locataire updated Succefully";
		
	}
	@CrossOrigin
	@GetMapping("/getAll")
	public List<Locataire>  GetAll()
	{
		return locataireService.getAll();
	
		
	}
	@CrossOrigin
	@PostMapping("/delete")
	public String deleteLocataire(@RequestBody Locataire l)
	{
		locataireService.deleteLocataire(l);
		return"Locataire deleted Succefully";
		
	}
}
