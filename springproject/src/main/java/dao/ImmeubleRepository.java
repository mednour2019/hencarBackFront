package dao;

import org.springframework.data.jpa.repository.JpaRepository;

import entities.Immeuble;

public interface ImmeubleRepository extends JpaRepository<Immeuble, Integer> {

}
