package edu.sjsu.icompare.admin.model;

import java.io.Serializable;

public class APIKeyRequest implements Serializable {

	private static final long serialVersionUID = 1L;
	private String accessKey;
	private String secretKey;

	public APIKeyRequest() {
	}

	public APIKeyRequest(String accessKey, String secretKey) {
		super();
		this.accessKey = accessKey;
		this.secretKey = secretKey;
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
