package com.ramt.resources.repository;

import com.ramt.resources.model.Building;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface BuildingRepository extends JpaRepository<Building, Long> {
}