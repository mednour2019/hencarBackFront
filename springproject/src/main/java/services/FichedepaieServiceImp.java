package services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.FichedepaieRepository;
import entities.Fichedepaie;

@Service
public class FichedepaieServiceImp implements FichedepaieService{
	@Autowired
	FichedepaieRepository fichedepaieRepository;
	
	@Override
	public void addFichedepaie(Fichedepaie f) {
		// TODO Auto-generated method stub
		fichedepaieRepository.save(f);
	}

	@Override
	public void updateFichedepaie(Fichedepaie f) {
		// TODO Auto-generated method stub
		fichedepaieRepository.save(f);
	}

	@Override
	public void deleteFichedepaie(Fichedepaie f) {
		// TODO Auto-generated method stub
		fichedepaieRepository.delete(f);
	}

	@Override
	public Fichedepaie getById(int id) {
		// TODO Auto-generated method stub
		return fichedepaieRepository.getOne(id);
	}

	@Override
	public List<Fichedepaie> getAll() {
		// TODO Auto-generated method stub
		return fichedepaieRepository.findAll();
	}

}
