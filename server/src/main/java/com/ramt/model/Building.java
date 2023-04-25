package com.ramt.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Entity
public class Building {

    // @ID This annotation specifies
    // the primary key of the entity.
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private @Getter @Setter String buildingName;
    private @Getter @Setter String buildingStreet;

    protected Building() {
        super();
    }
    public Building(String buildingName, String buildingStreet) {
        super();
        this.buildingName = buildingName;
        this.buildingStreet = buildingStreet;
    }


}