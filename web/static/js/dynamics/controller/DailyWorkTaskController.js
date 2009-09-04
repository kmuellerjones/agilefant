DailyWorkTaskController = function(model, view, parentController) {
    this.model = model;
    this.view = view;
    this.parentController = parentController;
};

DailyWorkTaskController.prototype = new TaskController();

DailyWorkTaskController.prototype.sortAndMoveDailyTask = function(view, model, newPos) {
  var previousRow = newPos - 1;
  var targetModel = view.getParentView().getModel();
  if (view.getParentView().getDataRowAt(previousRow)) {
    previousTask = view.getParentView().getDataRowAt(previousRow).getModel();
    model.rankDailyUnder(previousTask.getId(), targetModel);
  }
  else {
    model.rankDailyUnder(-1, targetModel);
  }
};

DailyWorkTaskController.prototype.moveTask = function(targetModel) {
  this.model.rankUnder(-1, targetModel);
};

DailyWorkTaskController.prototype.removeTaskFromDailyWork = function() {
  this.model.removeFromDailyWork();
};

DailyWorkTaskController.prototype.actionColumnFactory = function(view, model) {
    var items = [
     {
         text: "Details",
         callback : TaskController.prototype.openDetails
     }, 
     {
         text : "Remove from this list",
         callback : DailyWorkTaskController.prototype.removeTaskFromDailyWork
     },
     {
         text : "Edit",
         callback : TaskController.prototype.editTask
     },
     {
         text : "Delete",
         callback : TaskController.prototype.removeTask
     }, 
     {
         text : "Reset original estimate",
         callback : TaskController.prototype.resetOriginalEstimate
     }
     ];
    var actionView = new DynamicTableRowActions(items, this, this.model,
            view);
    return actionView;
};
