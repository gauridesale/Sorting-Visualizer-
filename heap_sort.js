function Heap() {
    inp_as.disabled = false;
    butts_algos.disabled = false;
    inp_aspeed.disabled = false;
    //Setting Time complexities
    document.getElementById("algo_name").innerText = "Heap Sort";

    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    // c_delay = 0;


    butts_algos.addEventListener("click", function heapAlgo() {
        //Setting Time complexities

        inp_as.disabled = true;
        butts_algos.disabled = true;
        inp_aspeed.disabled = true;

        c_delay = 0;

        heap_sort();
        for (var i = 0; i < array_size; i++) {
            div_update(divs[i], div_sizes[i], "green"); // Update color to green for sorted elements
        }

    });
    function swap(i, j) {
        div_update(divs[i], div_sizes[i], "red");//Color update
        div_update(divs[j], div_sizes[j], "red");//Color update

        var temp = div_sizes[i];
        div_sizes[i] = div_sizes[j];
        div_sizes[j] = temp;

        div_update(divs[i], div_sizes[i], "red");//Height update
        div_update(divs[j], div_sizes[j], "red");//Height update

        div_update(divs[i], div_sizes[i], "green");//Color update
        div_update(divs[j], div_sizes[j], "green");//Color update
    }

    function max_heapify(n, i) {
        var largest = i;
        var l = 2 * i + 1;
        var r = 2 * i + 2;

        if (l < n && div_sizes[l] > div_sizes[largest]) {
            if (largest != i) {
                div_update(divs[largest], div_sizes[largest], "green");//Color update
            }

            largest = l;

            div_update(divs[largest], div_sizes[largest], "red");//Color update
        }

        if (r < n && div_sizes[r] > div_sizes[largest]) {
            if (largest != i) {
                div_update(divs[largest], div_sizes[largest], "green");//Color update
            }

            largest = r;

            div_update(divs[largest], div_sizes[largest], "red");//Color update
        }

        if (largest != i) {
            swap(i, largest);

            max_heapify(n, largest);
        }
    }

    function heap_sort() {
        for (var i = Math.floor(array_size / 2) - 1; i >= 0; i--) {
            max_heapify(array_size, i);
        }

        for (var i = array_size - 1; i > 0; i--) {
            swap(0, i);
            div_update(divs[i], div_sizes[i], "blue");//Color update
            div_update(divs[i], div_sizes[i], "yellow");//Color update

            max_heapify(i, 0);

            div_update(divs[i], div_sizes[i], "green");//Color update
            div_update(divs[i], div_sizes[i], "blue");//Color update
        }
        div_update(divs[i], div_sizes[i], "blue");//Color update
    }

}
