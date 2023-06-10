package com.biricik.automotive.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.biricik.automotive.business.abstracts.EmailService;
import com.biricik.automotive.business.requests.authRequest.SendEmailAdminRequest;

@RestController
@RequestMapping("/api/v1")
public class EmailController {

	private final EmailService emailService;

	public EmailController(EmailService emailService) {
		this.emailService = emailService;
	}
	
	

	@PostMapping("/email/sendAdmin")
	public void sendEmailForAdmin(@RequestBody SendEmailAdminRequest sendEmailAdminRequest) {
		emailService.sendEmailForAdmin(sendEmailAdminRequest);
	}
	
	
}
