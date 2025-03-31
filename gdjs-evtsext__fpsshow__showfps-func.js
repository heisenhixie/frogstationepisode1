
if (typeof gdjs.evtsExt__fpsshow__showfps !== "undefined") {
  gdjs.evtsExt__fpsshow__showfps.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__fpsshow__showfps = {};
gdjs.evtsExt__fpsshow__showfps.GDfpsObjects1= [];
gdjs.evtsExt__fpsshow__showfps.GDfpsObjects2= [];
gdjs.evtsExt__fpsshow__showfps.GDfpsObjects3= [];


gdjs.evtsExt__fpsshow__showfps.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("showfps")) == "true";
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("fps"), gdjs.evtsExt__fpsshow__showfps.GDfpsObjects2);
{for(var i = 0, len = gdjs.evtsExt__fpsshow__showfps.GDfpsObjects2.length ;i < len;++i) {
    gdjs.evtsExt__fpsshow__showfps.GDfpsObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.evtsExt__fpsshow__showfps.GDfpsObjects2.length ;i < len;++i) {
    gdjs.evtsExt__fpsshow__showfps.GDfpsObjects2[i].setPosition(53,1024);
}
}{for(var i = 0, len = gdjs.evtsExt__fpsshow__showfps.GDfpsObjects2.length ;i < len;++i) {
    gdjs.evtsExt__fpsshow__showfps.GDfpsObjects2[i].setLayer("fps");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("showfps")) == "false";
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("fps"), gdjs.evtsExt__fpsshow__showfps.GDfpsObjects2);
{for(var i = 0, len = gdjs.evtsExt__fpsshow__showfps.GDfpsObjects2.length ;i < len;++i) {
    gdjs.evtsExt__fpsshow__showfps.GDfpsObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


};gdjs.evtsExt__fpsshow__showfps.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__fpsshow__showfps.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__fpsshow__showfps.func = function(runtimeScene, fps, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"fps": fps
},
  _objectArraysMap: {
"fps": gdjs.objectsListsToArray(fps)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("fpsshow"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("fpsshow"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__fpsshow__showfps.GDfpsObjects1.length = 0;
gdjs.evtsExt__fpsshow__showfps.GDfpsObjects2.length = 0;
gdjs.evtsExt__fpsshow__showfps.GDfpsObjects3.length = 0;

gdjs.evtsExt__fpsshow__showfps.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__fpsshow__showfps.GDfpsObjects1.length = 0;
gdjs.evtsExt__fpsshow__showfps.GDfpsObjects2.length = 0;
gdjs.evtsExt__fpsshow__showfps.GDfpsObjects3.length = 0;


return;
}

gdjs.evtsExt__fpsshow__showfps.registeredGdjsCallbacks = [];