'use strict';


/**
 * add new comment
 * 
 *
 * dreamId Long ID of dream to update
 * body Comment Dream object that needs to be added to the land
 * returns ApiResponse
 **/
exports.addComment = function(dreamId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "type" : "type",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new dream to the land
 * 
 *
 * body Dream Dream object that needs to be added to the land
 * no response value expected for this operation
 **/
exports.addDream = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a dream
 * 
 *
 * dreamId Long Dream id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteDream = function(dreamId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds Dreams by status
 * Multiple status values can be provided with comma separated strings
 *
 * status List Status values that need to be considered for filter
 * returns List
 **/
exports.findDreamsByStatus = function(status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "like" : 6,
  "joined" : [ {
    "password" : "password",
    "id" : 0,
    "email" : "email",
    "username" : "username"
  }, {
    "password" : "password",
    "id" : 0,
    "email" : "email",
    "username" : "username"
  } ],
  "comment" : [ {
    "user" : {
      "password" : "password",
      "id" : 0,
      "email" : "email",
      "username" : "username"
    },
    "timestamp" : 1.2345678901E7,
    "desc" : "I have a dream"
  }, {
    "user" : {
      "password" : "password",
      "id" : 0,
      "email" : "email",
      "username" : "username"
    },
    "timestamp" : 1.2345678901E7,
    "desc" : "I have a dream"
  } ],
  "tag" : [ { }, { } ],
  "title" : "Nintendo Switch for Monospacers",
  "user" : {
    "password" : "password",
    "id" : 0,
    "email" : "email",
    "username" : "username"
  },
  "timestamp" : 1.2345678901E7,
  "desc" : "I have a dream",
  "status" : "open"
}, {
  "like" : 6,
  "joined" : [ {
    "password" : "password",
    "id" : 0,
    "email" : "email",
    "username" : "username"
  }, {
    "password" : "password",
    "id" : 0,
    "email" : "email",
    "username" : "username"
  } ],
  "comment" : [ {
    "user" : {
      "password" : "password",
      "id" : 0,
      "email" : "email",
      "username" : "username"
    },
    "timestamp" : 1.2345678901E7,
    "desc" : "I have a dream"
  }, {
    "user" : {
      "password" : "password",
      "id" : 0,
      "email" : "email",
      "username" : "username"
    },
    "timestamp" : 1.2345678901E7,
    "desc" : "I have a dream"
  } ],
  "tag" : [ { }, { } ],
  "title" : "Nintendo Switch for Monospacers",
  "user" : {
    "password" : "password",
    "id" : 0,
    "email" : "email",
    "username" : "username"
  },
  "timestamp" : 1.2345678901E7,
  "desc" : "I have a dream",
  "status" : "open"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds Dreams by tags
 * Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
 *
 * tags List Tags to filter by
 * returns List
 **/
exports.findDreamsByTags = function(tags) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "like" : 6,
  "joined" : [ {
    "password" : "password",
    "id" : 0,
    "email" : "email",
    "username" : "username"
  }, {
    "password" : "password",
    "id" : 0,
    "email" : "email",
    "username" : "username"
  } ],
  "comment" : [ {
    "user" : {
      "password" : "password",
      "id" : 0,
      "email" : "email",
      "username" : "username"
    },
    "timestamp" : 1.2345678901E7,
    "desc" : "I have a dream"
  }, {
    "user" : {
      "password" : "password",
      "id" : 0,
      "email" : "email",
      "username" : "username"
    },
    "timestamp" : 1.2345678901E7,
    "desc" : "I have a dream"
  } ],
  "tag" : [ { }, { } ],
  "title" : "Nintendo Switch for Monospacers",
  "user" : {
    "password" : "password",
    "id" : 0,
    "email" : "email",
    "username" : "username"
  },
  "timestamp" : 1.2345678901E7,
  "desc" : "I have a dream",
  "status" : "open"
}, {
  "like" : 6,
  "joined" : [ {
    "password" : "password",
    "id" : 0,
    "email" : "email",
    "username" : "username"
  }, {
    "password" : "password",
    "id" : 0,
    "email" : "email",
    "username" : "username"
  } ],
  "comment" : [ {
    "user" : {
      "password" : "password",
      "id" : 0,
      "email" : "email",
      "username" : "username"
    },
    "timestamp" : 1.2345678901E7,
    "desc" : "I have a dream"
  }, {
    "user" : {
      "password" : "password",
      "id" : 0,
      "email" : "email",
      "username" : "username"
    },
    "timestamp" : 1.2345678901E7,
    "desc" : "I have a dream"
  } ],
  "tag" : [ { }, { } ],
  "title" : "Nintendo Switch for Monospacers",
  "user" : {
    "password" : "password",
    "id" : 0,
    "email" : "email",
    "username" : "username"
  },
  "timestamp" : 1.2345678901E7,
  "desc" : "I have a dream",
  "status" : "open"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find dream by ID
 * Returns a single dream
 *
 * dreamId Long ID of dream to return
 * returns Dream
 **/
exports.getDreamById = function(dreamId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "like" : 6,
  "joined" : [ {
    "password" : "password",
    "id" : 0,
    "email" : "email",
    "username" : "username"
  }, {
    "password" : "password",
    "id" : 0,
    "email" : "email",
    "username" : "username"
  } ],
  "comment" : [ {
    "user" : {
      "password" : "password",
      "id" : 0,
      "email" : "email",
      "username" : "username"
    },
    "timestamp" : 1.2345678901E7,
    "desc" : "I have a dream"
  }, {
    "user" : {
      "password" : "password",
      "id" : 0,
      "email" : "email",
      "username" : "username"
    },
    "timestamp" : 1.2345678901E7,
    "desc" : "I have a dream"
  } ],
  "tag" : [ { }, { } ],
  "title" : "Nintendo Switch for Monospacers",
  "user" : {
    "password" : "password",
    "id" : 0,
    "email" : "email",
    "username" : "username"
  },
  "timestamp" : 1.2345678901E7,
  "desc" : "I have a dream",
  "status" : "open"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing dream
 * 
 *
 * body Dream Dream object that needs to be added to the land
 * no response value expected for this operation
 **/
exports.updateDream = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates a dream in the land with form data
 * 
 *
 * dreamId Long ID of dream that needs to be updated
 * name String Updated name of the dream (optional)
 * status String Updated status of the dream (optional)
 * no response value expected for this operation
 **/
exports.updateDreamWithForm = function(dreamId,name,status) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

