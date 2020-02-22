    package com.example.restservice;

    import org.springframework.data.repository.CrudRepository;

    import com.example.restservice.User;

    public interface UserRepository extends CrudRepository<User, Integer> {

    }
