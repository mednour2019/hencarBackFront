package dao;

import org.springframework.data.jpa.repository.JpaRepository;

import entities.Location;

public interface LocationRepository extends JpaRepository<Location, Integer> {

}
