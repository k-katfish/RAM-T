package com.ramt.resources.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "location_rooms")
public class Room {

    @Id
    private @Getter
    @Setter Long id;

    @ManyToOne
    @JoinColumn(name="location_id")
    private Location location;

}
