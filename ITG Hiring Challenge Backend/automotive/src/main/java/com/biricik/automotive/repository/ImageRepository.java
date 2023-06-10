package com.biricik.automotive.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biricik.automotive.model.Image;


public interface ImageRepository extends JpaRepository<Image, Integer> {

}
