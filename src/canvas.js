function drawLine(ctx, startX, startY, endX, endY,color){
    ctx.save();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
    ctx.restore();

            console.log("drawLine");
}

function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color){
    ctx.save();
    ctx.fillStyle=color;
    ctx.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
    ctx.restore();
}

class Barchart
{
    constructor(options) {
        this.options = options;
        this.canvas = options.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.colors = options.colors;
    }

    draw()
    {
        let maxValue = 0;
        for (let val of this.options.data.values()) {
            maxValue = Math.max(maxValue,val);
        }
        let canvasActualHeight = this.canvas.height - this.options.padding * 2;
        let canvasActualWidth = this.canvas.width - this.options.padding * 2;

        //drawing the grid lines
        let gridValue = 0;
        while (gridValue <= maxValue){
            let gridY = canvasActualHeight * (1 - gridValue/maxValue) + this.options.padding;
            drawLine(
                this.ctx,
                0,
                gridY,
                this.canvas.width,
                gridY,
                this.options.gridColor
            );
            //writing grid markers
            this.ctx.save();
            this.ctx.fillStyle = this.options.gridColor;
            this.ctx.textBaseline="bottom";
            this.ctx.font = "bold 10px Arial";
            this.ctx.fillText(gridValue, 10,gridY - 2);
            this.ctx.restore();

            gridValue+=this.options.gridScale;
        }

        //drawing the bars
        let barIndex = 0;
        let numberOfBars = this.options.data.size;
        let barSize = (canvasActualWidth)/numberOfBars;
        const coef = Math.round(canvasActualHeight /maxValue);
        //for (let categ in this.options.data)
        for (let val of this.options.data.values())
        {
            let barHeight = coef * val;
            drawBar(
                this.ctx,
                this.options.padding + barIndex * barSize,
                this.canvas.height - barHeight - this.options.padding,
                barSize,
                barHeight,
                this.colors[barIndex%this.colors.length]
            );
            barIndex++;
        }


        //drawing the col markers
        gridValue = 0;
        while (gridValue <= maxValue){
            let gridY = canvasActualHeight * (1 - gridValue/maxValue) + this.options.padding;

            //writing grid markers
            this.ctx.save();
            this.ctx.fillStyle = this.options.gridColor;
            this.ctx.textBaseline="bottom";
            this.ctx.font = "bold 10px Arial";
            this.ctx.fillText(gridValue, 10,gridY - 2);
            this.ctx.restore();

            gridValue+=this.options.gridScale;
        }

        //drawing series name
        // this.ctx.save();
        // this.ctx.textBaseline="bottom";
        // this.ctx.textAlign="center";
        // this.ctx.fillStyle = "#000000";
        // this.ctx.font = "bold 14px Arial";
        // this.ctx.fillText(this.options.seriesName, this.canvas.width/2,this.canvas.height);
        // this.ctx.restore();

        //draw legend
        // barIndex = 0;
        // let legend = document.querySelector("legend[for='myCanvas']");
        // let ul = document.createElement("ul");
        // legend.append(ul);
        // for (let categ in this.options.data){
        //     let li = document.createElement("li");
        //     li.style.listStyle = "none";
        //     li.style.borderLeft = "20px solid "+this.colors[barIndex%this.colors.length];
        //     li.style.padding = "5px";
        //     li.textContent = categ;
        //     ul.append(li);
        //     barIndex++;
        //}
    }
}

export {Barchart}