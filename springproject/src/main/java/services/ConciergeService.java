package services;

import java.util.List;

import entities.Concierge;
public interface ConciergeService {
	void addConcierge(Concierge c);
	void updateConcierge(Concierge c);
	void deleteConcierge(Concierge c);
	Concierge getById(int id);
	List<Concierge> getAll();
}
