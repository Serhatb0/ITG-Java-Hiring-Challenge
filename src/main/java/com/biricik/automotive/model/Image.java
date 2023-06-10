package com.biricik.automotive.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "images")
@Data
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor 
@NoArgsConstructor
public class Image extends ParentEntity {

	@Column(name = "name")
	private String name; 

	@Column(name = "url")
	private String url;

	@Column(name = "size")
	private Long size;
	

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "product_id")
	private Product product;
}
