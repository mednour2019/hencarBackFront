package services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.ImmeubleRepository;
import entities.Immeuble;
import entities.Maison;

@Service
public class ImmeubleServiceImp implements ImmeubleService {
	@Autowired
	ImmeubleRepository immeubleRepository;
	//Appartement a;
	@Override
	public void addAppartement(Immeuble i) {
		// TODO Auto-generated method stub
		immeubleRepository.save(i);
		
		
	}

	@Override
	public void updateAppartement(Immeuble i) {
		// TODO Auto-generated method stub
		immeubleRepository.save(i);
	}

	@Override
	public void deleteAppartement(Immeuble i) {
		// TODO Auto-generated method stub
		immeubleRepository.delete(i);
	}

	@Override
	public Immeuble getById(int id) {
		// TODO Auto-generated method stub
		return immeubleRepository.getOne(id);
	}

	@Override
	public List<Immeuble> getAll() {
		// TODO Auto-generated method stub
		return immeubleRepository.findAll();
	}

	/*@Override
	public List<Maison> getMaisonByAppartement(int id ) {
		// TODO Auto-generated method stub
		a=new Appartement();
		return a.getLesmaisons();
	}*/

	
	
}
