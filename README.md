# Tangram Refill Style

**Refill** provides a high contrast, black & white basemap useful for data visualization. Give [OpenStreetMap](http://www.openstreetmap.org/) data a refined basemap skin using the [Tangram](http://github.com/tangrams/tangram) graphics library and Mapzen's versatile [Vector Tiles](https://mapzen.com/projects/vector-tiles/). 

Refill is a continuation of the [Toner](http://content.stamen.com/dotspotting_toner_cartography_available_for_download) style Geraldine started at [Stamen](http://stamen.com). With the GL capabilities of Tangram, detailed lines, patterns and building extrusions are further explored and elaborated upon from the previous Toner base-style. Toner was a style created at Stamen as part of their great [CityTracking](http://citytracking.org) project. Please use and adapt the open source scene file in your own projects!

**Looking for help?** There is a mini tutorial after the preview image below walking thru [Vector Tiles API key signup](https://github.com/tangrams/refill-style/blob/gh-pages/README.md#sign-up-for-a-mapzen-vector-tiles-api-key) and [building a Leaflet map](https://github.com/tangrams/refill-style/blob/gh-pages/README.md#building-a-leaflet-map-using-tangram) using Tangram and this repo's scene file.

### A family of styles with many flavours

Mapzen offers the Refill style in three flavors:

2. **Default** (this repo) - Some labels for streets, cities, water bodies, and some big parks with name only (no icons). No business labels. Good for data visualization overlays that need to provide some location context.
1. **[More labels](https://github.com/tangrams/refill-style-more-labels)** - Full set of labels, including high contrast icons highlighting OpenStreetMap business listing data.
3. **[No labels](https://github.com/tangrams/refill-style-no-labels)** - Just the lines and polygons, please. 

**Looking for a different style?** We offer a range of styles including [Cinnabar](https://github.com/tangrams/cinnabar-style) (colorful classic cartography) and [Zinc](https://github.com/tangrams/zinc-style) (soft gray cartography). 


**Live Refill demo:** http://tangrams.github.io/refill-style

![refill-preview](https://cloud.githubusercontent.com/assets/853051/11160181/87349950-8a1b-11e5-8559-5c6d95cb84d5.png)


## Developer resources

**So how do you actually use this stuff?** Tangram styles are called "scenes" and are written in YAML. The scene file (e.g.: [refill-style.yaml](https://github.com/tangrams/refill-style/blob/gh-pages/refill-style.yaml)) requires a vector tile source. To use Mapzen's vector tile service you must first obtain a free developer API key and update your scene file with that key. 

### Sign up for a Mapzen Vector Tiles API key

**Mapzen Vector Tiles are a free, shared tile service.** As such, there are generous limitations on requests to prevent individual users from degrading the overall system performance.

1. Go to https://mapzen.com/developers.
2. Sign in with your GitHub account. If you have not done this before, you need to agree to the terms first.
3. Create a new key for Vector Tiles, and optionally, give it a project name so you can remember the purpose of the key.
4. Keep the web page open so you can copy the key into your source code later.

### Building a Leaflet map using Tangram

Using Tangram and Mapzen's Vector tiles inside the popular [Leaflet](http://leafletjs.com) mapping framework is easy. We'll make it even easier soon to do this via a Leaflet [provider](https://github.com/leaflet-extras/leaflet-providers), but in the meantime...

1. Update your copy of the scene file on [line 428](https://github.com/tangrams/refill-style/blob/gh-pages/refill-style.yaml#L428) to reference the API key you created in Step 3 in the **Sign up** section above. 
`url:  //vector.mapzen.com/osm/all/{z}/{x}/{y}.topojson?api_key=vector-tiles-{your-api-key-here}`
2. Reference the [index-demo.html](index-demo.html) file in any of the style repos for how to configure Leaflet with Tangram and the scene file (e.g.: [Refill](http://github.com/tangrams/refill-style)). 
3. Looking for a more sophisticated implementation that includes basic search? The main [index.html](index.html) file has a more real world example.
4. Need help testing your map locally? See the README in each repo.
5. Wondering where to host your map? Make a public repo on Github (or fork ours!) and enjoy their [GitHub Pages](https://pages.github.com) to github.io magic dance.

### Tangram resources

1. [Procedural Cartography with Tangram](https://github.com/mapzen/presentations/tree/master/08-2015-JSGEO) Patricio's presentation notes from [JS.Geo](http://www.jsgeo.com).
2. [Walkthrough: Make a map with Tangram](https://mapzen.com/documentation/tangram/walkthrough/) by Rhonda on Mapzen's documentation team.

### To run locally

Want to modify the style to fit your needs? Clone or downloaded the repo locally. Then...

Start a web server in the repo's directory:

    python -m SimpleHTTPServer 8000
    
If that doesn't work, try:

    python -m http.server 8000
    
Then navigate to: [http://localhost:8000](http://localhost:8000), which loads the [index.html](index.html) file.


**You should be all set, happy mapping!** But please let us know at [hello@mapzen.com](mailto:hello@mapzen.com?subject=Help%20with%20style%20demo%3F) or via Twitter [@mapzen](http://twitter.com/mapzen) if you encounter any funk and we'll help you get up and running.

### See also:

* Blog post announcing this style...
