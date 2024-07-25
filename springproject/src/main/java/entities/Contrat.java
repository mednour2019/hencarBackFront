package entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity(name = "contrat")
public class Contrat implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private int id;
	
	private Date datefin;
	private double prixfinal;
	private Date datedebut;
	@OneToOne
	private Maison maison;
	@OneToOne
	private Locateur locateur;
	@OneToOne
	private Locataire locataire;
	public Contrat() {
		super();
	}
	public Contrat( Date datefin, double prixfinal, Date datedebut) {
		super();
		
		this.datefin=datefin;
	
		this.prixfinal = prixfinal;
		this.datedebut=datedebut;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	
	public Date getDatefin() {
		return datefin;
	}
	public void setDatefin(Date datefin) {
		this.datefin=datefin;
	}

	public double getPrixfinal() {
		return prixfinal;
	}
	public void setPrixfinal(double prixfinal) {
		this.prixfinal = prixfinal;
	}
	public Date getDatedebut() {
		return datedebut;
	}
	public void setDatedebut(Date datedebut) {
		this.datedebut=datedebut;
	}
	
	
	public Maison getMaison() {
		return maison;
	}
	public void setMaison(Maison maison) {
		this.maison = maison;
	}
	public Locateur getLocateur() {
		return locateur;
	}
	public void setLocateur(Locateur locateur) {
		this.locateur = locateur;
	}
	public Locataire getLocataire() {
		return locataire;
	}
	public void setLocataire(Locataire locataire) {
		this.locataire = locataire;
	}
	
	
	

}
