package com.ramt.resources.service;

import com.ramt.resources.model.Location;
import com.ramt.resources.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class LocationServiceImpl implements LocationService {
    @Autowired
    LocationRepository locationRepository;

    @Override
    public ArrayList<Location> findAllLocation() {
        return (ArrayList<Location>) locationRepository.findAll();
    }

    @Override
    public Location findAllLocationByID(long id) {
        Optional<Location> opt = locationRepository.findById(id);
        if (opt.isPresent())
            return opt.get();
        else
            return null;
    }

    @Override
    public void addLocation() {
        ArrayList<Location> emp = new ArrayList<>();
        emp.add(new Location("Lucknow", "Shubham"));
        emp.add(new Location("Delhi", "Puneet"));
        emp.add(new Location("Pune", "Abhay"));
        emp.add(new Location("Noida", "Anurag"));
        locationRepository.saveAll(emp);
    }

    @Override
    public void deleteLocation(long id) {
        locationRepository.deleteById(id);
    }

    @Override
    public void deleteAllData() {
        locationRepository.deleteAll();
    }
}