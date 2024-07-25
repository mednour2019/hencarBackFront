package services;

import java.util.List;

import entities.Contrat;



public interface ContratService {
	void addContrat(Contrat c);
	void updateContrat(Contrat  c);
	void deleteContrat(Contrat c);
	Contrat getById(int id);
	List<Contrat> getAll();
}
