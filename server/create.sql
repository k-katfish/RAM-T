create sequence locations_seq start with 1 increment by 50;
create table locations (id bigint not null, building_name varchar(255), building_street varchar(255), primary key (id)) engine=InnoDB;
create sequence locations_seq start with 1 increment by 50;
create table locations (id bigint not null, building_name varchar(255), building_street varchar(255), primary key (id)) engine=InnoDB;
create sequence locations_seq start with 1 increment by 50;
create table location_rooms (id bigint not null, location_id location_id, primary key (id)) engine=InnoDB;
create table locations (location_id location_id not null, location_address varchar(255), location_name varchar(255), primary key (location_id)) engine=InnoDB;
alter table if exists location_rooms add constraint FKp8h47nhjost416mx8joojmr4p foreign key (location_id) references locations (location_id);
