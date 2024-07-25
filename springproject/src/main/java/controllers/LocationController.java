package controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import entities.Location;
import services.LocationService;

@RestController
@RequestMapping("/location")
public class LocationController {
	@Autowired
	LocationService locationService;
	@PostMapping("/add")
	public String addLocation(@RequestBody Location l)
	{
		locationService.addLocation(l);
		return"Location Added Succefully";
		
	}
	@GetMapping("/getById/{id}")
	public Location  GetById(@PathVariable int id)
	{
		return locationService.getByid(id);
	
		
	}
	@PostMapping("/update")
	public String updateLocation(@RequestBody Location l)
	{
		locationService.updateLocation(l);
		return"Location updated Succefully";
		
	}
	@GetMapping("/getAll")
	public List<Location>  GetAll()
	{
		return locationService.getAll();
	
		
	}
	@PostMapping("/delete")
	public String deleteLocation(@RequestBody Location l)
	{
		locationService.deleteLocation(l);
		return"Location deleted Succefully";
		
	}
	
}
