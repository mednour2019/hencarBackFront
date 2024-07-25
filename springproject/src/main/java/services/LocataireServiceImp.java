package services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.LocataireRepository;
import entities.Locataire;
@Service
public class LocataireServiceImp implements LocataireService {
    @Autowired
	LocataireRepository locataireRepository;
	@Override
	public void addLocataire(Locataire l) {
		// TODO Auto-generated method stub
		locataireRepository.save(l);
		
	}

	@Override
	public void updateLocataire(Locataire l) {
		// TODO Auto-generated method stub
		locataireRepository.save(l);
	}

	@Override
	public void deleteLocataire(Locataire l) {
		// TODO Auto-generated method stub
		locataireRepository.delete(l);
	}

	@Override
	public Locataire getById(int id) {
		// TODO Auto-generated method stub
		return locataireRepository.getOne(id);
	}

	@Override
	public List<Locataire> getAll() {
		// TODO Auto-generated method stub
		return locataireRepository.findAll();
	}

}
