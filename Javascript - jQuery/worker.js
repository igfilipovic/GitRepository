var things;
var updates;

var scaledRandomInt = function(max, min) {
    return Math.round(min + Math.random()*(max-min));
}

var getDistance = function(x1,x2,y1,y2) {
    return Math.sqrt(Math.pow(Math.abs(x1-x2),2) + Math.pow(Math.abs(y1-y2),2));
}

var actions = {
	makeHighestSleepy: function(){
		var highest = things.sort(function(a, b){
			return a.y - b.y
		});
		updates = {};
		updates.id = highest[0].id;
		updates.minDy = -2;
		updates.maxDy = 3;
		updates.symbol = 'z';		
		postMessage(updates);		
	},
	
	makeLowestBuzzy: function(){
		var lowest = things.sort(function(a, b){
			return b.y - a.y
		});
		updates = {};
		updates.id = lowest[0].id;
		updates.minDy = -3;
		updates.maxDy = 2;
		updates.symbol = '*';		
		postMessage(updates);		
	},	
	
	killSlowest: function(){
		var slowest = things.sort(function(a, b){
			return a.pxTravelled - b.pxTravelled
		});
		updates = {};
		updates.id = slowest[0].id;
		updates.kill = true;
		postMessage(updates);		
	},	
	
	updatePaths: function(){
		for (var i = things.length-1; i; i--) {
			var t = things[i];
			t.pxTravelled += getDistance(t.xOld, t.x, t.yOld, t.y);
			t.xOld = t.x; t.yOld = t.y; 
		}
	}	
}	

onmessage = function(e){
    things = e.data.things;
    actions[e.data.action]();
}








