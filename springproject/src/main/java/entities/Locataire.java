package entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.Table;
import javax.persistence.*;
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table (name="locataire")
public class Locataire  extends Personne implements Serializable {

	private static final long serialVersionUID = 1L;
	
	
	private String job;
	public Locataire(int id, String firstname, String lastname, String email, String password,String cin, String tel, String adress,String sexe, String job) {
		super(id,firstname,lastname,email,password,cin,tel,adress,sexe);
		
	
		this.job = job;
		
	}
	
	public Locataire() {
		super();
	}
	
	
	
	public String getJob() {
		return job;
	}
	public void setJob(String job) {
		this.job = job;
	}
	

	
	
	
}
