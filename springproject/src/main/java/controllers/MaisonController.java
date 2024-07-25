package controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dao.MaisonRepository;
import entities.Contrat;
import entities.Immeuble;
import entities.Maison;
import services.MaisonService;
import services.ImmeubleService;

@RestController
@RequestMapping("/maison")
public class MaisonController {
	@Autowired
	MaisonService maisonService;
	MaisonRepository maisonRepository;
	@Autowired
	ImmeubleService immeubleService;
	@CrossOrigin
	@PostMapping("/add")
	public String addMaison(@RequestBody Maison m)
	{
		maisonService.addMaison(m);
		return"Maison Added Succefully";
		
	}
	@CrossOrigin
	@GetMapping("/getById/{id}")
	public Maison  GetById(@PathVariable int id)
	{
		return maisonService.getById(id);
	
		
	}
	@CrossOrigin
	@PostMapping("/update")
	public String updateMaison(@RequestBody Maison m)
	{
		maisonService.updateMaison(m);
		return"Maison updated Succefully";
		
	}
	@CrossOrigin
	@GetMapping("/getAll")
	public List<Maison>  GetAll()
	{
		return maisonService.getAll();		
	}
	@CrossOrigin
	@PostMapping("/delete")
	public String deleteMaison(@RequestBody Maison m)
	{
		maisonService.deleteMaison(m);
		return"Maison deleted Succefully";
		
	}
	
	@CrossOrigin
	@GetMapping("/getAllMaisonsByImmeuble/{id}")
	public List<Maison> deleteMaison(@PathVariable int id)
	{
		Immeuble immeuble=immeubleService.getById(id);
		
		return maisonService.getByImmeuble(immeuble);
	}
	@CrossOrigin
	@GetMapping("/findByEtat")
	public List<Maison> findByEtat (String etat)
	{
		
		
		return maisonService.findByEtat("non louee");
	}
	@CrossOrigin
	@GetMapping("/findmaisoncontrat")
	public List<Object> findmaisoncontrat (String ch)
	{
		
		
		return maisonService.findMaisonContrat("louee");
	}
	
	
	

}
