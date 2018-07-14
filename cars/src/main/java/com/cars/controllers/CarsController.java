package com.cars.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import com.cars.models.Car;
import com.cars.repositories.CarRepository;

@RestController
@RequestMapping("/api/v1/cars")
public class CarsController {
	
	@Autowired
	private CarRepository carRepository; 
	
	@GetMapping
	public List<Car> list()
	{
		return carRepository.findAll();
				
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Car car)
	{
		carRepository.save(car);
	}
	
	@GetMapping("/{id}")
	public Car get(@PathVariable("id") long id)
	{
		return carRepository.getOne(id);
	}

}
