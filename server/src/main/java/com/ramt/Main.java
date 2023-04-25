package com.ramt;

import lombok.Getter;

import javax.naming.ConfigurationException;
import java.awt.*;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Main {
    private static String config_mariadb_JdbcURL;
    private static String config_mariadb_username;
    private static String config_mariadb_password;

    private static @Getter DatabaseConnector databaseConnector;

    public static void main(String[] args) throws ConfigurationException {
        if (!InitializeConfiguration()) throw new ConfigurationException("Unable to initialize configuration");
        if (!InitializeDatabaseConnector()) return;

        Application.main(args);
    }

    private static boolean InitializeConfiguration() {
        if (!initDatabaseConfig()) return false;
        return true;
    }

    private static boolean InitializeDatabaseConnector() {
        if (config_mariadb_JdbcURL == null || config_mariadb_username == null || config_mariadb_password == null) {
            System.out.println("Invalid MariaDB configuration detected");
            return false;
        }

        databaseConnector = new DatabaseConnector(config_mariadb_JdbcURL,config_mariadb_username,
                config_mariadb_password);

        config_mariadb_password = null;
        return true;
    }

    private static boolean initDatabaseConfig() {
        Properties dbConfig = new Properties();
        File file = new File(".");

        try {
            dbConfig.load(new FileInputStream(file.getAbsolutePath() + "/mariadb.properties"));
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }

        config_mariadb_JdbcURL = dbConfig.getProperty("JdbcURL");
        config_mariadb_username = dbConfig.getProperty("username");
        config_mariadb_password = dbConfig.getProperty("password");

        return true;
    }
}