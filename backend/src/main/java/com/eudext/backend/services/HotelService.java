package com.eudext.backend.services;

import com.eudext.backend.DTO.HotelDTO;
import com.eudext.backend.exceptions.ResourceNotFoundException;
import com.eudext.backend.model.Hotel;
import com.eudext.backend.model.Location;
import com.eudext.backend.repository.HotelRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.awt.*;

@Service
public class HotelService {

    @Autowired
    HotelRepo hotelRepo;

    public Page<Hotel> getAllHotels(int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        Page<Hotel> hotelPage = hotelRepo.findAll(pageable);
        return hotelPage;
    }

    public Hotel findHotelById(Long id) {
        return hotelRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Hotel not found with id of "+id));
    }

    public Hotel saveHotel(Hotel hotel) {
        return hotelRepo.save(hotel);
    }

    public Page<Hotel> findByFreeWifi(int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo,pageSize);
        //return hotelRepo.findByFreeWifiOrAirportShuttle(pageable,freeWifi, airportShuttle);
        return hotelRepo.findAllByFreeWifiIsTrue(pageable);
    }

    public Page<Hotel> findByAirPortShuttle(int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo,pageSize);
        return hotelRepo.findAllByAirportShuttleIsTrue(pageable);
    }

    public Page<Hotel> findHotelsByLocation(int pageNo, int pageSize, Location location) {
        Pageable pageable = PageRequest.of(pageNo,pageSize);
        return hotelRepo.findHotelsByLocation(pageable, location);
    }

    public Page<Hotel> selectAllHotelsByRoomCount(int count, int number_of_beds, Location location, int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo,pageSize);
        return hotelRepo.findAllHotelsByRoomCount(count, number_of_beds,location, pageable);
    }

}
