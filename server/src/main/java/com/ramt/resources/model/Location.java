package com.ramt.resources.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "locations")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="location_id")
    private @Getter long id;

    private @Getter @Setter String locationName;
    private @Getter @Setter String locationAddress;

    @OneToMany(mappedBy = "location", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private @Getter List<Room> rooms;

    protected Location() {
        super();
    }

    public Location(String locationName, String locationAddress) {
        super();
        this.locationName = locationName;
        this.locationAddress = locationAddress;
        rooms = new ArrayList<>();
    }
}