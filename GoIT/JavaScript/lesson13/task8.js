function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

function Fridge(power){
    Machine.apply(this, arguments);
    var food = [];
    this.addFood = function(){
        if(this._enabled === false){
            throw new Error("Холодильник выключен");
        }
        if(food.lenght + arguments.length >= this.power / 100){
            throw new Error("Cлишком много еды");
        } else {
            for(var i = 0; i < arguments.length; i++){
                food.push(arguments[i]);
            }
        }
    };

    this.getFood = function(){
        return food.slice();
    };

    this.filterFood = function(func){
        return food.filter(func);
    };

    this.removeFood = function(item){
        var i = food.indexOf(item);
        if(i != -1) food.splice(i, 1);
    };
}


var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
alert( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
});

dietItems.forEach(function(item) {
    alert( item.title ); // сок, зелень
    fridge.removeFood(item);
});

alert( fridge.getFood().length ); // 2