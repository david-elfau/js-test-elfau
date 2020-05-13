const Helpers = {
    FormatedTime: function (time) {

        time = Math.ceil(time);

        // Hours, minutes and seconds
        var hrs = ~~(time / 3600);
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";

        if (hrs > 0) {
            ret += "" + hrs + "h ";
        }
        if (mins > 0) {
            ret += "" + mins + "m ";
        }
        ret += "" + secs + "s";

        return ret;
    },
    FormatedGold: function (gold, digits) {
        var si = [
            { value: 1, symbol: "" },
            { value: 1E3, symbol: "k" },
            { value: 1E6, symbol: "M" },
            { value: 1E9, symbol: "G" },
            { value: 1E12, symbol: "T" },
            { value: 1E15, symbol: "P" },
            { value: 1E18, symbol: "E" }
        ];
        var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var i;
        for (i = si.length - 1; i > 0; i--) {
            if (gold >= si[i].value) {
                break;
            }
        }
        return (gold / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
    },
    NextLevelMilestone: function (level) {
        let milestones = [5, 10, 15, 20, 30, 40, 50, 100, 200];

        for (let nextValue of milestones) {
            if (nextValue > level)
                return nextValue; 
        }
        return milestones[milestones.len - 1];
    },
    PreLevelMilestone: function (level) {
        let milestones = [5, 10, 15, 20, 30, 40, 50, 100, 200];

        let preValue = 0;
        for (let nextValue of milestones) {
            if (nextValue > level)
                return preValue;
            preValue = nextValue;
        }
        return preValue;
    }

}

export default Helpers;