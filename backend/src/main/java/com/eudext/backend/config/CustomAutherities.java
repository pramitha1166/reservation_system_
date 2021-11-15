package com.eudext.backend.config;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

public class CustomAutherities implements GrantedAuthority {

    private String authority;

    CustomAutherities(String authority) {
        this.authority = authority;
    }

    @Override
    public String getAuthority() {
        return authority;
    }
}
