package services;

import java.util.List;

import entities.Locateur;


public interface LocateurService {
	void addLocateur(Locateur l);
	void updateLocateur(Locateur l);
	void deleteLocateur(Locateur l);
	Locateur getById(int id);
	List<Locateur> getAll();
}
