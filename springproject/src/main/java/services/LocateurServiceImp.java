package services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.LocateurRepository;
import entities.Locateur;

@Service
public class LocateurServiceImp implements LocateurService {
	 @Autowired
	 LocateurRepository locateurRepository;
	 
	@Override
	public void addLocateur(Locateur l) {
		// TODO Auto-generated method stub
		locateurRepository.save(l);
	}

	@Override
	public void updateLocateur(Locateur l) {
		// TODO Auto-generated method stub
		locateurRepository.save(l);
	}

	@Override
	public void deleteLocateur(Locateur l) {
		// TODO Auto-generated method stub
		locateurRepository.delete(l);
	}

	@Override
	public Locateur getById(int id) {
		// TODO Auto-generated method stub
		return locateurRepository.getOne(id);
	}

	@Override
	public List<Locateur> getAll() {
		// TODO Auto-generated method stub
		return locateurRepository.findAll();
	}

}
