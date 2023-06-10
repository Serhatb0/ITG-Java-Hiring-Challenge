package com.biricik.automotive.model;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "orders")
@Data
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
@Builder
public class Order extends ParentEntity {

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "customer_id")
	private Customer customer;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "coupon_id")
	private Coupon coupon;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "order")
	private List<Cargo> cargos;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "order")
	private List<OrderItem> orderItems;

	@Enumerated(EnumType.STRING)
	private OrderStatus orderStatus;

	@CreatedDate
	@Column(name = "order_date")
	private Date orderDate;

	@Column(name = "totalAmount")
	private BigDecimal  totalAmount;

}
