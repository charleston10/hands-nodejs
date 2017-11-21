'use strict';  

const BaseBusiness = require('./base_business'); 
const InfoRepository = require('../repository/info');

class InfoBusiness extends BaseBusiness {
    constructor() {
        super(new InfoRepository());
    }
}

module.exports = InfoBusiness;