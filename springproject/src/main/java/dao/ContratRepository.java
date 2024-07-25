package dao;

import org.springframework.data.jpa.repository.JpaRepository;

import entities.Contrat;

public interface ContratRepository extends JpaRepository<Contrat, Integer> {

}
