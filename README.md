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

     c) Water Scarcity

- **Name:** ERA5 Daily Aggregates - Latest Climate Reanalysis Produced by ECMWF / Copernicus Climate Change Service
- **Availability timeperiod:** 1979-2020
- **Resolution:** 27830m
- **Band used:** Total Precipitation
- **Dataset link:**  https://developers.google.com/earth-engine/datasets/catalog/ECMWF_ERA5_DAILY

- **GEE Code:** 

**Description:** 

Values of total precipitation are in unit of m/day (range = 0 to 0.2)


## Contributors

- #### Mirza Waleed (mirzawaleed197@gmail.com)
- #### Dr. Johnathan Hersh (hersh@chapman.edu) 