# Environmental Indicators for Central America using Google Earth Engine
---

The reporsitory contains source codes, and materials for preparing environmental variables using GEE



### Environmental variables prepared are:

    a) Agricultural Change
    b) Climate Change
    c) Drought
    d) Water Scarcity
    e) Deforerstation
    f) Population
    g) Night Time Light
    h) Land use land cover

### Countries shapefiles, for which Env. variables are prepared are:

1. [Belize (BLZ)](resources\adm0_shapefiles\Belize_BLZ)
2. [Costa Rica (CRI)](resources\adm0_shapefiles\CostaRica_CRI)
3. [Dominican Republic (DOM)](resources\adm0_shapefiles\DominicanRepublic_DOM)
4. [EL Salvador (SLV)](resources\adm0_shapefiles\ElSalvador_SLV)
5. [Guatemala (GTM)](resources\adm0_shapefiles\Guatemala_GTM)
6. [Haiti (HTI)](resources\adm0_shapefiles\Haiti_HTI)
7. [Honduras (HND)](resources\adm0_shapefiles\Honduras_HND)
8. [Mexico (MEX)](resources\adm0_shapefiles\Mexico_MEX)
9. [Nicargua (NIC)](resources\adm0_shapefiles\Nicaragua_NIC)
10. [Panama (PAN)](resources\adm0_shapefiles\Panama_PAN)

## Deatils of Environmental Variables used in this project:

     a) Agricultural Change

- **Name:** UN FAO Drained Organic Soils Area (Annual)
- **Availability timeperiod:** 1992-2017
- **Resolution:** 927.67m
- **Band used:** cropland
- **Dataset link:** https://developers.google.com/earth-engine/datasets/catalog/FAO_GHG_1_DROSA_A
- **GEE Code:** 

**Description:** 

Organic soils develop in wet soil ecosystems. They include tropical and boreal peatlands, high-latitude bogs, ferns, and mires. 
Organic soils cover globally a mere 3 percent of the terrestrial land area but represent up to 30 percent of the total soil carbon, thus playing an important role in maintaining the earth’s carbon balance. 
Agriculture is a major cause of drainage of organic soils around the world. Drainage exposes to aerobic conditions the organic matter of organic soils that oxidizes releasing large amounts of harmful greenhouse gases (GHG) to the atmosphere. DROSA-A and DROSE-A are the basis for country and regional statistics on drained organic soils disseminated in three FAOSTAT datasets (Cultivation of Organic Soils; Cropland; and Grassland).

     b) Climate Change

- **Name:** ERA5 Daily Aggregates - Latest Climate Reanalysis Produced by ECMWF / Copernicus Climate Change Service
- **Availability timeperiod:** 1979-2020
- **Resolution:** 27830m
- **Band used:** Mean 2m Air Temperature
- **Dataset link:** https://developers.google.com/earth-engine/datasets/catalog/ECMWF_ERA5_DAILY
- **GEE Code:** 

**Description:** 

ERA5 is the fifth generation ECMWF atmospheric reanalysis of the global climate.
Reanalysis combines model data with observations from across the world into a globally complete and consistent dataset. 
ERA5 replaces its predecessor, the ERA-Interim reanalysis.
ERA5 DAILY provides aggregated values for each day for seven ERA5 climate reanalysis parameters like 2m air temperature.

     c) Drought

- **Name:** TerraClimate: Monthly Climate and Climatic Water Balance for Global Terrestrial Surfaces, University of Idaho
- **Availability timeperiod:** 1958-2021
- **Resolution:** 4638.3m
- **Band used:** PDSI
- **Dataset link:**  https://developers.google.com/earth-engine/datasets/catalog/IDAHO_EPSCOR_TERRACLIMATE
- **GEE Code:** 

**Description:** 

Palmer drought severity index (PDSI), is a regional drought index commonly used for monitoring drought events 
and studying areal extent and severity of drought episodes.
The index uses precipitation and temperature data to study moisture supply and demand using a simple 
water balance model.

     d) Water Scarcity

- **Name:** ERA5 Daily Aggregates - Latest Climate Reanalysis Produced by ECMWF / Copernicus Climate Change Service
- **Availability timeperiod:** 1979-2020
- **Resolution:** 27830m
- **Band used:** Total Precipitation
- **Dataset link:**  https://developers.google.com/earth-engine/datasets/catalog/ECMWF_ERA5_DAILY
- **GEE Code:** 

**Description:** 

Values of total precipitation are in unit of m/day (range = 0 to 0.2)

     e) Deforestation

- **Name:** MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km 
- **Availability timeperiod:** 2000-2022
- **Resolution:** 1000m
- **Band used:** NDVI
- **Dataset link:**  https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD13A2
- **GEE Code:** 

**Description:** 

NDVI (Normalized Difference Vegetation Index) is a normalized indix used to different different characteristics of earth surface.
The values are categorized into various subclasses as per need.
For example, NDVI values > 3 represent sparse vegetation/Cropland
NDVI > 0.5 represent dense vegetation/forest.
In general, higher NDVI values represent more vegetation (forestland) and vice versa.

     f) Pollution

- **Name:** MCD19A2.006: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km
- **Availability timeperiod:** 2000-2022
- **Resolution:** 1000m
- **Band used:** Optical Depth 0.47
- **Dataset link:**  https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD19A2_GRANULES
- **GEE Code:** 

**Description:** 

Blue band (0.47 μm) aerosol optical depth over land
Aerosol Optical Depth (AOD) is a quantitative estimate of the amount of aerosol present in the atmosphere,
and it can be used as a proxy for surface Particulate Matter PM2. 5 (particles smaller than 2.5 µm median
diameter). AOD measures the extinction of a ray of light as it passes through the atmosphere.

     g) Night Time Lightt

- **Name:** 1) VIIRS Stray Light Corrected Nighttime Day/Night Band Composites Version 1 & 2) DMSP OLS: Nighttime Lights Time Series Version 4, Defense Meteorological Program Operational Linescan System
- **Availability timeperiod:** 2000-2022 (DMSP=2000-2014 & VIIRS=2014-2022)
- **Resolution:** 500m (DMSP downscaled to 500m from 927.67m)
- **Band used:** VIIRS="avg_vis" & DMSP="avg_rad"
- **Dataset link:**  (VIIRS): https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_DNB_MONTHLY_V1_VCMSLCFG?hl=en & (DMSP): https://developers.google.com/earth-engine/datasets/catalog/NOAA_DMSP-OLS_NIGHTTIME_LIGHTS?hl=en#description
- **GEE Code:** 

**Description:** 

The Defense Meteorological Program (DMSP) Operational Line-Scan System (OLS) has a unique capability
to detect visible and near-infrared (VNIR) emission sources at night. Version 4 of the DMSP-OLS 
Nighttime Lights Time Series consists of cloud-free composites made using all the available 
archived DMSP-OLS smooth resolution data for calendar years. In cases where two satellites were 
collecting data, two composites were produced. Image and data processing by NOAA's National 
Geophysical Data Center. DMSP data collected by US Air Force Weather Agency

Monthly average radiance composite images using nighttime data from the Visible Infrared Imaging 
Radiometer Suite (VIIRS) Day/Night Band (DNB). As these data are composited monthly, there are many areas of the globe where it is 
impossible to get good quality data coverage for that month. This can be due to cloud cover, 
especially in the tropical regions, or due to solar illumination, as happens toward the poles 
in their respective summer months. Therefore it is recommended that users of these data utilize 
the 'cf_cvg' band and not assume a value of zero in the average radiance image means that no lights 
were observed.

     h) Land use

- **Name:** MCD12Q1.006 MODIS Land Cover Type Yearly Global 500m
- **Availability timeperiod:** 2001-2020
- **Resolution:** 500m
- **Band used:** LC_Type1
- **Dataset link:**  https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD12Q1?hl=en#description
- **GEE Code:** 

**Description:** 

Final raster contains two values. First class (12) represents Cropland (12+14) and class two (showing 13) represent builtup areas
The MCD12Q1 V6 product provides global land cover types at yearly intervals (2001-2016) 
derived from six different classification schemes. It is derived using supervised classifications 
of MODIS Terra and Aqua reflectance data. The supervised classifications then undergo additional 
post-processing that incorporate prior knowledge and ancillary information to further refine 
specific classes.




## Contributors

- #### Mirza Waleed (mirzawaleed197@gmail.com)
- #### Dr. Johnathan Hersh (hersh@chapman.edu) 