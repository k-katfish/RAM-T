package com.ramt.resources.service;

import com.ramt.resources.model.Building;

import java.util.ArrayList;

public interface BuildingService {
    ArrayList<Building> findAllBuilding();
    Building findAllBuildingByID(long id);
    void addBuilding();
    void deleteAllData();
}
