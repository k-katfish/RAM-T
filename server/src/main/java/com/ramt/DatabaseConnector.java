package com.ramt;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import javax.sql.DataSource;

public class DatabaseConnector {
    HikariDataSource dataSource;

    public DatabaseConnector(String JdbcUrl, String username, String password) {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(JdbcUrl);
        config.setUsername(username);
        config.setPassword(password);
        config.addDataSourceProperty("cachePrepStmts", "true");
        config.addDataSourceProperty("prepStmtCacheSize", "250");
        config.addDataSourceProperty("prepStmtCacheSqlLimit", "2048");

        dataSource = new HikariDataSource(config);
    }


    public void createTables() {

    }

    private void scuttleTables() {

    }






    public static void main(String[] args) {
        //DatabaseConnector dbc = new DatabaseConnector("");

    }
}
