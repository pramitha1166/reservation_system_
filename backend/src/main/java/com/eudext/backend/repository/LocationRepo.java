package com.eudext.backend.repository;

import com.eudext.backend.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepo extends JpaRepository<Location, Integer> {

}
