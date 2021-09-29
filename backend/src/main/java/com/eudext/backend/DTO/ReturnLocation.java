package com.eudext.backend.DTO;

import org.springframework.stereotype.Component;

@Component
public class ReturnLocation {

    private int id;
    private String location;

    public ReturnLocation() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
