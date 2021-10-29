package com.eudext.backend.model;

import com.google.firebase.auth.FirebaseToken;

public class Credentials {

    private String type;
    private FirebaseToken decodedToken;
    private String token;

    public Credentials(String type, FirebaseToken decodedToken, String token) {
        this.type = type;
        this.decodedToken = decodedToken;
        this.token = token;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public FirebaseToken getDecodedToken() {
        return decodedToken;
    }

    public void setDecodedToken(FirebaseToken decodedToken) {
        this.decodedToken = decodedToken;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
