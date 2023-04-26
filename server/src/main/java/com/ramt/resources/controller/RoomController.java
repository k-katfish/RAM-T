package com.ramt.resources.controller;

import com.ramt.resources.model.Room;
import com.ramt.resources.service.RoomServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/room")
public class RoomController {

    @Autowired
    RoomServiceImpl roomServiceImpl;

    @PostMapping("/add")
    public void add(@RequestBody Room room) {
        roomServiceImpl.addRoom(room);
    }

    @GetMapping("/findAll")
    public List<Room> getAllRooms() {
        return roomServiceImpl.findRooms();
    }

    @GetMapping("/findById/{id}")
    public Room getRoomById(@PathVariable long id) {
        return roomServiceImpl.findRoomById(id);
    }

    @DeleteMapping("/delete")
    public void delete() {
        roomServiceImpl.clearRooms();
    }
}
