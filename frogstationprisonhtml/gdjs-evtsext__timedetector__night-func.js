
if (typeof gdjs.evtsExt__TimeDetector__Night !== "undefined") {
  gdjs.evtsExt__TimeDetector__Night.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TimeDetector__Night = {};


gdjs.evtsExt__TimeDetector__Night.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().get("__TimeDetector").getChild("CurrentTime").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__TimeDetector").getChild("CurrentTime")) >= 0;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__TimeDetector").getChild("CurrentTime")) < 4;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__TimeDetector").getChild("CurrentTime")) >= 18;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__TimeDetector").getChild("CurrentTime")) <= 23;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__TimeDetector").getChild("CurrentTime")) >= 0);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__TimeDetector").getChild("CurrentTime")) < 4);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__TimeDetector").getChild("CurrentTime")) >= 18);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__TimeDetector").getChild("CurrentTime")) <= 23);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__TimeDetector__Night.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TimeDetector"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TimeDetector"),
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


gdjs.evtsExt__TimeDetector__Night.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__TimeDetector__Night.registeredGdjsCallbacks = [];