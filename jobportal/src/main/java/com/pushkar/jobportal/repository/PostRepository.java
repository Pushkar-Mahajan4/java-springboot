package com.pushkar.jobportal.repository;

import com.pushkar.jobportal.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post, String> {

}
