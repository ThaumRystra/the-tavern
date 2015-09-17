Meteor.startup(function() {
  GoogleMaps.load();
});

Template.advertMap.onCreated(function() {
	GoogleMaps.ready("advertMap", function(map) {
		// Add a marker to the map once it's ready
		var markers = [];
		Tracker.autorun(function(calc) {
			_.each(markers, function(marker) {
				marker.map = null;
			});
			markers = [];
      var bounds = new google.maps.LatLngBounds();
			Adverts.find().forEach(function(entity) {
        var point = new google.maps.LatLng(entity.location.lat, entity.location.lng);
        bounds.extend(point);
				markers.push(
					new google.maps.Marker({
						position: point,
						map: map.instance,
					})
				);
			});
      map.instance.fitBounds(bounds);
		});
	});
});

Template.advertMap.onRendered(function () {
  var map = this.find("google-map");
  map._updateMarkers();
});

Template.advertMap.helpers({
	mapOptions: function() {
		// Make sure the maps API has loaded
		if (GoogleMaps.loaded()) {
			// Map initialization options
			return {
				center: new google.maps.LatLng(-26.17370386032046, 28.127821683883667),
				zoom: 8,
			};
		}
	},
  adverts: function () {
    return Adverts.find();
  }
});
