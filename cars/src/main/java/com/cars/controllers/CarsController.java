package com.cars.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import com.cars.models.Car;

@RestController
@RequestMapping("/api/v1/cars")
public class CarsController {
	
	@GetMapping
	public List<Car> list()
	{
		List<Car> cars = new ArrayList<>();
		
		return cars;
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Car car)
	{
		
	}
	
	@GetMapping("/{id}")
	public Car get(@PathVariable("id") long id)
	{
		return new Car();
	}

}
