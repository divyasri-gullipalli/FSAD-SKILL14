package com.example.authbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.authbackend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}