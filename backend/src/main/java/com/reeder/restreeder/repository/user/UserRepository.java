    package com.reeder.restreeder.repository.user;

    import org.springframework.data.repository.CrudRepository;

    import com.reeder.restreeder.model.user.User;

    public interface UserRepository extends CrudRepository<User, Integer> {
        User findByEmail(String email);
        User findByEmailOrName(String email, String name);
        User findByName(String name);
    }
