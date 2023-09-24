function Insertion() {
    inp_as.disabled = false;
    butts_algos.disabled = false;
    inp_aspeed.disabled = false;
    //Setting Time complexities
    document.getElementById("algo_name").innerText = "Insertion Sort";

    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    // c_delay = 0;


    butts_algos.addEventListener("click", function insertionAlgo() {
        //Setting Time complexities

        inp_as.disabled = true;
        butts_algos.disabled = true;
        inp_aspeed.disabled = true;

        c_delay = 0;


        for (var j = 0; j < array_size; j++) {
            div_update(divs[j], div_sizes[j], "yellow");//Color update

            var key = div_sizes[j];
            var i = j - 1;
            while (i >= 0 && div_sizes[i] > key) {
                div_update(divs[i], div_sizes[i], "red");//Color update
                div_update(divs[i + 1], div_sizes[i + 1], "red");//Color update

                div_sizes[i + 1] = div_sizes[i];

                div_update(divs[i], div_sizes[i], "red");//Height update
                div_update(divs[i + 1], div_sizes[i + 1], "red");//Height update

                div_update(divs[i], div_sizes[i], "green");//Color update
                if (i == (j - 1)) {
                    div_update(divs[i + 1], div_sizes[i + 1], "yellow");//Color update
                }
                else {
                    div_update(divs[i + 1], div_sizes[i + 1], "green");//Color update
                }
                i -= 1;
            }
            div_sizes[i + 1] = key;

            for (var t = 0; t < j; t++) {
                div_update(divs[t], div_sizes[t], "blue");//Color update
            }
        }
        div_update(divs[j - 1], div_sizes[j - 1], "blue");//Color update
        for (var i = 0; i < array_size; i++) {
            div_update(divs[i], div_sizes[i], "green"); // Update color to green for sorted elements
        }



    });

}
