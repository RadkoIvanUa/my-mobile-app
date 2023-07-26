import React from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { styles } from "./StyledMapScreen";
import { Text } from "react-native";

const MapScreen = ({ route }) => {
  const location = route.params.location;

  return location.latitude !== 0 ? (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {location && (
          <Marker title="I am here" coordinate={location} description="Hello" />
        )}
      </MapView>
    </View>
  ) : (
    <Text style={{ textAlign: "center", fontSize: 20 }}>
      This photo without location
    </Text>
  );
};

export default MapScreen;
