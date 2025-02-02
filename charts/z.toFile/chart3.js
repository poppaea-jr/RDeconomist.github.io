var Chart3 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",

  "description": "Covid-19 data, from ECDC",

  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/vega/master/db_ecdc_wide.csv"
    },

"transform":[
    {"filter": {"field": "country", "oneOf": ["UK", "France", "Germany", "Portugal", "Spain", "Italy"]}}
    ],


  "encoding": {

    "x": {
      "field": "cases_cml", 
      "type": "quantitative",
      "axis": {
        "title": "Cases",
        "grid": true,
        "tickCount": 7,
        "labelOverlap":"greedy"
        },
      "scale":{}
      },

    "y": {
      "field": "deaths_cml", 
      "type": "quantitative",
      "axis": {
        "title": "Deaths",
        "grid": true
        },
      "xxscale": {"domain": [-0.05, 0.02]},
      "format": ".2f"
      },


    "color": {
      "field": "country", 
      "type": "nominal",
      "scale": {"scheme": "viridis"}
            },


    "tooltip": [
      {"field": "date2", "type": "temporal"},
      {"field": "country", "type": "nominal"}
      
    ]
  },

  "title": {
    "text": "COVID-19 - CASES AND DEATHS",
    "anchor": "start",
    "color": "black"
  },

  "config":{
    "background": "#FAFAFA"
  },
  "height": 400,  "width": 600,

  "mark": {
    "type": "point",
    "opacity": 0.5
  }
};
      vegaEmbed('#vis3', Chart3);