package dao;

import java.util.Date;
import java.util.List;

import javax.persistence.NamedQuery;

import org.mapstruct.Named;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mysql.cj.x.protobuf.MysqlxCrud.Collection;

import entities.Contrat;
import entities.Immeuble;
import entities.Maison;

public interface MaisonRepository extends JpaRepository<Maison, Integer> {
	List<Maison> getByImmeuble(Immeuble immeuble);
	List<Maison> findByEtat(String etat);
    @Query( "select m,c.datefin from maison  m "+
    		"join contrat c "+
    		"on m.id=c.maison"+
    		" where c.datefin <=curdate() and m.etat = :ch"
    		
    		)
	List<Object> findMaisonContrat(@Param("ch") String ch);
    
	
}