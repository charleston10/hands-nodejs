'use strict';

const BaseRoute = require('./base_route');
const ImportFileBusiness = require('../business/import_file');

class ImportFileRoute extends BaseRoute {

    constructor() {
        super(new ImportFileBusiness());
    }

    file(req, res, next) {
        this._business.csv(req, res);
    }
}

module.exports = ImportFileRoute;