var Killers=[
    "Hans",
    "The Poltergeist",
    "Inkanyamba",
    "Gappetto",
    "Dr. Fright",
    "The Xenomorph",
    "The Organism",
    "The Intruders",
    "Big Bad Wolf",
    "Ratchet Lady"
    ];
    
var Locations=[
    "Camp Happy Trails",
    "Creech Manor",
    "Sacred Groves",
    "Carnival of Blood",
    "Maple Lane",
    "USS Konrad",
    "Station 2891",
    "Wingard Cottage",
    "Storybook Woods",
    "Wolfe Asylum"
    ];
    
var Final_Girls=[
    "Laurie",
    "Asami",
    "Reiko",
    "Marie",
    "Alice",
    "Sheila",
    "Selena", 
    "Nancy",
    "Adelaide",
    "Barbara",
    "Paula",
    "Ava",
    "Ginny",
    "Agnes",
    "Contance",
    "Julia",
    "Layla",
    "Jeanette",
    "Ellen",
    "Kate",
    "Uki",
    "Red",
    "Gretel",
    "Heather",
    "Veronica",
    "Ginny",
    "Ava"
    ];
    
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
        input.value = Locations[i];
        
        lable.for = 'location' + i;
        
        li.appendChild(input);
        lable.appendChild(document.createTextNode(Locations[i]));
        li.appendChild(lable);
        ul.appendChild(li);
    }
}
