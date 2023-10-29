// Actual Series Data
const s1 = {
    "name": "Series 1",
    "feature_films": {
        "The Happy Trails Horror": {
            "killer": "Hans the Butcher",
            "location": "Camp Happy Trails",
            "girls": ["Laurie", "Reiko"]
        },
        "Frightmare on Maple Lane": {
            "killer": "Dr. Fright",
            "location": "Maple Lane",
            "girls": ["Nancy", "Sheila"]
        },
        "The Haunting of Creech Manor": {
            "killer": "The Poltergeist",
            "location": "Creech Manor",
            "girls": ["Alice", "Selena"]
        },
        "Slaughter at the Groves": {
            "killer": "Inkanyamba the Avenger",
            "location": "Sacred Groves",
            "girls": ["Adelaide", "Barbara"]
        },
        "Carnage at the Carnival": {
            "killer": "Geppetto the Puppet Master",
            "location": "Carnival of Blood",
            "girls": ["Asami", "Charlie"]
        }
    },
    "vignette": {
        "Terror from Above": {
            "killer": "The Birds",
            "girls": ["Melanie"]
        }
    },
    "extra": {
        "Promo": {
            "girls": ["Paula"]
            }
    }
}

const s2 = {
    "name": "Series 2",
    "feature_films": {
        "Panic at Station 2891": {
            "killer": "The Organism",
            "location": "Station 2891",
            "girls": ["Kate", "Uki"]
        },
        "Into the Void": {
            "killer": "Evomorph",
            "location": "USS Konrad",
            "girls": ["Ellen", "Jenette"]
        },
        "A Knock at the Door": {
            "killer": "The Intruders",
            "location": "Wingard Cottage",
            "girls": ["Ginny", "Ava"]
        },
        "Once Upon a Full Moon": {
            "killer": "Big Bad Wolf",
            "location": "Storybook Woods",
            "girls": ["Gretel", "Red"]
        },
        "Madness in the Dark": {
            "killer": "Ratchet Lady",
            "location": "Wolfe Asylum",
            "girls": ["Veronica", "Heather"]
        }
    },
    "vignette": {
        "Terror from the Grave": {
            "killer": "Zombies",
            "girls": ["Patsy"]
        }
    },
    "extra": {
        "Box of Props": {
            "girls": ["Agnes", "Layla", "Constance", "Julia"]
        }
    }
}

// create lists
var Final_Girls = []
var Locations = []
var Killers = []

function buildList(o,v,l){
	for (let i in o){
  	if (typeof o[i] !== "object") continue;
    for (let j in o[i]){
    	if (o[i][j][v] == undefined) continue;
      if (typeof o[i][j][v] == "object"){
      	for (let k in o[i][j][v]) {
        	l.push(o[i][j][v][k])
        }
      }else if (typeof o[i][j][v] == "string") {
      	l.push(o[i][j][v])
      }
    }
  }
}
buildList(s1, "girls", Final_Girls)
buildList(s2, "girls", Final_Girls)
buildList(s1, "location", Locations)
buildList(s2, "location", Locations)
buildList(s1, "killer", Killers)
buildList(s2, "killer", Killers)
    
function makeGirls() {
    var ul = document.getElementById('final girls');
    Final_Girls.sort();
      
    for (i=0; Final_Girls[i]; i++){
        var li = document.createElement('li');
        var input = document.createElement('input');
        var lable = document.createElement('lable');
        
        input.type = 'checkbox';
        input.id = 'girl' + i;
        input.name = 'girls';
        input.className = 'girls_cb';
        input.value = Final_Girls[i];
        
        lable.for = 'girl' + i;
        
        li.appendChild(input);
        lable.appendChild(document.createTextNode(Final_Girls[i]));
        li.appendChild(lable);
        ul.appendChild(li);
    }
}

function makeKillers() {
    var ul = document.getElementById('killers');
    Killers.sort();
      
    for (i=0; Killers[i]; i++){
        var li = document.createElement('li');
        var input = document.createElement('input');
        var lable = document.createElement('lable');
        
        input.type = 'checkbox';
        input.id = 'killer' + i;
        input.name = 'killers';
        input.className = 'killers_cb';
        input.value = Killers[i];
        
        lable.for = 'killer' + i;
        
        li.appendChild(input);
        lable.appendChild(document.createTextNode(Killers[i]));
        li.appendChild(lable);
        ul.appendChild(li);
    }
}

function makeLocations() {
    var ul = document.getElementById('locations');
    Locations.sort();
      
    for (i=0; Locations[i]; i++){
        var li = document.createElement('li');
        var input = document.createElement('input');
        var lable = document.createElement('lable');
        
        input.type = 'checkbox';
        input.id = 'location' + i;
        input.name = 'locations';
        input.className = 'locations_cb';
        input.value = Locations[i];
        
        lable.for = 'location' + i;
        
        li.appendChild(input);
        lable.appendChild(document.createTextNode(Locations[i]));
        li.appendChild(lable);
        ul.appendChild(li);
    }
}
