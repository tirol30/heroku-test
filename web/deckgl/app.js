new deck.DeckGL({
  mapStyle: 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json',
  initialViewState: {
    longitude: -122.45,
    latitude: 37.8,
    zoom: 15
  },
  controller: true,
  layers: [
    new deck.ScatterplotLayer({
      data: [
        {position: [-122.45, 37.8], color: [255, 0, 0], radius: 100}
      ],
      getColor: d => d.color,
      getRadius: d => d.radius
    })
  ]
});
