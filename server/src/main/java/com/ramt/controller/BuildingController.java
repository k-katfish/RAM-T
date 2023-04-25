package com.ramt.controller;

import com.ramt.model.Building;
import com.ramt.service.BuildingService;
import com.ramt.service.BuildingServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class BuildingController {

    @Autowired
    BuildingServiceImpl buildingServiceImpl;

    @PostMapping("/")
    public void add() {
        buildingServiceImpl.addBuilding();
    }

    @GetMapping("/findall")
    public ArrayList<Building> getAllBuildings() {
        return buildingServiceImpl.findAllBuilding();
    }

    @GetMapping("/findbyid/{id}")
    public Building getEmployeeUsingId(@PathVariable long id) {
        return buildingServiceImpl.findAllBuildingByID(id);
    }

    @DeleteMapping("/delete")
    public void delete() {
        buildingServiceImpl.deleteAllData();
    }
}
