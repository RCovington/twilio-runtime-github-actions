exports.handler = function(context, event, callback) {
    const result = {
        message : "Dear World, I'm pleased to meet you!!"
    }

    callback(null, result);
  };
