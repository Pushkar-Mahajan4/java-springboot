package com.pushkar.jobportal.controller;

import com.pushkar.jobportal.repository.PostRepository;
import com.pushkar.jobportal.model.Post;
import com.pushkar.jobportal.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController

public class Controller {

    @Autowired
    PostRepository repo;

    @Autowired
    SearchRepository srepo;

    @CrossOrigin("http://localhost:3000")
    @GetMapping("/posts")

    public List<Post> getAllPosts(){
        return repo.findAll();
    }


    @CrossOrigin("http://localhost:3000")
    @GetMapping("/posts/{text}")


    public List<Post> search(@PathVariable String text) {
        return srepo.findByText(text);
    }
}
