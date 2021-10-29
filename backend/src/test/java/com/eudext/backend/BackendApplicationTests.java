package com.eudext.backend;

import com.eudext.backend.controller.HotelController;
import com.eudext.backend.model.Hotel;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class BackendApplicationTests {

    @Autowired
    HotelController controller;

    @Test
    void contextLoads() {

        Assertions.assertEquals("aa", "aa");

    }

}
