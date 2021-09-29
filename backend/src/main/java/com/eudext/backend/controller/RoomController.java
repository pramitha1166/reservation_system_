package com.eudext.backend.controller;

import com.eudext.backend.DTO.RoomDTO;
import com.eudext.backend.model.Hotel;
import com.eudext.backend.model.Room;
import com.eudext.backend.services.HotelService;
import com.eudext.backend.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4201")
@RequestMapping("/api/room")
public class RoomController {

    @Autowired
    RoomService roomService;

    @Autowired
    HotelService hotelService;

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> saveRoom(@RequestBody @Autowired RoomDTO roomDTO) {
        try{

            Map<String, Object> response = new HashMap<>();

            Hotel hotel = hotelService.findHotelById(roomDTO.getHotelId());
            Room room = new Room();
            room.setHotel(hotel);
            room.setNumberOfBeds(roomDTO.getNumberOfBeds());

            Room savedRoom = roomService.saveRoom(room);

            response.put("saved", savedRoom);

            return new ResponseEntity(response, HttpStatus.CREATED);

        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
