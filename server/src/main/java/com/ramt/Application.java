package com.ramt;


import com.ramt.resources.model.Location;
import com.ramt.resources.model.Room;
import com.ramt.resources.repository.LocationRepository;
import com.ramt.resources.repository.RoomRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;


@SpringBootApplication
public class Application {
    private static final Logger log = LoggerFactory.getLogger(Application.class);
    public static void main(String[] args){
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.mariadb.jdbc.Driver");
        dataSource.setUrl(Main.getConfig_mariadb_JdbcURL());
        dataSource.setUsername(Main.getConfig_mariadb_username());
        dataSource.setPassword(Main.getConfig_mariadb_password());

        return dataSource;
    }

    @Bean
    public CommandLineRunner mappingDemo(LocationRepository locationRepository, RoomRepository roomRepository) {
        return args -> {

            // create a new book
            Location location = new Location("Glover", "Glover Street");



            // save the book
            locationRepository.save(location);

            // create and save new pages
            roomRepository.save(new Room("Room 102", location));
            roomRepository.save(new Room("Room 303", location));
            roomRepository.save(new Room("Room 16", location));
        };
    }
}
