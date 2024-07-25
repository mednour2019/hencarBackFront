package dao;

import org.springframework.data.jpa.repository.JpaRepository;

import entities.Locataire;

public interface LocataireRepository extends JpaRepository<Locataire, Integer> {

}
