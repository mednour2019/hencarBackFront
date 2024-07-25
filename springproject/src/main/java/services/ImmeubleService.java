package services;

import java.util.List;

import entities.Immeuble;
import entities.Maison;


public interface ImmeubleService {
	void addAppartement(Immeuble i);
	void updateAppartement(Immeuble  i);
	void deleteAppartement(Immeuble i);
	Immeuble getById(int id);
	List<Immeuble> getAll();
	//List<Maison> getMaisonByAppartement(int id);

}
