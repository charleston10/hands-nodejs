'use strict';

var BaseFilter = require('./base_filter');

class InfoFilter extends BaseFilter {

    constructor() {
        super([]);
    }

    validateInsert(req, res, next) {
        this._fields = [];
        super.validateInsert(req, res, next);
    }

    validateUpdate(req, res, next) {
        this._fields = [];
        super.validateUpdate(req, res, next);
    }
}

module.exports = InfoFilter;