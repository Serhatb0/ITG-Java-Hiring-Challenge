package com.biricik.automotive.util;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
public class MessageProvider {

	private final Map<String, LanguageMessages> messages;

	@Autowired
	private HttpServletRequest request;

	public MessageProvider() throws IOException {
		ObjectMapper mapper = new ObjectMapper(); 
		messages = new HashMap<>();
		ClassPathResource[] resources = { new ClassPathResource("i18n/en.json"),
				new ClassPathResource("i18n/tr.json") };
		for (ClassPathResource resource : resources) {
			LanguageMessages translations = mapper.readValue(resource.getInputStream(), LanguageMessages.class);
			String lang = resource.getFilename().split("\\.")[0];
			messages.put(lang, translations); 
		}

	}

	public String getMessage(String key, MessageStatus messageStatus) {
		LanguageMessages translations;
		if (request.getHeader("Accept-Language") != null) {
			translations = messages.get(request.getHeader("Accept-Language"));
		} else {
			translations = messages.get("tr");
		}

		if (translations != null) {
			if (translations.getErrors() != null && translations.getErrors().containsKey(key) && messageStatus == MessageStatus.ERRORS) {
				return translations.getErrors().get(key);
			} else if (translations.getSuccess() != null && translations.getSuccess().containsKey(key)
					&& messageStatus == MessageStatus.SUCCESS) {
				return translations.getSuccess().get(key);
			}
		}
		return key;
	}

}

@Data
@NoArgsConstructor
@AllArgsConstructor
class LanguageMessages {
	private Map<String, String> errors;
	private Map<String, String> success;

}






