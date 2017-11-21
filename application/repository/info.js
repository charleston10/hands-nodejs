'use strict';

var BaseRepository = require('./base_repository');
var InfoModel = require('../model/info');

class InfoRepository extends BaseRepository {
    constructor() {
        super(InfoModel);
    }
}

module.exports = InfoRepository;