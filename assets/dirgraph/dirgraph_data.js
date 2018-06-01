var arrows1 = {
    0:[1,2],
    1:[3,2],
    2:[4,5],
    3:[6],
    4:[7,8,5],
    5:[],
    6:[9,0],
    7:[],
    8:[1,3],
    9:[10,11],
    10:[12,13],
    11:[14],
    12:[15,16],
    13:[6,17,0],
    14:[18],
    15:[],
    16:[],
    17:[1],
    18:[19,20],
    19:[21,12,22],
    20:[23,24,25],
    21:[22],
    22:[23,24],
    23:[26,27],
    24:[28],
    25:[29,30],
    26:[27],
    27:[31,32],
    28:[33,30],
    29:[34,35],
    30:[36,37],
    31:[21,12,22],
    32:[14,15,16],
    33:[38,39],
    34:[40],
    35:[36,37],
    36:[41,42,43],
    37:[44,45,46],
    38:[40,47,48],
    39:[49,50,37],
    40:[26,27,51],
    41:[52],
    42:[53,54],
    43:[45,46],
    44:[55],
    45:[],
    46:[],
    47:[28],
    48:[31,32],
    49:[41],
    50:[56,57],
    51:[29,30],
    52:[58,59],
    53:[34,35],
    54:[40],
    55:[60,61],
    56:[62,54],
    57:[44,45,46],
    58:[63,64],
    59:[65,66],
    60:[67,42,43],
    61:[62,54],
    62:[38,39],
    63:[68,69], // also @
    64:[70,71,72],
    65:[73,74,75],
    66:[76,77,78],
    67:[52]
}

var testObject = {
    meta:{
        f:[[2,5],[6,5]],
        exit:[4,3],
        // ground:[[],[],], (list from voxel graph)
        // spikes:[],
        // arrow/branch states are: none, loop, loop (inherited), fail, fail (inherited), best
        //      fail > loop > none
        //      best = only 'none' in level
        //      fail branch: branch to "x" or "s", or only branch is to self
        //      loop branch: branch to same/lower level
        //      fail node: only fail branches
        //      loop node: only loop and fail branches
    },
    0: {
        shape:[[4,7],"l"],
        level: 0,
        u:1,
        r:2,
        f:[0,1],
    },
    7: {
        shape:[[6,5],'dd'],
        level: 3,
        u:7,
        events:["*"],
        f:[0],
    },
    44: {
        shape:[[7,6],'dl'],
        level: 12,
        l:55,
        r:"x",
        f:[1]
    },
    63: {
        shape:[[5,3],'drd'],
        level: 15,
        u:"@",
        l:68,
        r:69,
        f:[]
    }
}

var arrows6 = {
    0:[1,2],
    1:[3,4],
    2:[5],
    3:[4],
    4:[6,7],
    5:[8,9],
    6:[10,11,12],
    7:[13,14,15],
    8:[16,17],
    9:[18,19],
    10:[0],
    11:[],
    12:[1],
    13:[],
    14:[],
    15:[],
    16:[20],
    17:[21],
    18:[22],
    19:[23],
    20:[],
    21:[24],
    22:[25],
    23:[26,27],
    24:[28,29,30],
    25:[28,29,30],
    26:[31,32,33],
    27:[34,35],
    28:[36,37],
    29:[38,39],
    30:[40,41,42],
    31:[],
    32:[],
    33:[],
    34:[],
    35:[],
    36:[43],
    37:[],
    38:[],
    39:[],
    40:[],
    41:[],
    42:[],
    43:[44,45],
    44:[46,47,48],
    45:[49,50],
    46:[51,52],
    47:[53],
    48:[54,55],
    49:[56],
    50:[57,58],
    51:[52],
    52:[54,59,55],
    53:[57],
    54:[60,61,62],
    55:[63,64,65],
    56:[66,67],
    57:[68,69],
    58:[70],
    59:[71,72],
    60:[43],
    61:[44,45],
    62:[],
    63:[],
    64:[],
    65:[],
    66:[73,74],
    67:[75,76,77],
    68:[78],
    69:[79],
    70:[],
    71:[80],
    72:[],
    73:[51,52],
    74:[54,59,55],
    75:[60,61,62],
    76:[71,72],
    77:[63,64,65],
    78:[81,82],
    79:[28,29,30],
    80:[83],
    81:[84,85],
    82:[86,87,88],
    83:[89,90,91],
    84:[],
    85:[],
    86:[],
    87:[],
    88:[],
}