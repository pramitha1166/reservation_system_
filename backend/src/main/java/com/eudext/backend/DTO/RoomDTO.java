package com.eudext.backend.DTO;

import org.springframework.stereotype.Component;

@Component
public class RoomDTO {

    private int numberOfBeds;
    private Long hotelId;

    public int getNumberOfBeds() {
        return numberOfBeds;
    }

    public void setNumberOfBeds(int numberOfBeds) {
        this.numberOfBeds = numberOfBeds;
    }

    public Long getHotelId() {
        return hotelId;
    }

    public void setHotelId(Long hotelId) {
        this.hotelId = hotelId;
    }
}
