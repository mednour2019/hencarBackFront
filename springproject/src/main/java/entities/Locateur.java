package entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table (name="locateur")
public class Locateur extends Personne implements Serializable {
	private static final long serialVersionUID = 1L;
	
	public Locateur(int id, String firstname, String lastname, String email, String password, String cin, String tel,String adress,String sexe) {
		super(id, firstname, lastname, email, password, cin, tel,adress,sexe);
		// TODO Auto-generated constructor stub
	}
	public Locateur() {}
	
}
