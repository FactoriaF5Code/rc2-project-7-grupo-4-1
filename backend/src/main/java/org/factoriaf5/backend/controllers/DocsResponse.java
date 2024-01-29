package org.factoriaf5.backend.controllers;

public class DocsResponse {
    private Long id;
    private String title;
    private String url;
    private String comments;

    public DocsResponse(Long id, String title, String url, String comments) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.comments = comments;
    }

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

}
