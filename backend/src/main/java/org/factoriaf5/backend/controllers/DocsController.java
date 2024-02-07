package org.factoriaf5.backend.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.factoriaf5.backend.Persistence.Docs;
import org.factoriaf5.backend.Persistence.DocsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class DocsController {

    @GetMapping("/docs")
    public List<DocsResponse> getDocs() {
        List<DocsResponse> docs = new ArrayList<DocsResponse>();
        List<Docs> docsInDatabase = repository.findAll();
        for (Docs doc : docsInDatabase) {
            docs.add(new DocsResponse(doc.getId(), doc.getTitle(), doc.getUrl(), doc.getComments()));
        }
        return docs;
    }

    @PostMapping("/docs")
    public DocsResponse createDocs(@RequestBody DocsRequest request) {
        Docs docs = new Docs(request.getId(), request.getTitle(), request.getUrl(), request.getComments());
        Docs saveDocs = repository.save(docs);
        System.out.println("recibido");

        return new DocsResponse(saveDocs.getId(), saveDocs.getTitle(), saveDocs.getUrl(), saveDocs.getComments());
    }

    private DocsRepository repository;

    public DocsController(@Autowired DocsRepository repository) {
        this.repository = repository;
    }

    @DeleteMapping("/docs/{id}")
    public ResponseEntity<DocsResponse> deleteDocs(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/docs/{id}")
    public ResponseEntity<DocsResponse> putUpdateDocs(@PathVariable Long id, @RequestBody DocsRequest request) {
        Optional<Docs> optionalDocs = repository.findById(id);
        if (optionalDocs.isPresent()) {
            Docs existingDocs = optionalDocs.get();
            existingDocs.setTitle(request.getTitle());
            existingDocs.setUrl(request.getUrl());
            existingDocs.setComments(request.getComments());
            repository.save(existingDocs);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}