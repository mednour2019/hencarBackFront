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

import entities.Contrat;
import services.ContratService;

@RestController
@RequestMapping("/contrat")
public class ContratController {
	@Autowired
	ContratService contratService;
	@CrossOrigin
	@PostMapping("/add")
	public String addContrat(@RequestBody Contrat c)
	{
		contratService.addContrat(c);
		return"Contrat Added Succefully";
		
	}
	@CrossOrigin
	@GetMapping("/getById/{id}")
	public Contrat  GetById(@PathVariable int id)
	{
		return contratService.getById(id);
	
		
	}
	@CrossOrigin
	@PostMapping("/update")
	public String updateContrat(@RequestBody Contrat c)
	{
		contratService.updateContrat(c);
		return"Contrat updated Succefully";
		
	}
	@CrossOrigin
	@GetMapping("/getAll")
	public List<Contrat>  GetAll()
	{
		return contratService.getAll();
	
		
	}
	@CrossOrigin
	@PostMapping("/delete")
	public String deleteContrat(@RequestBody Contrat c)
	{
		contratService.deleteContrat(c);
		return"Contrat deleted Succefully";
		
	}
	

}
