package com.pushkar.jobportal.repository;

import com.mongodb.client.*;
import com.pushkar.jobportal.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;
import org.bson.Document;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


/*
 * Requires the MongoDB Java Driver.
 * https://mongodb.github.io/mongo-java-driver
 */


@Component
public class SearchImpl implements SearchRepository{

    @Autowired
    MongoClient client;

    @Autowired
    MongoConverter converter;

    @Override
    public List<Post> findByText(String text) {
        final List<Post> posts = new ArrayList<>();
        MongoDatabase database = client.getDatabase("jobportal");
        MongoCollection<Document> collection = database.getCollection("jobposts");

        AggregateIterable<Document> result = (AggregateIterable<Document>) collection.aggregate(Arrays.asList(new Document("$search",
                        new Document("text",
                                new Document("query", text)
                                        .append("path", Arrays.asList("technology", "profile", "description")))),
                new Document("$sort",
                        new Document("experience", 1L))));

        result.forEach( doc -> posts.add(converter.read(Post.class, doc)));
        return posts;
    }
}
