package com.eudext.backend.repository;

import com.eudext.backend.model.RoomImages;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomImageRepo extends JpaRepository<RoomImages, Long> {
}
