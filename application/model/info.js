var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Info Schema 
    'euid','deviceId','os','osVersion','deviceModel','home',
    'work','istInstalledApps','batteryState','batteryPercentage','arrival',
    'departure','categorie','venueName','venueTotalTime','precision','venueLngLat',
    'address','city','state','country'
 */
var typeLocale = { 
    type: {
            type: String,
            enum: ['Point']            
    },
    coordinates: { 
        type: [Number], index: '2dsphere' 
    }
}
var InfoSchema = new Schema({
    euid: { type: String },
    deviceId: { type: String },
    os: { type: String },
    osVersion: { type: String },
    deviceModel: { type: String },
    home: typeLocale,
    work: typeLocale,
    istInstalledApps: [{ type: String }],
    batteryState: { type: String },
    batteryPercentage: { type: Number },
    arrival: { type: Date },
    departure: { type: Date },
    categorie: { type: String },
    venueName: { type: String },
    venueTotalTime: { type: String },
    precision: { type: String },
    venueLngLat: typeLocale,
    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String }
});

module.exports = mongoose.model('Info', InfoSchema);  