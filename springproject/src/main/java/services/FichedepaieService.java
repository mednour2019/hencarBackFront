package services;

import java.util.List;

import entities.Fichedepaie;

public interface FichedepaieService {
	void addFichedepaie(Fichedepaie f);
	void updateFichedepaie(Fichedepaie  f);
	void deleteFichedepaie(Fichedepaie f);
	Fichedepaie getById(int id);
	List<Fichedepaie> getAll();
}
