var Chart1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",

  "description": "Covid-19 data, from ECDC",

  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/vega/master/db_ecdc_wide.csv"
    },

"transform":[
    {"filter": {"field": "country", "oneOf": ["UK", "France", "Germany", "Portugal"]}}
    ],

  
  "encoding": {

    "x": {
      "field": "date2", 
      "type": "temporal",
      "axis": {
        "title": "Date",
        "grid": false,
        "tickCount": 7,
        "labelOverlap":"greedy"
        },
      "scale":{}
      },

    "y": {
      "field": "cases_ma7", 
      "type": "quantitative",
      "axis": {
        "title": "Cases",
        "grid": false
        },
      "xxscale": {"domain": [-0.05, 0.02]},
      "format": ".2f"
      },


    "color": {
      "field": "country", 
      "type": "nominal",
      "scale": {"scheme": "inferno"}
            },
            


    "tooltip": [
      {"field": "date2", "type": "temporal", "title": "Date"},
      {"field": "country", "type": "nominal", "title":"Country"},
      {"field": "cases_ma7", "type": "nominal", "title":"Cases 7-day avg", "format": ".0f"},
      {"field": "cases", "type": "nominal", "title":"Cases"}
      
    ]
  },


  "title": {
    "text": "COVID-19 - LIVE DATA TRACKER",
    "anchor": "start",
    "color": "black"
  },


  "config":{
    "background": "#FcFdFd"
  },


  "height": 400,
  "width": 600,


  "mark": {
    "type": "line",
    "interpolate": "", 
    "color": "red"
  }
};

vegaEmbed('#vis', Chart1);
