import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.props.updateStep(3);

    this.state = {
      map: null,
      fitBounds: false,
      autocomplete: null,
      locations: [],
      activeMarker: null,
      infoWindow: null,
      placesService: null
    };
  }

  locationInput = React.createRef();

  mapInit = (mapProps, map) => {
    const { google } = mapProps;

    this.setState(state => {
      state.map = map;
      state.center = map.getCenter();
      state.placesService = new google.maps.places.PlacesService(
        this.state.map
      );
      return state;
    });

    this.state.map.addListener("zoom_changed", this.onZoomChanged);
    this.initAutocomplete(google);
    this.fetchPlaces();
  };

  initAutocomplete = google => {
    const autocomplete = new google.maps.places.Autocomplete(
      this.locationInput.current,
      {
        type: "locality"
      }
    );

    autocomplete.addListener("place_changed", this.onPlaceChanged);

    this.setState(state => {
      state.autocomplete = autocomplete;
      return state;
    });
  };

  fetchPlaces = () => {
    const bounds = this.state.map.getBounds();

    if (!bounds) {
      window.setTimeout(() => {
        this.fetchPlaces();
      }, 250);

      return false;
    }

    if (this.state.fitBounds === false) {
      this.state.map.fitBounds(bounds);
      this.setState(state => {
        state.fitBounds = true;
        return state;
      });
    }

    this.state.placesService.nearbySearch(
      {
        bounds,
        name: "Physio",
        type: "physiotherapist"
      },
      (results, status) => {
        const locations = results.map((result, index) => {
          let photo = null;

          if (result.photos && result.photos.length !== 0) {
            photo = result.photos[0].getUrl({ maxWidth: 100 });
          }

          return {
            index: index,
            location: result.geometry.location,
            name: result.name,
            address: result.vicinity,
            reference: result.reference,
            photo
          };
        });

        this.setState(state => {
          state.locations = locations;
          return state;
        });
      }
    );
  };

  onZoomChanged = () => {
    if (this.state.fitBounds === true) {
      this.fetchPlaces();
    }
  };

  onPlaceChanged = () => {
    var place = this.state.autocomplete.getPlace();

    if (place.geometry) {
      this.state.map.panTo(place.geometry.location);
      this.fetchPlaces();
    } else {
      this.locationInput.current.placeholder = "Enter a valid address";
    }
  };

  render() {
    return (
      <Fragment>
        <h2>Find close physiotherapists</h2>

        <Map
          className="google-map"
          google={this.props.google}
          zoom={15}
          initialCenter={{
            lat: 51.332074,
            lng: 12.37353
          }}
          style={{ width: "340px", height: "200px", position: "relative" }}
          onReady={this.mapInit}
        >
          {this.state.center !== null && (
            <Marker
              name={"Current location"}
              icon={{
                url: "/images/maps/marker-blue.png"
              }}
            />
          )}

          {this.state.locations.length !== 0 &&
            this.state.locations.map(result => {
              const position = {
                lat: result.location.lat(),
                lng: result.location.lng()
              };
              return (
                <Marker
                  name={result.name}
                  position={position}
                  key={result.reference}
                  label={{ text: (result.index + 1).toString() }}
                />
              );
            })}

          {this.state.infoWindow !== null && (
            <InfoWindow marker={this.state.activeMarker} visible={true}>
              <div>
                <h1>{this.state.infoWindow.title}</h1>
                <p>{this.state.infoWindow.text}</p>
              </div>
            </InfoWindow>
          )}
        </Map>

        <p>
          <input
            className="form-control"
            placeholder="Your location"
            ref={this.locationInput}
            defaultValue="Peterssteinweg 14, 04107 Leipzig"
          />
        </p>
        <ul className="map-places list-group">
          {this.state.locations.map(result => (
            <li className="list-group-item" key={result.reference}>
              <span className="number">{result.index + 1}</span>
              <strong>{result.name}</strong>
              <br />
              {result.address}
              <br />
            </li>
          ))}
        </ul>

        <br />

        <Link to="/4" className="btn btn-primary">
          What happens next? &nbsp;<i className="fa fa-arrow-right" />
        </Link>

        <br />
        <br />
      </Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCat_rojkjHmAY2GXq2-Qpkp5rF6n4Lgd4"
})(withRouter(Step3));
