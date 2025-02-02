var ChartUK5 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Coronavirus cases",
  
  "data": {"url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=region&metric=newCasesBySpecimenDate&format=csv", "format":{"type":"csv"}},
  
  "height":133.3,
  "width": 150,

  "config":{
    "background":"#FcFdFd"
  },
  
  "mark": {"type": "bar","point": false, "color":"goldenrod"},

  "transform": [
   
    {"filter": {
      "field": "date", 
      "range": [{"year": 2020, "month": "nov", "date": 1}, {"year": 2020, "month": "dec", "date": 30}] 
      }
      }
    
    ],

  
  "encoding": {
    "x": {
      "field": "date", 
      "type":"temporal", 
      "title":"Date"},
    "y": {
      "field": "newCasesBySpecimenDate", 
      "type": "quantitative", 
      "title":"New cases, past month)"},
    "facet": {
      "field": "areaName", 
      "type": "nominal", 
      "columns":2,
      "title": "Region"
    }
  }
};

vegaEmbed('#visUK5', ChartUK5);
