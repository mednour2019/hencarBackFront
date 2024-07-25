package services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.PersonneRepository;
import entities.Personne;
@Service
public class PersonnesServiceImp implements PersonneService {
	@Autowired
	PersonneRepository personneRepository;
	@Override
	public void addPersonne(Personne p) {
		// TODO Auto-generated method stub
		personneRepository.save(p);
		
	}

	@Override
	public void updatePersonne(Personne p) {
		// TODO Auto-generated method stub
		personneRepository.save(p);
	}

	@Override
	public void deletePersonne(Personne p) {
		// TODO Auto-generated method stub
		personneRepository.delete(p);
	}

	@Override
	public Personne getById(int id) {
		// TODO Auto-generated method stub
		return personneRepository.getOne(id);
		
	}

	@Override
	public List<Personne> getAll() {
		// TODO Auto-generated method stub
		return personneRepository.findAll();
	}
	
	public Personne connexion(String email,String password) {
		return personneRepository.getByEmailAndPassword(email, password);
	}

}
