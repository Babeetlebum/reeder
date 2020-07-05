package com.reeder.restreeder.service.user;

import com.reeder.restreeder.dto.user.mapper.UserMapper;
import com.reeder.restreeder.dto.user.model.UserDto;
import com.reeder.restreeder.model.user.User;
import com.reeder.restreeder.repository.user.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import static java.util.Collections.emptyList;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private User appUser;

    public UserDetailsServiceImpl(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        this.appUser = userRepository.findByEmail(email);
        if (this.appUser == null) {
            throw new UsernameNotFoundException(email);
        }

        return new org.springframework.security.core.userdetails.User(this.appUser.getEmail(), this.appUser.getPassword(), emptyList());
    }

    public UserDto getAuthUserDto() {
        return this.userMapper.toDto(this.appUser);
    }
}
