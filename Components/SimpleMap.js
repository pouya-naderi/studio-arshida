import React from "react";
import Image from "next/image";
import { useEffect } from "react";

export default function SimpleMap() {
  useEffect(() => {
    var map = L.map("map").setView([35.7076, 51.46883], 13);
    const Marker = L.marker([35.7076, 51.46883]).addTo(map);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "180px" }}></div>;
}
