var projectLinks = navDropdownElements;

var $pLinks = d3.select("#projectGrid")
    .selectAll(".col-lg-6")
    .data(projectLinks)
    .enter()
    .append("div")
    .attr("class","col-lg-6")
    .append("a")
    .attr("href", d=>d.link)
    .attr("target", externalLinkTarget)

$pLinks.append("h3")
    .text(d=>d.label)

$pLinks.append("p")
    .attr("style","margin-bottom:2px")
    .append("div")
    .attr("style","max-height: 250px; overflow:hidden;")
    .append("img")
    .attr("width",400)
    .attr("src", d=>d.img)

$pLinks.append("p")
    .classed("skills-text",true)
    .text(d=>`Skills: ${d.skills}`)