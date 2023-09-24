function Merge() {
    inp_as.disabled = false;
    butts_algos.disabled = false;
    inp_aspeed.disabled = false;

    document.getElementById("algo_name").innerText = "Merge Sort";

    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(N)";


    butts_algos.addEventListener("click", function mergeAlgo() {
        inp_as.disabled = true;
        butts_algos.disabled = true;
        inp_aspeed.disabled = true;

        c_delay = 0;

        merge_partition(0, array_size - 1, []);

        for (var i = 0; i < array_size; i++) {
            div_update(divs[i], div_sizes[i], "green");
        }
    });


    function merge_sort(start, mid, end) {
        var p = start, q = mid + 1;

        var Arr = [], k = 0;

        for (var i = start; i <= end; i++) {
            if (p > mid) {
                Arr[k++] = div_sizes[q++];
                div_update(divs[q - 1], div_sizes[q - 1], "red");//Color update
            }
            else if (q > end) {
                Arr[k++] = div_sizes[p++];
                div_update(divs[p - 1], div_sizes[p - 1], "red");//Color update
            }
            else if (div_sizes[p] < div_sizes[q]) {
                Arr[k++] = div_sizes[p++];
                div_update(divs[p - 1], div_sizes[p - 1], "red");//Color update
            }
            else {
                Arr[k++] = div_sizes[q++];
                div_update(divs[q - 1], div_sizes[q - 1], "red");//Color update
            }
        }

        for (var t = 0; t < k; t++) {
            div_sizes[start++] = Arr[t];
            div_update(divs[start - 1], div_sizes[start - 1], "blue");//Color update
        }
    }

    function merge_partition(start, end) {
        if (start < end) {
            var mid = Math.floor((start + end) / 2);
            div_update(divs[mid], div_sizes[mid], "yellow");//Color update

            merge_partition(start, mid);
            merge_partition(mid + 1, end);

            merge_sort(start, mid, end);
        }
    }
}
