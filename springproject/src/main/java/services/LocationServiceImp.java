package services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.LocationRepository;
import entities.Location;

@Service
public class LocationServiceImp implements LocationService {
@Autowired
LocationRepository locationRepository;
	@Override
	public void addLocation(Location l) {
		// TODO Auto-generated method stub
		locationRepository.save(l);
	}

	@Override
	public void updateLocation(Location l) {
		// TODO Auto-generated method stub
		locationRepository.save(l);
	}

	@Override
	public void deleteLocation(Location l) {
		// TODO Auto-generated method stub
		locationRepository.delete(l);
	}

	@Override
	public Location getByid(int id) {
		// TODO Auto-generated method stub
		return locationRepository.getOne(id);
	}

	@Override
	public List<Location> getAll() {
		// TODO Auto-generated method stub
		return locationRepository.findAll();
	}

}
