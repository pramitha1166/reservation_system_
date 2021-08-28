package com.eudext.backend.services;

import com.eudext.backend.DTO.HotelDTO;
import com.eudext.backend.model.Hotel;
import com.eudext.backend.repository.HotelRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class HotelService {

    @Autowired
    HotelRepo hotelRepo;

    public Page<Hotel> getAllHotels(int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        Page<Hotel> hotelPage = hotelRepo.findAll(pageable);
        return hotelPage;
    }

    public Hotel saveHotel(Hotel hotel) {
        return hotelRepo.save(hotel);
    }

}
