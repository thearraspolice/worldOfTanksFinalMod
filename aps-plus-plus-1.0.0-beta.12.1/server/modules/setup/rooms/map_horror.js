let { darkStone: d } = require('../tiled/midc.jd'),



room = [
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
    [  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ,  d ],
];


module.exportd = room;