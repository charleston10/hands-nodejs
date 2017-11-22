function ConfigRouter() {
	var multer = require('multer');;
	var storage = multer.memoryStorage();
	var upload = multer({ storage: storage });

	const Express = require('express');

	/**naut-file-import**/
	const InfoFilter = require('../application/filters/info');

	const Info = require('../application/routes/info');	

	const ImportFileFilter = require('../application/filters/import_file');
	const ImportFile = require('../application/routes/import_file');

	/**naut-instance-object**/

	var infoFilter = new InfoFilter(false);
	var info = new Info();

	var importFileFilter = new ImportFileFilter(false);
	var importFile = new ImportFile();

	function Router() {
		return this.init(Express.Router());
	}

	Router.prototype.init = function (router) {
		
		/**naut-routes**/

		//info
		router.post('/info', infoFilter.validateInsert.bind(infoFilter), info.save.bind(info));
		router.put('/info/:id', infoFilter.validateUpdate.bind(infoFilter), info.update.bind(info));
		router.delete('/info/:id', info.removeById.bind(info));
		router.get('/info', info.findAll.bind(info));
		router.get('/info/:id', info.findById.bind(info));
		router.delete('/info', info.removeAll.bind(info));

		router.post('/imports', upload.single('file'), importFile.file.bind(importFile));

		return router;
	}

	return {
		routes: new Router()
	}
}

module.exports = ConfigRouter;