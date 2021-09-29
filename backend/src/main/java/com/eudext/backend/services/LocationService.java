package com.eudext.backend.services;

import com.eudext.backend.exceptions.ResourceNotFoundException;
import com.eudext.backend.model.Location;
import com.eudext.backend.repository.LocationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {

    @Autowired
    LocationRepo locationRepo;

    public Location saveLocation(Location location) {
        return locationRepo.save(location);
    }

    public List<Location> getAllLocations() {
        return locationRepo.findAll();
    }

    public Location getLocationById(int id) {
        return locationRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Location not found with id of "+ id));
    }

    public List<Location> getLocationByLocation(String city, String country, String state) {
        return locationRepo.findByCityContainingOrCountryContainingOrStateContaining(city, country, state);
    }
}
