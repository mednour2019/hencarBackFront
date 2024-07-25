package services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.ConciergeRepository;
import entities.Concierge;

@Service
public class ConciergeServiceImp implements ConciergeService{
	@Autowired
	ConciergeRepository conciergeRepository;
	@Override
	public void addConcierge(Concierge c) {
		// TODO Auto-generated method stub
		conciergeRepository.save(c);
	}

	@Override
	public void updateConcierge(Concierge c) {
		// TODO Auto-generated method stub
		conciergeRepository.save(c);
	}

	@Override
	public void deleteConcierge(Concierge c) {
		// TODO Auto-generated method stub
		conciergeRepository.delete(c);
	}

	@Override
	public Concierge getById(int id) {
		// TODO Auto-generated method stub
		return conciergeRepository.getOne(id);
	}

	@Override
	public List<Concierge> getAll() {
		// TODO Auto-generated method stub
		return conciergeRepository.findAll();
	}
	

}
