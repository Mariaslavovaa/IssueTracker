package com.example.issue_tracker_backend.utils;

import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtTokenGenerator {

    private final int expirationTime = 86400000;

    // Private key for generating jwt tokens
    private final String jwtSecret = "exN9IOG6w0Bo8Mg7e6Y700R3Rt6ZvQ2TBocIKNpzLnev80BsA6bGmr0T6cXSFWuqexN9IOG6w0Bo8Mg7e6Y700R3Rt6ZvQ2TBocIKNpzLnev80BsA6bGmr0T6cXSFWuq";

    public String generate(Authentication auth) {
        UserDetails userDto = (UserDetails)auth.getPrincipal();

        return Jwts.builder().setSubject(userDto.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + expirationTime))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }

    public boolean validateJwtToken(String token) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
            return true;
        } catch (Exception e) {
            System.out.println("Invalid jwt token");
        }
        return false;
    }

    public String getUsernameFromToken(String token) {
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
    }
}
