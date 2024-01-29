package org.factoriaf5.backend.Persistence;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "docs")
public class Docs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String title;
    String url;
    String comments;

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getUrl() {
        return url;
    }

    public String getComments() {
        return comments;
    }

    public Docs() {

    }

    public Docs(Long id, String title, String url, String comments) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.comments = comments;
    }

}
