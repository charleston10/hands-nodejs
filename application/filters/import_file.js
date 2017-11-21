'use strict';

var BaseFilter = require('./base_filter');

var error = {
    'error': '400 - Bad Request',
    'error_description': 'Tipo de arquivo',
    'error_uri': 'É necessário definir o tipo de arquivo na QueryString [csv]'
}

class ImportFileFilter extends BaseFilter {

    constructor() {
        super([]);
    }
}

module.exports = ImportFileFilter;