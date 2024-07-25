package dao;

import org.springframework.data.jpa.repository.JpaRepository;

import entities.Personne;

public interface PersonneRepository extends JpaRepository<Personne, Integer> {
	Personne getByEmailAndPassword(String email,String password);
}
