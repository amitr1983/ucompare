package edu.sjsu.icompare.admin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.sjsu.icompare.admin.model.APIKeyRequest;
import edu.sjsu.icompare.admin.service.APIKeyService;

@RestController
public class APIKeyController {

	@Autowired
	APIKeyService apiKeyService;

	@PostMapping
	@RequestMapping("/api/key")
	public void updateAPIKey(APIKeyRequest apiKey) {
		apiKeyService.updateAPIKey(apiKey);
	}

}
