import { View, Text } from "react-native";
import MapView, { UrlTile, Marker } from "react-native-maps";
import React from "react";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

const Maps = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 28.6139,
        longitude: 77.209,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      <UrlTile
        urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maximumZ={19}
        flipY={false}
      />
      <Marker
        coordinate={{ latitude: 28.6139, longitude: 77.209 }}
        title="New Delhi"
      />
    </MapView>
  );
};

export default Maps;
