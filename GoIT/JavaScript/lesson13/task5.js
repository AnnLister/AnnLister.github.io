function CoffeeMachine(power, capacity) {
    this._enabled = false;
    this.enable = function () {
        this._enabled = true;
    };
    this.disable = function () {
        this._enabled = false;
    };

    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    var timerId = false;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };

    this.getWaterAmount = function(amount) {
        return waterAmount;
    };

    function onReady() {
        alert( 'Кофе готов!' );

    }

    this.run = function() {
        if(this._enabled === false){

            throw new Error("Кофеварка выключена");
        } else {
            timerId = setTimeout(function(){
                timerId = false;
                onReady();
            }, getTimeToBoil());
        }
    };

    this.setOnReady = function(func){
        onReady = func;
    };

    this.isRunning = function(){
        return timerId === false? false : true;
    };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!