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

import entities.Immeuble;
import entities.Maison;
import services.ImmeubleService;

@RestController
@RequestMapping("/immeuble")

public class ImmeubleController {
	@Autowired
	ImmeubleService immeubleService;
	@CrossOrigin
	@PostMapping("/add")
	public String addAppartement(@RequestBody Immeuble i)
	{
		immeubleService.addAppartement(i);
		return"Immeuble Added Succefully";
		
	}
	@CrossOrigin
	@GetMapping("/getById/{id}")
	public Immeuble  GetById(@PathVariable int id)
	{
		return immeubleService.getById(id);
	
		
	}
	@CrossOrigin
	@PostMapping("/update")
	public String updateAppartement(@RequestBody Immeuble i)
	{
		immeubleService.updateAppartement(i);
		return"Immeuble updated Succefully";
		
	}
	@CrossOrigin
	@GetMapping("/getAll")
	public List<Immeuble>  GetAll()
	{
		return immeubleService.getAll();
	
		
	}
	@CrossOrigin
	@PostMapping("/delete")
	public String deleteAppartement(@RequestBody Immeuble i)
	{
		immeubleService.deleteAppartement(i);
		return"Immeuble deleted Succefully";
		
	}
	/*@GetMapping("/getAppartementByMaison/{id}")
	public List<Maison>  GetApartementByMaison(@PathVariable int id)
	{
		return appartementService.getMaisonByAppartement(id);
	
		
	}*/

}
