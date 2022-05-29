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

var startYear = 2001
var endYear = 2019
var nameDataset = 'LULC'
var imgScale = 500
var bandList = 'LC_Type1'


//  ***************************************************
var dataset = ee.ImageCollection('MODIS/006/MCD12Q1')
                .select('LC_Type1')
                .filterBounds(aoi)

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
  var cropland = i.eq(12).add(i.eq(14))
  var mask = i.eq(13).add(cropland)
  return i.updateMask(mask).clip(aoi).copyProperties(i)
}

// Applying clipping function
var clipped_ic = yearwise.map(clip_func);
print(clipped_ic)
Map.addLayer(clipped_ic.first(), {min: 12, max: 13, palette: ['green', 'red']}, 'LST First')

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