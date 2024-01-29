package org.factoriaf5.backend.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DocsController {

    @GetMapping("/docs")
    public List<DocsResponse> getDocs() {
        return List.of();

    }

    @PostMapping("/docs")
    public void createDocs(@RequestBody DocsRequest docs) {
        System.out.println("recibido");
    }

}
