"use client";

import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import {
  Mountain,
  MapPin,
  Plane,
  Building2,
  Sparkles,
  Footprints,
  Hotel,
  Trees,
} from "lucide-react";

// Fix for default marker icons in Next.js/Leaflet
const iconRetinaUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png";
const iconUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png";
const shadowUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

export type MarkerType =
  | "airports"
  | "cities"
  | "highlights"
  | "trekking"
  | "accommodation"
  | "nature"
  | "mountain"
  | "default";

export interface MapMarker {
  id: string;
  name: string;
  position: [number, number];
  description?: string;
  type?: MarkerType;
}

interface NepalMapProps {
  markers?: MapMarker[];
  selectedMarkerId?: string | null;
  onMarkerClick?: (marker: MapMarker) => void;
  onRegionClick?: (regionName: string) => void;
}

// Component to handle map movement
const MapController = ({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, {
      duration: 1.5,
      easeLinearity: 0.25,
    });
  }, [center, zoom, map]);
  return null;
};

const createCustomIcon = (type: string) => {
  let iconComponent;
  let bgColorClass = "bg-blue-600";

  // Enterprise color palette
  switch (type) {
    case "airports":
      iconComponent = <Plane className='w-3.5 h-3.5 text-white' />;
      bgColorClass = "bg-sky-600";
      break;
    case "cities":
      iconComponent = <Building2 className='w-3.5 h-3.5 text-white' />;
      bgColorClass = "bg-indigo-600";
      break;
    case "highlights":
      iconComponent = <Sparkles className='w-3.5 h-3.5 text-white' />;
      bgColorClass = "bg-amber-500";
      break;
    case "trekking":
      iconComponent = <Footprints className='w-3.5 h-3.5 text-white' />;
      bgColorClass = "bg-emerald-600";
      break;
    case "accommodation":
      iconComponent = <Hotel className='w-3.5 h-3.5 text-white' />;
      bgColorClass = "bg-rose-600";
      break;
    case "nature":
      iconComponent = <Trees className='w-3.5 h-3.5 text-white' />;
      bgColorClass = "bg-green-600";
      break;
    case "mountain":
      iconComponent = <Mountain className='w-3.5 h-3.5 text-white' />;
      bgColorClass = "bg-slate-700";
      break;
    default:
      iconComponent = <MapPin className='w-3.5 h-3.5 text-white' />;
      bgColorClass = "bg-primary"; // Using the primary red from globals
  }

  const html = renderToStaticMarkup(
    <div
      className={`p-1.5 rounded-full shadow-md border-2 border-white ${bgColorClass} transition-transform hover:scale-110`}
    >
      {iconComponent}
    </div>
  );

  return L.divIcon({
    html: html,
    className: "custom-marker-icon",
    iconSize: [28, 28], // Smaller size
    iconAnchor: [14, 14], // Center anchor
    popupAnchor: [0, -14],
  });
};

const NepalMap = ({
  markers = [],
  selectedMarkerId,
  onMarkerClick,
  onRegionClick,
}: NepalMapProps) => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([
    28.3949, 84.124,
  ]);
  const [mapZoom, setMapZoom] = useState(7);

  useEffect(() => {
    fetch("/province.geojson")
      .then((res) => res.json())
      .then((data) => setGeoJsonData(data))
      .catch((err) => console.error("Error loading GeoJSON:", err));
  }, []);

  useEffect(() => {
    if (selectedMarkerId) {
      const marker = markers.find((m) => m.id === selectedMarkerId);
      if (marker) {
        setMapCenter(marker.position);
        setMapZoom(10);
      }
    }
  }, [selectedMarkerId, markers]);

  const onEachFeature = (feature: any, layer: L.Layer) => {
    if (feature.properties && feature.properties.PR_NAME) {
      // layer.bindPopup(feature.properties.PR_NAME); // Optional: disable default popup if we use external UI
      layer.on({
        click: (e) => {
          L.DomEvent.stopPropagation(e); // Prevent map click
          if (onRegionClick) {
            onRegionClick(feature.properties.PR_NAME);
          }
        },
        mouseover: (e) => {
          const layer = e.target;
          layer.setStyle({
            fillOpacity: 0.2,
            weight: 2,
            color: "#d4344f", // Primary Red highlight
            fillColor: "#d4344f",
          });
        },
        mouseout: (e) => {
          const layer = e.target;
          layer.setStyle({
            fillOpacity: 0.05,
            weight: 0.5,
            color: "#64748b", // Return to subtle slate
            fillColor: "#cbd5e1",
          });
        },
      });
    }
  };

  return (
    <div className='h-full w-full z-0 relative bg-[#050505]'>
      <MapContainer
        center={[28.3949, 84.124]}
        zoom={7}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%", background: "transparent" }}
        zoomControl={false}
      >
        <MapController center={mapCenter} zoom={mapZoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url='https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png'
        />
        {geoJsonData && (
          <GeoJSON
            data={geoJsonData}
            style={() => ({
              color: "#64748b", // Slate-500 for visible boundaries
              weight: 0.5,
              fillColor: "#cbd5e1",
              fillOpacity: 0.05,
            })}
            onEachFeature={onEachFeature}
          />
        )}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            icon={createCustomIcon(marker.type || "default")}
            eventHandlers={{
              click: () => onMarkerClick && onMarkerClick(marker),
            }}
          >
            <Popup className='custom-popup'>
              <div className='p-1 min-w-[150px]'>
                <h3 className='font-bold text-sm text-gray-900'>
                  {marker.name}
                </h3>
                {marker.description && (
                  <p className='text-xs mt-1 text-gray-600'>
                    {marker.description}
                  </p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default NepalMap;
