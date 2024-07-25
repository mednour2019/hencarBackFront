package services;

import java.util.List;

import entities.Location;

public interface LocationService {
void addLocation(Location l);
void updateLocation(Location l);
void deleteLocation(Location l);
Location getByid(int id);
List<Location>getAll();


}
