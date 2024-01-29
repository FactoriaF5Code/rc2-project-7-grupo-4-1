package org.factoriaf5.backend.controllers;

public class DocsRequest {
    private Long id;
    private String title;
    private String url;
    private String comments;

    public DocsRequest(Long id, String title, String url, String comments) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.comments = comments;

    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

}
