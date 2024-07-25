package services;


import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.MaisonRepository;
import entities.Contrat;
import entities.Immeuble;
import entities.Maison;

@Service
public class MaisonServiceImp implements MaisonService {
	@Autowired
	MaisonRepository maisonRepository;
	//Appartement a;

	@Override
	public void addMaison(Maison m) {
		// TODO Auto-generated method stub
		maisonRepository.save(m);
		/*a=new Appartement();
		a.getLesmaisons().add(m);*/
	
		
		
		
	}

	@Override
	public void updateMaison(Maison m) {
		// TODO Auto-generated method stub
		maisonRepository.save(m);
		
	}

	@Override
	public void deleteMaison(Maison m) {
		// TODO Auto-generated method stub
		maisonRepository.delete(m);
	}

	@Override
	public Maison getById(int id) {
		// TODO Auto-generated method stub
		return maisonRepository.getOne(id);
	}

	@Override
	public List<Maison> getAll() {
		// TODO Auto-generated method stub
		return maisonRepository.findAll();
	}
	
	public List<Maison>getByImmeuble(Immeuble immeuble){
		return maisonRepository.getByImmeuble(immeuble);
	}
	public List<Maison>findByEtat(String etat){
		return maisonRepository.findByEtat(etat);
	}

	@Override
	public List<Object> findMaisonContrat(String ch) {
		// TODO Auto-generated method stub
		return maisonRepository.findMaisonContrat(  ch);
	}


	

	
	
	
	

	

	
	

}
