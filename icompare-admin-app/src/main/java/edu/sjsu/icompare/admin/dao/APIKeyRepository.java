package edu.sjsu.icompare.admin.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import edu.sjsu.icompare.admin.model.APIKey;

public interface APIKeyRepository extends MongoRepository<APIKey, String>{

}
