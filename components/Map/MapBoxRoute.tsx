import React from 'react'
import { Layer,Source } from 'react-map-gl/mapbox'


function MapBoxRoute(props:any) {
  return (
    <div>
        <Source type='geojson'
        data={{
            type:'Feature',
            geometry:
            {type:'LineString',coordinates: props.coordinates}
        }}
        >
        <Layer
        type='line'
        layout={{'line-join':'round','line-cap':'square'}}
        paint={{'line-color':'#0462d4','line-width':4}}
        />
        </Source>
    </div>
  )
}

export default MapBoxRoute