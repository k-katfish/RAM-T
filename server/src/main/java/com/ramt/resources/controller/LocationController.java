package com.ramt.resources.controller;

import com.ramt.resources.model.Location;
import com.ramt.resources.service.LocationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/location")
public class LocationController {

    @Autowired
    LocationServiceImpl locationServiceImpl;

    @GetMapping("/")
    public ArrayList<Location> getAllLocations() {
        return locationServiceImpl.findAllLocation();
    }

    @PostMapping("/")
    public void addLocation(@RequestBody Location location) {
        locationServiceImpl.addLocation();
    }



    @GetMapping("/{id}")
    public Location getLocationById(@PathVariable long id) {
        return locationServiceImpl.findAllLocationByID(id);
    }

    @DeleteMapping("/{id}")
    public void deleteLocation(@PathVariable long id) {
        locationServiceImpl.deleteLocation(id);
    }
}
