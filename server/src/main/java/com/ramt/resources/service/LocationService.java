package com.ramt.resources.service;

import com.ramt.resources.model.Location;

import java.util.ArrayList;

public interface LocationService {
    ArrayList<Location> findAllLocation();
    Location findAllLocationByID(long id);
    void addLocation();
    void deleteLocation(long id);
    void deleteAllData();
}
