package com.eudext.backend.controller;

import com.eudext.backend.DTO.LocationDTO;
import com.eudext.backend.model.Location;
import com.eudext.backend.services.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/location")
public class LocationController {

    @Autowired
    LocationService locationService;

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> saveLocation(
            @RequestBody @Autowired LocationDTO locationDTO
            )
    {
        try{

            Location location = new Location();
            location.setCity(locationDTO.getCity());
            location.setCountry(locationDTO.getCountry());
            location.setState(locationDTO.getState());

            Location savedLocation = locationService.saveLocation(location);

            Map<String, Object> response = new HashMap<>();
            response.put("saved", savedLocation);

            return new ResponseEntity<>(response, HttpStatus.OK);

        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getall")
    public ResponseEntity<Map<String, Object>> getAllLocations() {
        try{

            List<Location> locationList = locationService.getAllLocations();
            Map<String, Object> response = new HashMap<>();
            response.put("result", locationList);
            response.put("total", locationList.size());

            return new ResponseEntity<>(response, HttpStatus.OK);

        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
