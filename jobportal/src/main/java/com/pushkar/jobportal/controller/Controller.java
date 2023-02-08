package com.pushkar.jobportal.controller;

import com.pushkar.jobportal.repository.PostRepository;
import com.pushkar.jobportal.model.Post;
import com.pushkar.jobportal.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class Controller {

    @Autowired
    PostRepository repo;

    @Autowired
    SearchRepository srepo;


    @GetMapping("/posts")
    public List<Post> getAllPosts(){
        return repo.findAll();
    }

    @GetMapping("/posts/{text}")
        public List<Post> search(@PathVariable String text) {
        return srepo.findByText(text);
    }
}
