package uaiContacts.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import uaiContacts.model.Place;
									 
public interface PlaceRepository extends CrudRepository<Place, Integer>{
	public List<Place> findByPhoneLike(String phone);

}
