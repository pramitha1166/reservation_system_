package com.eudext.backend.model;

import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
public class RoomImages {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long image_id;

    @NotNull
    private String image;

    @ManyToOne
    private Room room;

    public Long getImage_id() {
        return image_id;
    }

    public void setImage_id(Long image_id) {
        this.image_id = image_id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    @Override
    public String toString() {
        return "RoomImages{" +
                "image_id=" + image_id +
                ", image='" + image + '\'' +
                ", room=" + room +
                '}';
    }
}
