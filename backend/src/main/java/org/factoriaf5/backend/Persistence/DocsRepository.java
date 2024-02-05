package org.factoriaf5.backend.Persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface DocsRepository extends JpaRepository<Docs, Long> {

}