Schemas.Advert = new SimpleSchema({
  owner: {
    type: String,
  },
  _owner: {
    type: Object,
    optional: true,
  },
  "_owner.name": {
    type: String,
  },
  name: {
    type: String,
    optional: true,
    trim: false,
  },
  description: {
    type: String,
    optional: true,
  },
  type: {
    type: String,
    allowedValues: ["player", "game"],
  },
  systems: {
    type: [String],
  },
  location: {
    type: Object,
    optional: true,
    autoform: {
      type: "map",
      afFieldInput: {
        width: "400px",
        height: "400px",
        searchBox: true,
        geolocation: true,
      },
    },
  },
  "location.lat": {
    type: Number,
    decimal: true,
  },
  "location.lng": {
    type: Number,
    decimal: true,
  },
  expires: {
    type: Date,
  },
});

Adverts = new Mongo.Collection("adverts");
Adverts.attachSchema(Schemas.Advert);
