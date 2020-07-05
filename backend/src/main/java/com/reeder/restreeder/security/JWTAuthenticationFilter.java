package com.reeder.restreeder.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.reeder.restreeder.dto.user.model.UserDto;
import com.reeder.restreeder.model.user.User;
import com.reeder.restreeder.service.user.UserDetailsServiceImpl;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import static com.reeder.restreeder.security.SecurityConstants.*;


public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;
    private final UserDetailsServiceImpl userDetailsService;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager, UserDetailsServiceImpl userDetailsService) {
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            User credentials = new ObjectMapper().readValue(request.getInputStream(), User.class);

            return authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            credentials.getEmail(),
                            credentials.getPassword(),
                            new ArrayList<>()
                    )
            );
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication auth) {
        final org.springframework.security.core.userdetails.User authUser = (org.springframework.security.core.userdetails.User) auth.getPrincipal();
        String token = JWT.create()
                .withSubject(authUser.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .sign(Algorithm.HMAC512(SECRET.getBytes()));

        addTokenToHeader(response, token);
        addUserToBody(response);
    }

    private void addTokenToHeader(HttpServletResponse response, String token) {
        response.addHeader(HEADER_STRING, TOKEN_PREFIX + token);
    }

    private void addUserToBody(HttpServletResponse response) {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        final UserDto appUserDto = userDetailsService.getAuthUserDto();
        try {
            final String appUserDtoJson = new ObjectMapper().writeValueAsString(appUserDto);
            response.getWriter().write(appUserDtoJson);
            response.getWriter().flush();
        } catch(JsonProcessingException exception) {
            System.out.println("JSON EXCEPTION " + exception.getMessage());
        } catch(IOException exception) {
            System.out.println("EXCEPTION " + exception.getMessage());
        }
    }
}
