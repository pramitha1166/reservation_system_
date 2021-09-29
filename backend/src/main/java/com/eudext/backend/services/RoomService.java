package com.eudext.backend.services;

import com.eudext.backend.model.Room;
import com.eudext.backend.repository.RoomRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoomService {

    @Autowired
    RoomRepo repo;

    public Room saveRoom(Room room) {
        return repo.save(room);
    }

}
