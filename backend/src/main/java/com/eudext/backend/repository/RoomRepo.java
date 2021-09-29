package com.eudext.backend.repository;

import com.eudext.backend.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepo extends JpaRepository<Room, Long> {

    Room findRoomByNumberOfBedsGreaterThanEqual(int numOfBeds);
    //Room
}
