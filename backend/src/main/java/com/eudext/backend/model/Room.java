package com.eudext.backend.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long room_id;

    private int numberOfBeds;

    @OneToMany(mappedBy = "room")
    private List<RoomImages> roomImages;

    @ManyToOne
    private Hotel hotel;

    public Long getRoom_id() {
        return room_id;
    }

    public void setRoom_id(Long room_id) {
        this.room_id = room_id;
    }

    public int getNumberOfBeds() {
        return numberOfBeds;
    }

    public void setNumberOfBeds(int numberOfBeds) {
        this.numberOfBeds = numberOfBeds;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }

    @Override
    public String toString() {
        return "Room{" +
                "room_id=" + room_id +
                ", numberOfBeds=" + numberOfBeds +
                ", hotel=" + hotel +
                '}';
    }
}
