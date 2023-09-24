function Selection() {
    inp_as.disabled = false;
    butts_algos.disabled = false;
    inp_aspeed.disabled = false;

    document.getElementById("algo_name").innerText = "Selection Sort";
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N^2)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";


    butts_algos.addEventListener("click", function selectionAlgo() {
        //Setting Time complexities

        inp_as.disabled = true;
        butts_algos.disabled = true;
        inp_aspeed.disabled = true;
        c_delay = 0;


        for (var i = 0; i < array_size - 1; i++) {
            div_update(divs[i], div_sizes[i], "red");//Color update

            index_min = i;

            for (var j = i + 1; j < array_size; j++) {
                div_update(divs[j], div_sizes[j], "yellow");//Color update

                if (div_sizes[j] < div_sizes[index_min]) {
                    if (index_min != i) {
                        div_update(divs[index_min], div_sizes[index_min], "green");//Color update
                    }
                    index_min = j;
                    div_update(divs[index_min], div_sizes[index_min], "red");//Color update
                }
                else {
                    div_update(divs[j], div_sizes[j], "green");//Color update
                }
            }

            if (index_min != i) {
                var temp = div_sizes[index_min];
                div_sizes[index_min] = div_sizes[i];
                div_sizes[i] = temp;

                div_update(divs[index_min], div_sizes[index_min], "red");//Height update
                div_update(divs[i], div_sizes[i], "red");//Height update
                div_update(divs[index_min], div_sizes[index_min], "green");//Color update
            }
            div_update(divs[i], div_sizes[i], "blue");//Color update
        }
        div_update(divs[i], div_sizes[i], "blue");//Color update
        for (var i = 0; i < array_size; i++) {
            div_update(divs[i], div_sizes[i], "green"); // Update color to green for sorted elements
        }

    });
}
