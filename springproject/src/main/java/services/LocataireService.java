package services;

import java.util.List;

import entities.Locataire;

public interface LocataireService {
	void addLocataire(Locataire l);
	void updateLocataire(Locataire l);
	void deleteLocataire(Locataire l);
	Locataire getById(int id);
	List<Locataire> getAll();
}
