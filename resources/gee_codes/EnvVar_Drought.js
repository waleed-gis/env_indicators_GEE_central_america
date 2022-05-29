//  *********** SHP Import for 10 countries  ********************

var cri = ee.FeatureCollection("users/WaleedGIS/aoi_costRica_fiverr"),
    blz = ee.FeatureCollection("users/WaleedGIS/BLZ_adm0"),
    dom = ee.FeatureCollection("users/WaleedGIS/DOM_adm0"),
    gtm = ee.FeatureCollection("users/WaleedGIS/GTM_adm0"),
    hnd = ee.FeatureCollection("users/WaleedGIS/HND_adm0"),
    hti = ee.FeatureCollection("users/WaleedGIS/HTI_Adm0"),
    mex = ee.FeatureCollection("users/WaleedGIS/MEX_adm0"),
    nic = ee.FeatureCollection("users/WaleedGIS/NIC_adm0"),
    pan = ee.FeatureCollection("users/WaleedGIS/PAN_adm0"),
    slv = ee.FeatureCollection("users/WaleedGIS/SLV_adm0");
//*********************************************************


//  **************  Changing Variables  ***************
var aoi = cri
var startYear = 2018
var endYear = 2020
var nameDataset = 'pdsi'
var nameAOI = 'costa_rica'
var imgScale = 4638
var bandList = 'pdsi'

//  ***************************************************

// Importing dataset
var dataset = ee.ImageCollection('IDAHO_EPSCOR/TERRACLIMATE')
                  .select('pdsi')
                  .filterBounds(aoi);

Map.centerObject(aoi, 8)
var int_func = function(number) {
  return ee.Number(number).toInt();
};       
var year_list = ee.List.sequence(startYear,endYear);
var year = year_list.map(int_func)
print(year)
var year_func = function(y){
  var range = ee.Filter.calendarRange (y, y, 'year');
  return dataset.select(bandList).filter(range).mean().set ('Year', y)
};
var yearwise = ee.ImageCollection(year.map(year_func));
print (yearwise);

// Clip each image in image collection with aoi

var clip_func = function(i){
  return i.clip(aoi)
}

// Applying clipping function
var clipped_ic = yearwise.map(clip_func);
print(clipped_ic)
Map.addLayer(clipped_ic.first(), {min: 0, max: 0.4, palette: [
    '1a3678', '2955bc', '5699ff', '8dbae9', 'acd1ff', 'caebff', 'e5f9ff',
    'fdffb4', 'ffe6a2', 'ffc969', 'ffa12d', 'ff7c1f', 'ca531a', 'ff0000',
    'ab0000'
  ]}, nameDataset + ' First')

var ic_size = clipped_ic.size()
print('Clipped Image Collection Size to Export', ic_size)



// Automated export command to export all images at once
var batch = require('users/fitoprincipe/geetools:batch');
batch.Download.ImageCollection.toDrive(clipped_ic, 'GEE', {
                  name: nameAOI + '_' + nameDataset + '_' + '{Year}',
                  scale: imgScale, 
                  region: aoi, 
                  type: 'float'
  
})