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
var aoi = slv
var nameAOI = 'SLV'

var startYear = 2000
var endYear = 2020
var nameDataset = 'NTL'
var imgScale = 500
var bandList = 'avg_ntl'


//  ***************************************************
// Merging two datasets

// Preparing image collection for NTL
function renameFunc(i){
  return i.select('avg_vis').rename('avg_ntl')
}

function renameFunc2(i){
  return i.select('avg_rad').rename('avg_ntl')
}

var DMSP = ee.ImageCollection('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS')
                  .filter(ee.Filter.date('2000-01-01', '2014-01-01'))
                  .select('avg_vis')
                  .map(renameFunc)
    
var VIIRS = ee.ImageCollection('NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG')
                  .filter(ee.Filter.date('2014-01-01', '2021-01-01'))
                  .select('avg_rad')
                  .map(renameFunc2)

// Meging two datasets 
var merged_dataset = ee.ImageCollection(VIIRS.merge(DMSP))


// Importing dataset
var dataset = merged_dataset.filterBounds(aoi)

Map.centerObject(aoi, 8)
var int_func = function(number) {
  return ee.Number(number).toInt();
};       
var year_list = ee.List.sequence(startYear, endYear);
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
function mask_65(i){
  return (((i.gt(65)).multiply(65)).add((i.lte(65)).multiply(i))).copyProperties(i)
}
// Applying clipping function
var clipped_ic = yearwise.map(clip_func);
var clipped_ic = clipped_ic.map(mask_65)
print(clipped_ic)
Map.addLayer(clipped_ic.first(), {min: 0, max: 65}, 'LST First')

var ic_size = clipped_ic.size()
print('Clipped Image Collection Size to Export', ic_size)
var nBands = bandList.length
print('Bands Number', nBands)
// // Export all resulting images 
var nBands = bandList.length

// Automated export command to export all images at once
var batch = require('users/fitoprincipe/geetools:batch');
batch.Download.ImageCollection.toDrive(clipped_ic, 'GEE', {
                  name: nameAOI + '_' + nameDataset + '_' + '{Year}',
                  scale: imgScale, 
                  folder: 'Env_Indicators',
                  region: aoi, 
                  type: 'float'
  
});