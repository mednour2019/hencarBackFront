package dao;

import org.springframework.data.jpa.repository.JpaRepository;

import entities.Concierge;

public interface ConciergeRepository extends JpaRepository<Concierge, Integer> {

}
