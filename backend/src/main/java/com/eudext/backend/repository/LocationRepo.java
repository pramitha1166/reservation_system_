package com.eudext.backend.repository;

import com.eudext.backend.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationRepo extends JpaRepository<Location, Integer> {
    List<Location> findLocationsByCityOrCountryOrState(String city, String country, String state);
    List<Location> findByCityContainingOrCountryContainingOrStateContaining(String city, String country, String state);
}
