$ = function (id) {
    return document.getElementById(id);
};
$v = $.value;

    var bc = 20;//小格子边长
    var foodX = 0;
    var foodY = 0;
    var xdir = 0;
    var ydir = 0;
    var x = 20;
    var y = 20;
    var c = $('c');
    var ctx = c.getContext('2d');
    var kcode = {'w': 87, 's': 83, 'a': 65, 'd': 68};
    var griddata = [];
    var currentActiveNodes = [];

    var node = function(x,y,color){
        this.x = x;
        this.y = y;
        this.color = color;
    };

    function refreshCurrentActiveNodes(){

        for(i in currentActiveNodes){
            var node = currentActiveNodes[i];
            if(!node.color){
                ctx.clearRect(node.x, node.y, bc, bc);
            }else{
                ctx.rect(node.x, node.y, bc, bc);
            }
        }


    }

    function drawGrid() {
        //画横线
        for (var i = 0; i <= c.width; i = i + bc) {
            ctx.strokeStyle = 'gray';
            ctx.beginPath();
            ctx.lineWidth = 0.5;
            ctx.moveTo(0, i);
            ctx.lineTo(c.width, i);
            ctx.stroke();
        }
        //画竖线
        for (var i = 0; i <= c.height; i = i + bc) {
            ctx.strokeStyle = 'gray';
            ctx.beginPath();
            ctx.lineWidth = 0.5;
            ctx.moveTo(i, 0);
            ctx.lineTo(i, c.height);
            ctx.stroke();
        }
    }

    /**
     * 初始化每个格子的状态值数组
     */
    function initGridData() {
        for (var i = 0; i < c.width / bc; i++) {
            for (var k = 0; k < c.height / bc; k++) {
                var node = {'x': i * bc, 'y': k * bc, 'color': ''};
                griddata.push(node);
            }
        }
        genFood(true);
    }

    initGridData();

    !function () {
        drawGrid();
        setTimeout(arguments.callee, 200);
    }();

    function dw() {
        ctx.fillStyle = 'red';
        for(i in currentActiveNodes){
            var node = currentActiveNodes[i];
            ctx.fillRect(node.x, node.y, bc, bc);
        }
    }

    /**
     * 随机生成食物节点
     */
    function genFood(genFoodFlag) {
        if(!genFoodFlag) return;
        ctx.fillStyle = 'red';
        var i9 = true;
        while (i9) {
            var x = randomNum(0, 19) * bc;
            var y = randomNum(0, 19) * bc;
            for (i in griddata) {
                var node = griddata[i];
                if(node.x === x && node.y === y){
                    if(!node.color){//如果当前坐标无snake节点
                        foodX = x;
                        foodY = y;
                        ctx.fillRect(foodX, foodY, bc, bc);
                        i9 = false;
                    }
                }
            }
        }
        genFoodFlag = false;
    }
    currentActiveNodes.unshift(new node(x, y, "red"));
    !function () {
        x += bc * xdir;
        y += bc * ydir;

        if(x > c.width || x < 0 || y > c.height || y < 0){
            alert('Game Over');
            return;
        }

        currentActiveNodes.unshift(new node(x, y, ""));
        var tailNode = currentActiveNodes.pop();
        ctx.fillStyle = 'white';
        ctx.fillRect(tailNode.x, tailNode.y, bc, bc);


        if(x === foodX && y === foodY){
            genFood(true);
            x += bc * xdir;
            y += bc * ydir;
            currentActiveNodes.unshift(new node(x, y, "red"));
        }


        //refreshCurrentActiveNodes();
        dw();

//        if()
//        nodes.unshift({'x':x, 'y':y, 'color': color});


        document.onkeyup = function (ev) {
            switch (ev.keyCode) {
                case kcode.w:
                    ydir = -1;
                    xdir = 0;
                    break;
                case kcode.s:
                    ydir = 1;
                    xdir = 0;
                    break;
                case kcode.a:
                    xdir = -1;
                    ydir = 0;
                    break;
                case kcode.d:
                    xdir = 1;
                    ydir = 0;
                    break;
            }
        };

        setTimeout(arguments.callee, 100);
    }();
