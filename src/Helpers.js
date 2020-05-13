const Helpers = {
    FormatedTime: function (time) {

        time = Math.ceil(time);

        let hrs = ~~(time / 3600);
        let mins = ~~((time % 3600) / 60);
        let secs = ~~time % 60;

        let ret = "";

        if (hrs > 0) {
            ret += "" + hrs + "h ";
        }
        if (mins > 0) {
            ret += "" + mins + "m ";
        }
            
        if (hrs < 1) {
            ret += "" + secs + "s";
        }

        return ret;
    },

    FormatedGold: function (gold, digits) {
        let si = [
            { value: 1, symbol: "" },
            { value: 1E3, symbol: "k" },
            { value: 1E6, symbol: "M" },
            { value: 1E9, symbol: "G" },
            { value: 1E12, symbol: "T" },
            { value: 1E15, symbol: "P" },
            { value: 1E18, symbol: "E" }
        ];
        let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        let i;
        for (i = si.length - 1; i > 0; i--) {
            if (gold >= si[i].value) {
                break;
            }
        }
        return (gold / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
    },

    NextLevelMilestone: function (level) {
        let milestones = [5, 10, 15, 20, 30, 40, 50, 100, 200,300];

        for (let nextValue of milestones) {
            if (nextValue > level)
                return nextValue; 
        }
        return milestones[milestones.len - 1];
    },

    PreLevelMilestone: function (level) {
        let milestones = [5, 10, 15, 20, 30, 40, 50, 100, 200,300];

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