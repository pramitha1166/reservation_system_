package com.eudext.backend.config;

import com.eudext.backend.model.User;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import com.google.protobuf.MapEntry;
import org.hibernate.mapping.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.eudext.backend.model.Credentials;
import org.springframework.web.server.ResponseStatusException;

@Component
public class SecurityFilter extends OncePerRequestFilter {

    @Autowired
    SecurityProperties securityProperties;



    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        verifyToken(httpServletRequest);
        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }

    private void verifyToken(HttpServletRequest request) {
        //String session = null;
        FirebaseToken decodedToken = null;
        //Credentials type = null;

        final String requestedToken = request.getHeader("Token");
        System.out.println("requested token: "+requestedToken);
        if(requestedToken != null) {
            try {
                decodedToken = FirebaseAuth.getInstance().verifyIdToken(requestedToken);
                System.out.println("decoded token: "+decodedToken);
                System.out.println(decodedToken.getClaims());

                String uid = decodedToken.getUid();
                String username = decodedToken.getName();
                String email = decodedToken.getEmail();

                User user = new User(uid,username,email);

                if(uid != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                    List<GrantedAuthority> authorityList = new ArrayList<GrantedAuthority>();

                    Map<String, Object> firebaseAuthrities = decodedToken.getClaims();
                    System.out.println("claims: "+decodedToken.getClaims().get("admin"));
                    for(Map.Entry<String, Object> entry: firebaseAuthrities.entrySet()) {
                        System.out.println("authorities: "+entry.getValue());
                    }

                    authorityList.add(new CustomAutherities("admin"));

                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(user, new Credentials(null,decodedToken,requestedToken),authorityList);
                    System.out.println("usernamePasswordAuthenticationToken: "+ usernamePasswordAuthenticationToken);
                    //usernamePasswordAuthenticationToken.setAuthenticated(true);
                    usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                }

            } catch (FirebaseAuthException e) {
                e.printStackTrace();
               // throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Error! " + e.toString());
            }

        }else {
            //throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Missing token");
        }

    }
}
