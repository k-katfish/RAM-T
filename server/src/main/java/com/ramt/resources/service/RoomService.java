package com.ramt.resources.service;

import com.ramt.resources.model.Room;

import java.util.List;

public interface RoomService {
    List<Room> findRooms();
    Room findRoomById(long id);
    void addRoom(Room room);
    void deleteRoom(long id);
    void clearRooms();
}
