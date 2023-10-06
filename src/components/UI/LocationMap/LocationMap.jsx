import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import classes from "./LocationMap.module.scss";
import pointImage from '../../../assets/image/icon/point.png';

const LocationMap = () => {
    const defaultState = {
        center: [55.665105182919305, 37.48153527525194],
        zoom: 17,
    };
    const point = {
        coordinates: [55.66500208883866, 37.48152454641589],
        content: "Fib Pasta Bar",
        layout: pointImage
    };
    return (
        <div className={classes.mapContainer}>
            <YMaps>
                <Map className={classes.map} defaultState={defaultState}>
                    <Placemark
                        geometry={point.coordinates}
                        properties={{ iconCaption: point.content, iconImage: point.layout }} />
                </Map>
            </YMaps>
        </div>
    );
};

export default LocationMap;