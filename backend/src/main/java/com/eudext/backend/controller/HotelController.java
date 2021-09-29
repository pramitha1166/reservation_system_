package com.eudext.backend.controller;

import com.eudext.backend.DTO.HotelDTO;
import com.eudext.backend.model.Hotel;
import com.eudext.backend.model.Location;
import com.eudext.backend.services.HotelService;
import com.eudext.backend.services.LocationService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/hotel")
public class HotelController {

    @Autowired
    HotelService hotelService;

    @Autowired
    LocationService locationService;

    @GetMapping("/getall")
    public ResponseEntity<Map<String, Object>> getAllHotels(
            @RequestParam(defaultValue = "0") int pageNo,
            @RequestParam(defaultValue = "10") int pageSize
    )
    {
        try{

            Page<Hotel> hotelPage = hotelService.getAllHotels(pageNo, pageSize);
            Map<String, Object> response = new HashMap<>();
            response.put("result", hotelPage.getContent());
            response.put("currentPage", hotelPage.getNumber());
            response.put("totalItems", hotelPage.getTotalElements());
            response.put("totalPages", hotelPage.getTotalPages());

            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/search")
    public ResponseEntity<Map<String, Object>> getAllBySearch(
            @RequestParam(defaultValue = "0") int pageNo,
            @RequestParam(defaultValue = "10") int pageSize,
            @RequestParam(defaultValue = "false") boolean airportShuttle,
            @RequestParam(defaultValue = "false") boolean bar,
            @RequestParam(defaultValue =  "false") boolean freeWifi,
            @RequestParam(defaultValue =  "false") boolean goodBreakFast,
            @RequestParam(defaultValue =  "false") boolean nonSmokingRooms,
            @RequestParam(defaultValue =  "false") boolean roomService,
            @RequestParam(defaultValue =  "false") boolean swimmingPool
    ) {
        try {

            Map<String, Object> response = new HashMap<>();
            List<Object> resultList = new ArrayList<>();

            if(freeWifi) {
                Page<Hotel> hotelPageFreeWifi = hotelService.findByFreeWifi(pageNo, pageSize);
                resultList.add(hotelPageFreeWifi.getContent());

            }

            if(airportShuttle) {
                Page<Hotel> hotelPageAirportShuttle = hotelService.findByAirPortShuttle(pageNo,pageSize);
                resultList.add(hotelPageAirportShuttle.getContent());
            }

            response.put("result", resultList);

            return new ResponseEntity<>(response, HttpStatus.OK);


        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/filter")
    public ResponseEntity<Map<String, Object>> getFilteredHotel(
            @RequestParam(defaultValue = "0") int pageNo,
            @RequestParam(defaultValue = "10") int pageSize,
            @RequestParam(defaultValue = "1") int numRooms,
            @RequestParam(defaultValue = "0") int numChild,
            @RequestParam(defaultValue = "1") int numAdults,
            @RequestParam int location_id
    ) {
        try{

            Map<String, Object> response = new HashMap<>();

            Location location = locationService.getLocationById(location_id);
            if(location==null) {
                response.put("result", new ArrayList<>());
            }else {
                Page<Hotel> hotelPage = hotelService.findHotelsByLocation(pageNo,pageSize,location);
                response.put("result",hotelPage.getContent());
                response.put("totalItems", hotelPage.getTotalElements());
                response.put("totalPages", hotelPage.getTotalPages());
                response.put("currentPage", hotelPage.getNumber());

            }

            return new ResponseEntity<>(response, HttpStatus.OK);

        }catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> saveHotel(@RequestBody @Autowired HotelDTO hotelDTO) {
        try{

            Hotel hotel = new Hotel();
            hotel.setName(hotelDTO.getName());
            hotel.setDescription(hotelDTO.getDescription());
            hotel.setBar(hotelDTO.isBar());
            hotel.setAirportShuttle(hotelDTO.isAirportShuttle());
            hotel.setGoodBreakFast(hotelDTO.isGoodBreakFast());
            hotel.setSwimmingPool(hotelDTO.isSwimmingPool());
            hotel.setFreeWifi(hotelDTO.isFreeWifi());
            hotel.setRoomService(hotelDTO.isRoomService());
            hotel.setNonSmokingRooms(hotelDTO.isNonSmokingRooms());

            Location location = locationService.getLocationById(hotelDTO.getLocation_id());
            hotel.setLocation(location);

            Hotel savedHotel = hotelService.saveHotel(hotel);

            Map<String, Object> response = new HashMap<>();
            response.put("saved", savedHotel);

            return new ResponseEntity<>(response, HttpStatus.CREATED);

        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getall_byroomcount")
    public ResponseEntity<Map<String, Object>> getAllHotelsByRoomCount(
            @RequestParam(defaultValue = "0") int pageNo,
            @RequestParam(defaultValue = "10") int pageSize,
            @RequestParam(defaultValue = "1") int room_count,
            @RequestParam(defaultValue = "1") int number_of_beds,
            @RequestParam int location_id
    ) {
        try{

            Map<String, Object> response = new HashMap<>();

            Location location = locationService.getLocationById(location_id);
            if(location==null) {
                response.put("result", new ArrayList<>());
            }else {
                Page<Hotel> hotelPage = hotelService.selectAllHotelsByRoomCount(room_count,number_of_beds,location,pageNo,pageSize);
                response.put("result",hotelPage.getContent());
                response.put("totalItems", hotelPage.getTotalElements());
                response.put("totalPages", hotelPage.getTotalPages());
                response.put("currentPage", hotelPage.getNumber());
            }

            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
