package com.ramt.resources.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "location_rooms")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private @Getter Long id;

    private @Getter @Setter String roomName;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "location_id", nullable = false)
    private Location location;


    public Room() {
        super();
    }

    public Room(String roomName, Location location) {
        super();
        this.roomName = roomName;
        this.location = location;
    }


}
