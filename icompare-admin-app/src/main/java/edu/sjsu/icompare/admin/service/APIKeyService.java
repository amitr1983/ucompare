package edu.sjsu.icompare.admin.service;

import java.util.List;

import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.sjsu.icompare.admin.dao.APIKeyRepository;
import edu.sjsu.icompare.admin.model.APIKey;
import edu.sjsu.icompare.admin.model.APIKeyRequest;

@Service
public class APIKeyService {

	@Autowired
	APIKeyRepository apiKeyRepo;

	public void updateAPIKey(APIKeyRequest apiKeyRequest) {
		APIKey apiKey;
		List<APIKey> apiKeys = apiKeyRepo.findAll();
		if (CollectionUtils.isEmpty(apiKeys)) {
			apiKey = new APIKey();
		} else {
			apiKey = apiKeys.get(0);
		}

		apiKey.setAccessKey(apiKeyRequest.getAccessKey());
		apiKey.setSecretKey(apiKeyRequest.getSecretKey());

		apiKeyRepo.save(apiKey);
	}

}
