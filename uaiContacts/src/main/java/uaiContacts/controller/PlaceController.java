package uaiContacts.controller;


import java.util.List;
import java.util.Locale;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import uaiContacts.model.Place;
import uaiContacts.service.PlaceService;
import uaiContacts.vo.ContactListVO;


@Controller
@RequestMapping(value="/protected/places")
public class PlaceController {
	
	@Autowired
	PlaceService service;
	
	@RequestMapping(method=RequestMethod.GET)
	public ModelAndView welcome(){
		return new ModelAndView("placesList");
	}

	@RequestMapping(method=RequestMethod.GET, produces="application/json")
	public ResponseEntity<?> listAll(){
		return getAllPlaces();
	}
	
	@RequestMapping(method=RequestMethod.POST, produces="application/json")
	public ResponseEntity<?> create(@ModelAttribute("place") Place place){
		service.save(place);
		return getAllPlaces();
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.PUT, produces="application/json")
	public ResponseEntity<?> update(@PathVariable("id") int placeId, @RequestBody Place place){
		if(placeId != place.getId()){
			return new ResponseEntity<String>("bad request", HttpStatus.BAD_REQUEST);
			
		}
		service.save(place);
		return getAllPlaces();
	}
	
	
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE, produces="application/json")
	public ResponseEntity<?> delete(@PathVariable("id") int placeId){
		try {
			service.delete(placeId);
		} catch (AccessDeniedException e) {
			return new ResponseEntity<Object>(HttpStatus.FORBIDDEN);
		}
		
		
		return getAllPlaces();
	}
	
	@RequestMapping(value = "/{name}", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<?> search(@PathVariable("name") String name) {
		List<Place> places  = service.findByPhoneLike(name);
        return new ResponseEntity<List<Place>>(places, HttpStatus.OK);
    }
	
	
	
	public ResponseEntity<List<Place>> getAllPlaces(){
		System.out.println("Actualizad.... JVA 2015-01-10");
		List<Place> places = service.findAll();
		return new ResponseEntity<List<Place>>(places, HttpStatus.OK);
	}

}
