package com.eudext.backend.controller;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.UserRecord;
import io.netty.handler.codec.serialization.ObjectEncoder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @GetMapping("/setadmin")
    public ResponseEntity<Map<String, Object>> setAdmin(@RequestParam String email) {
        try {

            Map<String, Object> response = new HashMap<>();

            if(email==null) {
                return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
            }else {
                Map<String, Object> cliams = new HashMap<>();
                cliams.put("admin", true);
                UserRecord user = FirebaseAuth.getInstance().getUserByEmail(email);
                FirebaseAuth.getInstance().setCustomUserClaims(user.getUid(), cliams);

                response.put("result", "Admin added");
            }


            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
