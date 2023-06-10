package com.biricik.automotive.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Entity
@Table(name = "cities")
@Data
@ToString
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
public class City extends ParentEntity {
	
	@Column(name = "name")
	private String name;

	@Column(name = "postal_code")
	private String postalCode;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "country_id")
	private Country country;
	
	@OneToMany(fetch =  FetchType.LAZY,mappedBy = "city")
	private List<District> districts;
	
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "city")
	private List<Address> addresses;
	
}
