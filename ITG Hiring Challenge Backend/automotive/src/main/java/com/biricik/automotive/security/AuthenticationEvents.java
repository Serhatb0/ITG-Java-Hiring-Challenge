package com.biricik.automotive.security;

import org.springframework.context.event.EventListener;
import org.springframework.security.authentication.event.AbstractAuthenticationFailureEvent;
import org.springframework.security.authentication.event.AuthenticationSuccessEvent;
import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class AuthenticationEvents {
	
	
	private final UserDetailsServiceImpl userDetailsServiceImpl;
	
	@EventListener
    public void onSuccess(AuthenticationSuccessEvent success) {
		
		
    }

    @EventListener
    public void onFailure(AbstractAuthenticationFailureEvent failures) {
    	String email = (String) failures.getAuthentication().getPrincipal();
    	userDetailsServiceImpl.incrementFailedLoginAttempts(email);
    }
}
