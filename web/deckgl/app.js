const DATA_URL = 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/geojson/vancouver-blocks.json'

deck.GeoJsonLayer({
    id: 'geojson-layer',
    data=DATA_URL,
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    pointType: 'circle',
    lineWidthScale: 20,
    lineWidthMinPixels: 2,
    getFillColor: [160, 160, 180, 200],
    getLineColor: d => colorToRGBArray(d.properties.color),
    getPointRadius: 100,
    getLineWidth: 1,
    getElevation: 30
  });
