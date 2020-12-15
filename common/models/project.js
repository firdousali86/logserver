'use strict';

module.exports = function(Project) {
    Project.beforeRemote('prototype.__create__logs', function(ctx, modelInstance, next) {

        if(ctx && ctx.args && ctx.args.data){
          ctx.args.data.postedAt = Date.now();
        }
        
        next();
      });

    // Project.beforeRemote('**', function(ctx, user, next) {
    //   console.log(ctx.methodString, 'was invoked remotely'); // customers.prototype.save was invoked remotely
    //   next();
    // });
};
