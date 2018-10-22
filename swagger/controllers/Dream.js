'use strict';

var utils = require('../utils/writer.js');
var Dream = require('../service/DreamService');

module.exports.addComment = function addComment (req, res, next) {
  var dreamId = req.swagger.params['dreamId'].value;
  var body = req.swagger.params['body'].value;
  Dream.addComment(dreamId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addDream = function addDream (req, res, next) {
  var body = req.swagger.params['body'].value;
  Dream.addDream(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDream = function deleteDream (req, res, next) {
  var dreamId = req.swagger.params['dreamId'].value;
  var api_key = req.swagger.params['api_key'].value;
  Dream.deleteDream(dreamId,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findDreamsByStatus = function findDreamsByStatus (req, res, next) {
  var status = req.swagger.params['status'].value;
  Dream.findDreamsByStatus(status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findDreamsByTags = function findDreamsByTags (req, res, next) {
  var tags = req.swagger.params['tags'].value;
  Dream.findDreamsByTags(tags)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDreamById = function getDreamById (req, res, next) {
  var dreamId = req.swagger.params['dreamId'].value;
  Dream.getDreamById(dreamId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateDream = function updateDream (req, res, next) {
  var body = req.swagger.params['body'].value;
  Dream.updateDream(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateDreamWithForm = function updateDreamWithForm (req, res, next) {
  var dreamId = req.swagger.params['dreamId'].value;
  var name = req.swagger.params['name'].value;
  var status = req.swagger.params['status'].value;
  Dream.updateDreamWithForm(dreamId,name,status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
