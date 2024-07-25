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

import entities.Concierge;
import entities.Locataire;
import services.ConciergeService;

@RestController
@RequestMapping("/concierge")
public class ConciergeController {
	@Autowired
	ConciergeService conciergeService;
	@CrossOrigin
	@PostMapping("/add")
	public String addConcierge(@RequestBody Concierge c)
	{
		conciergeService.addConcierge(c);
		return"Concierge Added Succefully";
		
	}
	@CrossOrigin
	@GetMapping("/getById/{id}")
	public Concierge  GetById(@PathVariable int id)
	{
		return conciergeService.getById(id);
	
		
	}
	@CrossOrigin
	@PostMapping("/update")
	public String updateConcierge(@RequestBody Concierge c)
	{
		conciergeService.updateConcierge(c);
		return"Concierge updated Succefully";
		
	}
	@CrossOrigin
	@GetMapping("/getAll")
	public List<Concierge>  GetAll()
	{
		return conciergeService.getAll();
	
		
	}
	@CrossOrigin
	@PostMapping("/delete")
	public String deleteConcierge(@RequestBody Concierge c)
	{
		conciergeService.deleteConcierge(c);
		return"Concierge deleted Succefully";
		
	}
	
}
