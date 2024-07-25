package entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity(name = "maison")
@Inheritance(strategy = InheritanceType.JOINED)
public class Maison implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private int id;
	private String description;
	private int nb_chambres;
	private String type;
	private String  ismeuble;
	private double prix;
	private double remisepromo;
	private String etat;
	@ManyToOne
	private Immeuble immeuble;
	
	public Maison() {
		super();
	}
	public Maison(String description, int nb_chambres, String type, String ismeuble, double prix, double remisepromo,
			String etat,Immeuble immeuble) {
		super();
		this.description = description;
		this.nb_chambres = nb_chambres;
		this.type = type;
		this.ismeuble = ismeuble;
		this.prix = prix;
		this.remisepromo = remisepromo;
		this.etat = etat;
		this.immeuble=immeuble;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getNb_chambres() {
		return nb_chambres;
	}
	public void setNb_chambres(int nb_chambres) {
		this.nb_chambres = nb_chambres;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	public String getIsmeuble() {
		return ismeuble;
	}
	public void setIsmeuble(String ismeuble) {
		this.ismeuble = ismeuble;
	}
	public double getPrix() {
		return prix;
	}
	public void setPrix(double prix) {
		this.prix = prix;
	}
	public double getRemisepromo() {
		return remisepromo;
	}
	public void setRemisepromo(double remisepromo) {
		this.remisepromo = remisepromo;
	}
	public String getEtat() {
		return etat;
	}
	public void setEtat(String etat) {
		this.etat = etat;
	}
	public Immeuble getImmeuble() {
		return immeuble;
	}
	public void setImmeuble(Immeuble immeuble) {
		this.immeuble = immeuble;
	}
	
	
	
	
	
	
	
	
	

}
