package controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import entities.Fichedepaie;
import services.FichedepaieService;

@RestController
@RequestMapping("/fichedepaie")
public class FichedepaieController {
	@Autowired
	FichedepaieService fichedepaieService;
	@PostMapping("/add")
	public String addFichedepaie(@RequestBody Fichedepaie f)
	{
		fichedepaieService.addFichedepaie(f);
		return"Fichedepaie Added Succefully";
		
	}
	@GetMapping("/getById/{id}")
	public Fichedepaie GetById(@PathVariable int id)
	{
		return fichedepaieService.getById(id);
	
		
	}
	@PostMapping("/update")
	public String updateFichedepaie(@RequestBody Fichedepaie f)
	{
		fichedepaieService.updateFichedepaie(f);
		return"Fichedepaie updated Succefully";
		
	}
	@GetMapping("/getAll")
	public List<Fichedepaie>  GetAll()
	{
		return fichedepaieService.getAll();
	
		
	}
	@PostMapping("/delete")
	public String deleteFichedepaie(@RequestBody Fichedepaie f)
	{
		fichedepaieService.deleteFichedepaie(f);
		return"Fichedepaie deleted Succefully";
		
	}
	
	
}
