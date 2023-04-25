package com.ramt.resources.service;

import com.ramt.resources.model.Building;
import com.ramt.resources.repository.BuildingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class BuildingServiceImpl implements BuildingService {
    @Autowired
    BuildingRepository buildingRepository;

    @Override
    public ArrayList<Building> findAllBuilding() {
        return (ArrayList<Building>) buildingRepository.findAll();
    }

    @Override
    public Building findAllBuildingByID(long id) {
        Optional<Building> opt = buildingRepository.findById(id);
        if (opt.isPresent())
            return opt.get();
        else
            return null;
    }

    @Override
    public void addBuilding() {
        ArrayList<Building> emp = new ArrayList<Building>();
        emp.add(new Building("Lucknow", "Shubham"));
        emp.add(new Building("Delhi", "Puneet"));
        emp.add(new Building("Pune", "Abhay"));
        emp.add(new Building("Noida", "Anurag"));
        for (Building building : emp) {
            buildingRepository.save(building);
        }
    }

    @Override
    public void deleteAllData() {
        buildingRepository.deleteAll();
    }
}