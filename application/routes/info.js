'use strict';

const BaseRoute = require('./base_route');
const InfoBusiness = require('../business/info');

class InfoRoute extends BaseRoute {
    constructor() {
        super(new InfoBusiness());
    }
}

module.exports = InfoRoute;