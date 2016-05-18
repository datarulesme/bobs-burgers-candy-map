var svgContainer = d3.select(".legend").append("svg")
                     .attr("width", 600)
                     .attr("height", 30);

              svgContainer.append("rect")
                     .attr("x", 0)
                     .attr("y", 10)
                     .attr("width", 10)
                     .attr("height", 10)
                     .style("fill", "red");  

              svgContainer.append("text")
                     .attr("x", 15)
                     .attr("y", 19)
                     .attr("fill", "#515151")
                     .text("Must visit");

              svgContainer.append("rect")
                     .attr("x", 80)
                     .attr("y", 10)
                     .attr("width", 10)
                     .attr("height", 10)
                     .style("fill", "gold");

              svgContainer.append("text")
                     .attr("x", 95)
                     .attr("y", 19)
                     .attr("fill", "#515151")
                     .text("Must avoid");
