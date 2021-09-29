package com.eudext.backend.repository;

import com.eudext.backend.model.Hotel;
import com.eudext.backend.model.Location;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelRepo extends JpaRepository<Hotel, Long> {

    Page<Hotel> findByFreeWifiOrAirportShuttle(Pageable pageable,@Param("freeWifi") boolean freeWifi, @Param("airportShuttle") boolean airportShuttle);
    Page<Hotel> findAllByFreeWifiIsTrue(Pageable pageable);
    Page<Hotel> findAllByAirportShuttleIsTrue(Pageable pageable);
    Page<Hotel> findHotelsByLocation(Pageable pageable,Location location);

    @Query(value = "SELECT h FROM Hotel h where h.location=?3 and h.hotel_id in (select r.hotel from Room r where r.numberOfBeds > ?2 group by r.hotel having count(r.room_id) > ?1)")
    Page<Hotel> findAllHotelsByRoomCount(long count,int number_of_beds,Location location,Pageable pageable);
}
