package com.biricik.automotive.model;

import java.time.Instant;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity @Data @Table(name="refresh_tokens") @EqualsAndHashCode(callSuper = false)
public class RefreshToken extends ParentEntity{


	@OneToOne
	@JoinColumn(name = "user_id" ,referencedColumnName = "id")
	private User user;

	
	@Column(nullable = false, unique = true)
	private String token;

	@Column(nullable = false)
	private Instant expiryDate;
}
