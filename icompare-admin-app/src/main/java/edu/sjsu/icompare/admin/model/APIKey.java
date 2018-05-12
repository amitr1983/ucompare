package edu.sjsu.icompare.admin.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "apiKeys")
public class APIKey {

	@Id
	private String id;
	private String accessKey;
	private String secretKey;

	public APIKey() {
	}

	public APIKey(String id, String accessKey, String secretKey) {
		super();
		this.id = id;
		this.accessKey = accessKey;
		this.secretKey = secretKey;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getAccessKey() {
		return accessKey;
	}

	public void setAccessKey(String accessKey) {
		this.accessKey = accessKey;
	}

	public String getSecretKey() {
		return secretKey;
	}

	public void setSecretKey(String secretKey) {
		this.secretKey = secretKey;
	}

}
