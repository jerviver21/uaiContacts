package uaiContacts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import uaiContacts.model.Place;
import uaiContacts.repository.PlaceRepository;

import com.google.common.collect.Lists;


@Service
@Transactional
public class PlaceService {
	
	@Autowired
	private PlaceRepository repository;
	
	
	public List<Place> findAll(){
		return Lists.newArrayList(repository.findAll());
	}
	
	public void save(Place place){
		repository.save(place);
	}
	
	@Secured("ROLE_ADMIN")
	public void delete(Integer id){
		repository.delete(id);
	}
	
	

	public PlaceRepository getRepository() {
		return repository;
	}

	public void setRepository(PlaceRepository repository) {
		this.repository = repository;
	}
	

}
