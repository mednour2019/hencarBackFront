package entities;

import java.io.Serializable;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import entities.Maison;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Immeuble  implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private int id;
	private String name;
	private String adresse;
	@OneToMany
	private List<Maison>lesmaisons;
	public Immeuble() {
		super();
	}
	public Immeuble(String name, String adresse) {
		super();
		this.name = name;
		this.adresse = adresse;
		
		
	}
	
	
	
	
	
	/*public List<Maison> getLesmaisons() {
		return lesmaisons;
	}
	public void setLesmaisons(List<Maison> lesmaisons) {
		this.lesmaisons = lesmaisons;
	}*/
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public List<Maison> getLesmaisons() {
		return lesmaisons;
	}
	public void setLesmaisons(List<Maison> lesmaisons) {
		this.lesmaisons = lesmaisons;
	}
	
	
	
	

}
