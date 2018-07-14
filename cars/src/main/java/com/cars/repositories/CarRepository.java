package com.cars.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cars.models.Car;

public interface CarRepository extends JpaRepository<Car, Long> {

}
