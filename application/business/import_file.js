'use strict';

const BaseBusiness = require('./base_business');
const InfoRepository = require('../repository/info');
const Util = require('../util/util');
const fs = require('fs');
const csv = require('fast-csv');

class ImportFileBusiness extends BaseBusiness {

    constructor() {
        super(new InfoRepository());
    }

    csv(req, res) {

        var importFile = this;

        var stream = fs.createReadStream(req.file.path);
        var registered = (req.body.registered) ? req.body.registered : false;

        var countItems = 0;
        var countSuccess = 0;
        var countErrors = 0;
        
        var headersCsv = ['euid','deviceId','os','osVersion','deviceModel','home',
        'work','istInstalledApps','batteryState','batteryPercentage','arrival',
        'departure','categorie','venueName','venueTotalTime','precision','venueLngLat',
        'address','city','state','country','none'] //length 21
        
        var parseLocale = this._parseLatLog

        csv
            .fromStream(stream, { headers: headersCsv })
            .on("data", function (data) {

                var element = {}

                try{
                    if(data.euid && data.euid != 'null') element.euid = data.euid.trim()
                    if(data.deviceId && data.deviceId != 'null') element.deviceId = data.deviceId.trim()
                    if(data.os && data.os != 'null') element.os = data.os.trim()
                    if(data.osVersion && data.osVersion != 'null') element.osVersion = data.osVersion.trim()  
                    if(data.deviceModel && data.deviceModel != 'null') element.deviceModel = data.deviceModel.trim()
                    if(data.home && data.home != 'null') data.home = parseLocale('home',data)
                    if(data.work && data.work != 'null') data.work = parseLocale('work',data)
                    if(data.batteryState && data.batteryState != 'null') element.batteryState = data.hobatteryState
                    if(data.batteryPercentage && data.batteryPercentage != 'null') element.hombatteryPercentage = data.batteryPercentage.trim()
                    if(data.arrival && data.arrival != 'null') element.arrival = data.arrival
                    if(data.departure && data.departure != 'null') element.departure = data.departure
                    if(data.categorie && data.categorie != 'null') element.categorie = data.categorie.trim()
                    if(data.venueName && data.venueName != 'null') element.venueName = data.venueName.trim()
                    if(data.venueTotalTime && data.venueTotalTime != 'null') element.venueTotalTime = data.venueTotalTime
                    if(data.precision && data.precision.trim() != 'null') element.precision = data.precision
                    if(data.venueLngLat && data.venueLngLat.trim() != 'null') element.venueLngLat = parseLocale('venueLngLat',data)
                    if(data.address && data.address.trim() != 'null') element.address = data.address.trim()
                    if(data.city && data.city.trim() != 'null') element.city = data.city.trim()
                    if(data.state && data.state.trim() != 'null') element.state = data.state.trim()
                    if(data.country && data.country.trim() != 'null') element.country = data.country.trim() 
           
                    if(data.istInstalledApps 
                        && data.istInstalledApps != null 
                        && data.istInstalledApps != "null"){

                        var items = []

                        var splits = data.istInstalledApps.split("|")
                        splits.forEach(function(element) {
                            var item = element.trim()

                            if(item && item != 'null') items.push(element.trim())
                        }, this);

                        element.istInstalledApps = items
                    }

                    importFile.save(element)
                        .then(function (result) {
                            countSuccess++;
                        })
                        .catch(function (err) {
                            countErrors++;
                        });

                    countItems++;
                }catch(error){
                    console.error("erro csv", error)
                }
            })
            .on("end", function () {
                res.json({
                    'items_proccess': countItems,
                    'items_saved': countSuccess,
                    'items_erros': countErrors
                });
            });
    }

    _parseLatLog(field, data){
        try{
            if(data[field] && data[field].trim() != 'null'){                    
                var splits = data[field].trim().split(" ")
                
                return { 
                    "type": "Point",
                    "coordinates": [parseFloat(splits[0]), parseFloat(splits[1])] 
                }            
            }
        }catch(error){
            return 0
        }        
    }

    _save(element) {
        return super.save(element);
    }
}

module.exports = ImportFileBusiness;