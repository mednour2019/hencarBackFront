package services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.ContratRepository;
import entities.Contrat;

@Service
public class ContratServiceImp implements ContratService {
	@Autowired
	ContratRepository contratRepository;
	@Override
	public void addContrat(Contrat c) {
		// TODO Auto-generated method stub
		contratRepository.save(c);
		
	}

	@Override
	public void updateContrat(Contrat c) {
		// TODO Auto-generated method stub
		contratRepository.save(c);
	}

	@Override
	public void deleteContrat(Contrat c) {
		// TODO Auto-generated method stub
		contratRepository.delete(c);
	}

	@Override
	public Contrat getById(int id) {
		// TODO Auto-generated method stub
		return contratRepository.getOne(id);
	}

	@Override
	public List<Contrat> getAll() {
		// TODO Auto-generated method stub
		return contratRepository.findAll();
	}

}
