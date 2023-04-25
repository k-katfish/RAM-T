package com.ramt.service;

import com.ramt.model.Building;

import java.util.ArrayList;

public interface BuildingService {
    ArrayList<Building> findAllBuilding();
    Building findAllBuildingByID(long id);
    void addBuilding();
    void deleteAllData();
}
