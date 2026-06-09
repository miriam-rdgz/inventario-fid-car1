var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Mapadefid_1 = new ol.format.GeoJSON();
var features_Mapadefid_1 = format_Mapadefid_1.readFeatures(json_Mapadefid_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapadefid_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapadefid_1.addFeatures(features_Mapadefid_1);
var lyr_Mapadefid_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapadefid_1, 
                style: style_Mapadefid_1,
                popuplayertitle: 'Mapa de fid',
                interactive: true,
    title: 'Mapa de fid<br />\
    <img src="styles/legend/Mapadefid_1_0.png" /> 1 - 39<br />\
    <img src="styles/legend/Mapadefid_1_1.png" /> 39 - 77<br />\
    <img src="styles/legend/Mapadefid_1_2.png" /> 77 - 115<br />\
    <img src="styles/legend/Mapadefid_1_3.png" /> 115 - 153<br />\
    <img src="styles/legend/Mapadefid_1_4.png" /> 153 - 190<br />\
    <img src="styles/legend/Mapadefid_1_5.png" /> 190 - 228<br />\
    <img src="styles/legend/Mapadefid_1_6.png" /> 228 - 266<br />\
    <img src="styles/legend/Mapadefid_1_7.png" /> 266 - 304<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Mapadefid_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Mapadefid_1];
lyr_Mapadefid_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ESPECIE': 'ESPECIE', 'DN_cm': 'DN_cm', 'DB_cm': 'DB_cm', 'H': 'H', 'SF': 'SF', 'DN_m': 'DN_m', 'AB': 'AB', 'V': 'V', 'ESPECIE ': 'ESPECIE ', 'layer': 'layer', 'path': 'path', });
lyr_Mapadefid_1.set('fieldImages', {'fid': '', 'ID': '', 'ESPECIE': '', 'DN_cm': '', 'DB_cm': '', 'H': '', 'SF': '', 'DN_m': '', 'AB': '', 'V': '', 'ESPECIE ': '', 'layer': '', 'path': '', });
lyr_Mapadefid_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ESPECIE': 'no label', 'DN_cm': 'no label', 'DB_cm': 'no label', 'H': 'no label', 'SF': 'no label', 'DN_m': 'no label', 'AB': 'no label', 'V': 'no label', 'ESPECIE ': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Mapadefid_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});