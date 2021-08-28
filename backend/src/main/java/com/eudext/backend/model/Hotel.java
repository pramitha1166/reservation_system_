package com.eudext.backend.model;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long hotel_id;

    private String name;
    private String description;
    private String image;

    @Column(columnDefinition = "boolean default false")
    private boolean swimmingPool;

    @Column(columnDefinition = "boolean default false")
    private boolean airportShuttle;

    @Column(columnDefinition = "boolean default false")
    private boolean freeWifi;

    @Column(columnDefinition = "boolean default false")
    private boolean nonSmokingRooms;

    @Column(columnDefinition = "boolean default false")
    private boolean bar;

    @Column(columnDefinition = "boolean default false")
    private boolean goodBreakFast;

    @Column(columnDefinition = "boolean default false")
    private boolean roomService;

    @ManyToOne
    private Location location;

    public Long getHotel_id() {
        return hotel_id;
    }

    public void setHotel_id(Long hotel_id) {
        this.hotel_id = hotel_id;
    }

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

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "Hotel{" +
                "hotel_id=" + hotel_id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", image='" + image + '\'' +
                ", swimmingPool=" + swimmingPool +
                ", airportShuttle=" + airportShuttle +
                ", freeWifi=" + freeWifi +
                ", nonSmokingRooms=" + nonSmokingRooms +
                ", bar=" + bar +
                ", goodBreakFast=" + goodBreakFast +
                ", roomService=" + roomService +
                ", location=" + location +
                '}';
    }
}
