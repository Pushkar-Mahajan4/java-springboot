package com.pushkar.jobportal;

import com.pushkar.jobportal.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post, String> {

}
