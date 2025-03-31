
if (typeof gdjs.evtsExt__NewgroundsAPI__UnlockMedal !== "undefined") {
  gdjs.evtsExt__NewgroundsAPI__UnlockMedal.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__NewgroundsAPI__UnlockMedal = {};


gdjs.evtsExt__NewgroundsAPI__UnlockMedal.userFunc0xe2f118 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const MedalId = eventsFunctionContext.getArgument("MedalId");

window._newgrounds.ngio.callComponent('Medal.unlock', {id:MedalId});
};
gdjs.evtsExt__NewgroundsAPI__UnlockMedal.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__NewgroundsAPI__UnlockMedal.userFunc0xe2f118(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__NewgroundsAPI__UnlockMedal.func = function(runtimeScene, MedalId, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("NewgroundsAPI"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("NewgroundsAPI"),
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
if (argName === "MedalId") return MedalId;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__NewgroundsAPI__UnlockMedal.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__NewgroundsAPI__UnlockMedal.registeredGdjsCallbacks = [];