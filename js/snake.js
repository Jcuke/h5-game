$ = function (id) {
    return document.getElementById(id);
};

    var bc = 20;//小格子边长
    var foodX = 0;//随即生成的食物的x坐标
    var foodY = 0;//随即生成的食物的y坐标
    var xdir = 0;//蛇移动的X方向,-1表是左,1表右,0表是方向不变
    var ydir = 0;//蛇移动的Y方向,-1表是上,1表下,0表是方向不变
    var x = 20;//蛇起始节点的X坐标
    var y = 20;//蛇起始节点的Y坐标
    var c = $('c');//获取画布对象
    var ctx = c.getContext('2d');//获取2d画笔对象
    var kcode = {'w': 87, 's': 83, 'a': 65, 'd': 68};//上下左右的键码
    var griddata = [];
    var currentActiveNodes = [];

    var nodeJson = function(x,y,color){
        this.x = x;
        this.y = y;
        this.color = color;
    };

    function drawGrid() {
        //ctx.strokeStyle="#0000ff";
        //ctx.strokeRect(0,0,400,400);
        //return;
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
                var node = new nodeJson(i * bc,k * bc, '');
                griddata.push(node);
            }
        }
        genFood(true);
        currentActiveNodes.unshift(new nodeJson(x, y, "red"));
    }

    initGridData();

    !function () {
        drawGrid();
        setTimeout(arguments.callee, 200);
    }();

    function dw() {
        //ctx.fillStyle = 'red';
        ctx.fillStyle = '#' +
            (function(color){
                return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
                && (color.length == 6) ?  color : arguments.callee(color);
            })('');
        //随机颜色
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
        while (genFoodFlag) {
            var x = randomNum(0, 19) * bc;
            var y = randomNum(0, 19) * bc;
            for (i in griddata) {
                var node = griddata[i];
                if(node.x === x && node.y === y){
                    if(!node.color){//如果当前坐标无snake节点
                        foodX = x;
                        foodY = y;
                        ctx.fillRect(foodX, foodY, bc, bc);
                        genFoodFlag = !genFoodFlag;
                    }
                }
            }
        }
    }

    !function () {
        x += bc * xdir;
        y += bc * ydir;

        //撞到自已的节点
        for(xi in currentActiveNodes){
            if(currentActiveNodes.length > 1 && currentActiveNodes[xi].x === x && currentActiveNodes[xi].y === y){
                alert('Collided with your self, Game Over');
                return;
            }
        }

        currentActiveNodes.unshift(new nodeJson(x, y, ""));
        var tailNode = currentActiveNodes.pop();
        ctx.fillStyle = 'white';
        ctx.fillRect(tailNode.x, tailNode.y, bc, bc);

        //撞到边框
        if(currentActiveNodes[0].x > c.width || currentActiveNodes[0].x < 0 || currentActiveNodes[0].y > c.height || currentActiveNodes[0].y < 0){
            alert('Collied boundary, Game Over');
            return;
        }

        if(x === foodX && y === foodY){
            genFood(true);
            x += bc * xdir;
            y += bc * ydir;
            currentActiveNodes.unshift(new nodeJson(x, y, "red"));
        }

        dw();

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
        setTimeout(arguments.callee, 150);
    }();
