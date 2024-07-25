package entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Fichedepaie implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private int id;
	private Date date;
	private double salairebrutte;
	private double cnss;
	private double salairenette;
	@OneToOne
	private Concierge concierge;
	public Fichedepaie() {
		super();
	}
	public Fichedepaie(Date date, double salairebrutte, double cnss, double salairenette) {
		super();
		this.date = date;
		this.salairebrutte = salairebrutte;
		this.cnss = cnss;
		this.salairenette = salairenette;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public double getSalairebrutte() {
		return salairebrutte;
	}
	public void setSalairebrutte(double salairebrutte) {
		this.salairebrutte = salairebrutte;
	}
	public double getCnss() {
		return cnss;
	}
	public void setCnss(double cnss) {
		this.cnss = cnss;
	}
	public double getSalairenette() {
		return salairenette;
	}
	public void setSalairenette(double salairenette) {
		this.salairenette = salairenette;
	}
	
	
	
	
	

}
