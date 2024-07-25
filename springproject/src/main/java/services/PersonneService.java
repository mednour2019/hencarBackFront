package services;

import java.util.List;

import entities.Personne;

public interface PersonneService {
	void addPersonne(Personne p);
	void updatePersonne(Personne p);
	void deletePersonne(Personne p);
	Personne getById(int id);
	List<Personne> getAll();
	Personne connexion(String email,String password);
	
}
