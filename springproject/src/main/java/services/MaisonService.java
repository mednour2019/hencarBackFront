package services;

import java.util.Date;
import java.util.List;

import org.springframework.data.repository.query.Param;

import entities.Contrat;
import entities.Immeuble;
import entities.Maison;



public interface MaisonService {
	void addMaison(Maison m);
	void updateMaison(Maison  m);
	void deleteMaison(Maison m);
	Maison getById(int id);
	List<Maison> getAll();
	List<Maison>getByImmeuble(Immeuble immeuble);
	List<Maison>findByEtat(String etat);
	//List<Maison>getByContratDatefinGreaterThan(Date date);
	List<Object> findMaisonContrat(String ch);

}
