package com.pushkar.jobportal.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "jobposts")
public class Post {
    private String description;
    private String profile;
    private String experience;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String[] getTechnology() {
        return technology;
    }

    public void setTechnology(String[] technology) {
        this.technology = technology;
    }

    private String technology[];
}
