package com.pushkar.jobportal.controller;

import com.pushkar.jobportal.PostRepository;
import com.pushkar.jobportal.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class Controller {

    @Autowired
    PostRepository repo;


    @GetMapping("/posts")
    public List<Post> getAllPosts(){
        return repo.findAll();
    }
}
