package com.biricik.automotive.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "email_confirmation_tokens")
@Data
@ToString
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
public class EmailConfirmationToken extends ParentEntity {

	@Column(name = "confirmation_token")
	private String confirmationToken;
	
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id" ,referencedColumnName = "id")
	public User user;

}
