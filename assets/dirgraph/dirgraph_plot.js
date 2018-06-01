if (multiEmbed) {
    // arrows and divID set outside
}else{
    var arrows = arrows1;
    // var arrows = arrows6;
    var divID = "#graph"
}

function run(){
var arrowPointList = [];
Object.values(arrows).forEach(d=>{arrowPointList.push(...d)});
var maxArrowPoint = d3.max(arrowPointList);
var maxArrowSource = d3.max(Object.keys(arrows), d=>parseInt(d));

var svgWidth = 500;
var svgHeight = 500;

var margin = 20;

var radius = Math.min(svgHeight, svgWidth)/2 - margin;

var arrowColor = "rgb(80,80,80)";
var arrowOpacity = 0.9;
var arrowOpacityLight = 0.4;
var arrowColorLight = "rgba(80,80,80,0.4)";

var arrowMaxWidth = 3;
var arrowMinWidth = .8;

var $svg = d3.select(divID)
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

var $chartGroup = $svg.append("g")
    .attr("transform",`translate(${margin},${margin})`);

var center = [svgWidth/2-margin,svgHeight/2-margin];

var $circle = $chartGroup.append("circle")
    .attr("cx", center[0])
    .attr("cy", center[1])
    .attr("r", radius)
    .attr("fill","none")

function getCirclePoint(turnsFromTop, rAdd=0, rMult=1){
    var r = radius*rMult + rAdd
    var radians = (turnsFromTop*2*Math.PI);
    var px = r*Math.sin(radians)+center[0];
    var py = r*-Math.cos(radians)+center[1];
    return [px,py]
}

var visitedPoints = [];
for (var i=0; i<=maxArrowSource; i++){
    var startPoint = getCirclePoint(i/(maxArrowPoint+1));
    arrows[i].forEach(d=>{
        let rev = d<i?-1:1;
        if (Math.abs(d-i)>maxArrowPoint/2) rev*=-1;
        let thing = Math.min(Math.abs(d-i),maxArrowPoint-Math.abs(d-i)+1);

        var startThick = getCirclePoint(i/(maxArrowPoint+1)+rev*arrowMaxWidth/(4*radius*Math.PI),arrowMaxWidth/2);
        var endPoint = getCirclePoint(d/(maxArrowPoint+1));
        var endThick = getCirclePoint(d/(maxArrowPoint+1)-rev*arrowMinWidth/(4*radius*Math.PI),arrowMinWidth/2);
        var midPoint = startPoint.map((d,i)=>(d+endPoint[i])/2);
        var midThick = startThick.map((d,i)=>(d+endThick[i])/2);
        var curvePoint = lerp(midPoint, center, 2*thing/maxArrowPoint);
        var curveThick = lerp(midThick, center, 2*thing/maxArrowPoint);

        var solid = true;
        if (d < i) {
            solid = false;
        } else if (visitedPoints.includes(d)) {
            solid = false;
        }
        var lineOpacity = solid ? arrowOpacity:arrowOpacityLight;

        $chartGroup.append("path")
            .attr("d",`M ${startPoint[0]},${startPoint[1]}
                    Q ${curvePoint[0]},${curvePoint[1]}
                    ${endPoint[0]},${endPoint[1]}
                    L ${endThick[0]},${endThick[1]}
                    Q ${curveThick[0]},${curveThick[1]}
                    ${startThick[0]},${startThick[1]}Z`)
            .attr("fill",arrowColor)
            .attr("fill-opacity", lineOpacity)
            .attr("stroke", "none")
            .attr("graph-from", i)
            .attr("graph-to", d)
            .attr("graph-solid", solid)
            .classed(`best-path-to-${d}`,solid)
        visitedPoints.push(d);
    })
    
}

for (var i=0; i<= maxArrowPoint; i++){
    let c = getCirclePoint(i/(maxArrowPoint+1))
    $chartGroup.append("circle")
        .attr("cx", c[0])
        .attr("cy", c[1])
        .attr("r", radius/maxArrowPoint*3)
        .attr("fill", "rgba(0,0,0,0)")
        .attr("graph-point", i)
        .classed("circle-hover",true)
}

$chartGroup.selectAll(".circle-hover")
    .on("mouseover",function(){
        let point = d3.select(this).attr("graph-point");
        while (point > 0){
            point = $chartGroup
                .select(`.best-path-to-${point}`)
                .attr("fill", "red")
                .attr("stroke","red")
                .attr("graph-from");
            point = parseInt(point);
        }
    })
    .on("mouseout",function(){
        $chartGroup.selectAll("path")
            .filter(function(){
                return d3.select(this).attr("graph-solid")=="true"
            })
            .attr("fill",arrowColor)
            .attr("stroke","none");
    })

// $chartGroup.selectAll("path")
//     .on("mouseover", function(){
//         d3.select(this).attr("fill","red");
//     })
//     .on("mouseout", function(){
//         var solid = d3.select(this).attr("graph-solid")=="true";
//         var lineColor = solid?arrowColor:arrowColorLight;
//         // console.log(solid);
//         d3.select(this).attr("fill", lineColor)
//     })

function lerp(start, end, t){
    if (typeof start != typeof end){
        console.warn("Type mismatch for lerp");
        return lerpf(start, end, t);
    }
    switch (typeof start) {
        case "object":
            if (start.length!=end.length) console.warn("Array length mismatch for lerp");
            return start.map((d,i)=>lerpf(d,end[i],t));
        default:
            return lerpf(start, end, t);
    }
}

function lerpf(start, end, t){
    return (1-t)*start + t*end;
}
}
run();
