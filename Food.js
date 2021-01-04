class food{
    constructor(foodStock, lastFed){
       var options = {
           isStatic : true,
           resitution : 0.1,
           friction : 1
       }

       this.image = loadImage("images/Milk.png");

    }
    getFoodStock(){
        var foodStock = database.ref('Food');
        foodStock.on("value", function(data){
            Food = data.val();
        })
    }
    
    updateFoodStock(){
        database.ref('/').update({
            Food:foodStock
        })
    }
    deductFood(){
        database.ref('/').deduct({
            Food:foodStock
        })
    }
    display(){
        var x = 80, y = 100;
        imageMode(CENTER);
        image(this.image, 720, 220, 70, 70);

        if(this.foodStock != 0){
            for(var i = 0; i < this.foodStock; i++){
                if(i % 10 === 0){
                    x = 80;
                    y = y + 50;
                }
                image(this.image, x,y, 50, 50);
                x = x + 30;
            }
        }
    }
}