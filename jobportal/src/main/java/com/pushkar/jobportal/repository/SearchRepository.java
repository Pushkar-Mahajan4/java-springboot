package com.pushkar.jobportal.repository;

import com.pushkar.jobportal.model.Post;

import java.util.List;

public interface SearchRepository {
    List<Post> findByText(String text);


}
