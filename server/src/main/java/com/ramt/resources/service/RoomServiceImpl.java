package com.ramt.resources.service;

import com.ramt.resources.model.Location;
import com.ramt.resources.model.Room;
import com.ramt.resources.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RoomServiceImpl implements RoomService{

    @Autowired
    RoomRepository roomRepository;

    @Override
    public List<Room> findRooms() {
        return roomRepository.findAll();
    }

    @Override
    public Room findRoomById(long id) {
        Optional<Room> opt = roomRepository.findById(id);
        return opt.orElse(null);
    }

    @Override
    public void addRoom(Room room) {
        roomRepository.save(room);
    }

    @Override
    public void deleteRoom(long id) {
        roomRepository.deleteById(id);
    }

    @Override
    public void clearRooms() {
        roomRepository.deleteAll();
    }
}
