package com.eudext.backend.DTO;

import com.eudext.backend.model.Location;
import org.springframework.stereotype.Component;

import javax.persistence.Column;
import javax.persistence.ManyToOne;

@Component
public class HotelDTO {

    private String name;
    private String description;
    private String image;

    private boolean swimmingPool;

    private boolean airportShuttle;

    private boolean freeWifi;

    private boolean nonSmokingRooms;

    private boolean bar;

    private boolean goodBreakFast;

    private boolean roomService;

    private int location_id;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public boolean isSwimmingPool() {
        return swimmingPool;
    }

    public void setSwimmingPool(boolean swimmingPool) {
        this.swimmingPool = swimmingPool;
    }

    public boolean isAirportShuttle() {
        return airportShuttle;
    }

    public void setAirportShuttle(boolean airportShuttle) {
        this.airportShuttle = airportShuttle;
    }

    public boolean isFreeWifi() {
        return freeWifi;
    }

    public void setFreeWifi(boolean freeWifi) {
        this.freeWifi = freeWifi;
    }

    public boolean isNonSmokingRooms() {
        return nonSmokingRooms;
    }

    public void setNonSmokingRooms(boolean nonSmokingRooms) {
        this.nonSmokingRooms = nonSmokingRooms;
    }

    public boolean isBar() {
        return bar;
    }

    public void setBar(boolean bar) {
        this.bar = bar;
    }

    public boolean isGoodBreakFast() {
        return goodBreakFast;
    }

    public void setGoodBreakFast(boolean goodBreakFast) {
        this.goodBreakFast = goodBreakFast;
    }

    public boolean isRoomService() {
        return roomService;
    }

    public void setRoomService(boolean roomService) {
        this.roomService = roomService;
    }

    public int getLocation_id() {
        return location_id;
    }

    public void setLocation_id(int location_id) {
        this.location_id = location_id;
    }

}
