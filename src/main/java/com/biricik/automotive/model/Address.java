package com.biricik.automotive.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "addresses")
@Getter
@Setter
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@NoArgsConstructor
public class Address extends ParentEntity {

	
	
	@Column(name = "address_title")
	private String addressTitle;
	
	@Column(name = "phone_number")
	private String phoneNumber;
	
	@Column(name = "identity_number")
	private String identityNumber;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "city_id")
	private City city;
	
	@Column(name = "full_address")
	private String fullAddress;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;
	
	

	
	

}
