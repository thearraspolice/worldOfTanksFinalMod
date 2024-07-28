const { dereference, combineStats, makeDeco, menu } = require('../facilitators.js');
const { base, gunCalcNames, statnames } = require('../constants.js');
const g = require('../gunvals.js');

module.exports = ({ Events }) => {
    Events.on('spawn', entity => {
        entity.on('define', () => {
            entity.name = entity.name.replace(/\[.*\]/g, '').trim() + ' [' + entity.label + ']';
        });
    });
};
class io_turretWithMotion extends IO {
    constructor(b, opts = {}) {
        super(b)
    }
    think(input) {
        return {
            target: this.body.master.velocity,
            main: true,
        };
    }
}
ioTypes.turretWithMotion = io_turretWithMotion

Class.grassRockFloor = {
    PARENT: "rock",
    LABEL: "Wall",
    SIZE: 25,
    SHAPE: 'tileableRockGrass.png',
    VARIES_IN_SIZE: false
}

Class.tankChassisLTR = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'ltrchassis.png',
    SIZE: 20,
}


Class.LTR = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 18,
        HEALTH: 250,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "L.T.R",
    SHAPE: 'ltrturret.png',
    SIZE: 70,
    SHOOT_SOUND: "shootSoundHeavy.wav",
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 3.28, damage: 1.75, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: [ "tankChassisLTR"],
        },
    ]
}

Class.tankChassisT1 = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 't1chassis.png',
    SIZE: 20, 
}

Class.T1 = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 20,
        HEALTH: 270,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "T1",
    SHAPE: 't1turret.png',
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 6.02, damage: 2.5, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: [ "tankChassisT1"],
        },
    ]
}


Class.tankChassisMS1 = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'ms1chassis.png',
    SIZE: 20,
}




Class.MS1 = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 16,
        HEALTH: 240,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "MS-1",
    SHAPE: 'ms1turret.png',
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 7.5, damage: 2.75, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: [ "tankChassisMS1"],
        },
    ]
}

Class.tankChassisPzII = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'panzer2chassis.png',
    SIZE: 20,
}



Class.panzer2 = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 30,
        HEALTH: 310,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "Pz.II",
    SHAPE: 'panzer2turret.png',
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 1.2, damage: 0.6, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: [ "tankChassisPzII"],
        },
    ]
}


Class.tankChassisM2light = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'm2lightchassis.png',
    SIZE: 20,
}


Class.m2light = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 30,
        HEALTH: 320,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "M2 Light",
    SHAPE: 'm2lightturret.png',
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 3, damage: 1.75, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: [ "tankChassisM2light"],
            
        },
    ]
}

Class.tankChassisT26 = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 't26chassis.png',
    SIZE: 20,
}





Class.t26 = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 30,
        HEALTH: 310,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "T-26",
    SHAPE: 't26turret.png',
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 2.58, damage: 2, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: ["tankChassisT26"],
        },
    ]
}

Class.tankChassispz38t = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'pz38tchassis.png',
    SIZE: 20,
}




Class.pz38t = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 28,
        HEALTH: 510,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "Pz.38-T",
    SHAPE: 'pz38tturret.png',
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 2.60, damage: 2.75, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: ["tankChassispz38t"],
        },
    ]
}




Class.tankChassism3stuart = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'm3stuartchassis.png',
    SIZE: 20,
}



Class.m3stuart = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 40,
        HEALTH: 420,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "M3 Stuart",
    SHAPE: 'm3stuartturret.png',
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 2.32, damage: 2.75, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: ["tankChassism3stuart"],
        },
    ]
}



Class.tankChassisbt2 = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'bt2chassis.png',
    SIZE: 20,
}






Class.bt2 = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 50,
        HEALTH: 410,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "BT-2",
    SHAPE: 'bt2turret.png',
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 2.27, damage: 2.75, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: ["tankChassisbt2"],
        },
    ]
}



Class.tankChassisRenaultft = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'renaultftchassis.png',
    SIZE: 20,
}





Class.renaultft = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 16,
        HEALTH: 240,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "Renault FT",
    SHAPE: 'renaultftturret.png',
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 3.91, damage: 1.25, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: ["tankChassisRenaultft"],
        },
    ]
}




Class.tankChassisD1 = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'd1chassis.png',
    SIZE: 20,
}






Class.d1 = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 25,
        HEALTH: 400,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "D1",
    SHAPE: 'd1turret.png',
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 4, damage: 3.5, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: ["tankChassisD1"],
        },
    ]
}


Class.tankChassispz35t = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'pz35tchassis.png',
    SIZE: 20,
}








Class.pz35t = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 20,
        HEALTH: 420,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "Pz. 35-T",
    SHAPE: 'pz35tturret.png',
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 2.75, damage: 2.75, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: ["tankChassispz35t"],
        },
    ]
}






Class.tankChassisd2 = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'd2chassis.png',
    SIZE: 20,
}




Class.d2 = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 15,
        HEALTH: 510,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "D2",
    SHAPE: 'd2turret.png',
    
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 2, damage: 3, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: ["tankChassisd2"],
        },
    ]
}



Class.marder2 = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 15,
        HEALTH: 450,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "Marder II",
    SHAPE: 'marder2.png',
    FACING_TYPE: "locksFacing",
    TANK_DESTROYER: true,
    SPIN_LOCK: true,
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 6.24, damage: 9, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    
    
}






Class.tankChassispanzer3 = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'panzer3chassis.png',
    SIZE: 20,
}






Class.panzer3 = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 40,
        HEALTH: 510,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "Pz. III",
    SHAPE: 'panzer3turret.png',
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 2.9, damage: 4, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],

    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: ["tankChassispanzer3"],
        },
    ]
    
    
}






Class.tankChassist6medium = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 't6mediumchassis.png',
    SIZE: 20,
}






Class.t6medium = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 32,
        HEALTH: 600,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "T6 Medium",
    SHAPE: 't6mediumturret.png',
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 4.5, damage: 6.3, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],

    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: ["tankChassist6medium"],
        },
    ]
    
    
}




Class.tankChassism5stuart = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'm5stuartchassis.png',
    SIZE: 20,
}






Class.m5stuart = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 36,
        HEALTH: 495,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "M5 Stuart",
    SHAPE: 'm5stuartturret.png',
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 1.8, damage: 2, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],

    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: ["tankChassism5stuart"],
        },
    ]
    
    
}





Class.tankChassispz2g = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'pz2gchassis.png',
    SIZE: 20,
}






Class.pz2g = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 40,
        HEALTH: 490,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "Pz. II (G)",
    SHAPE: 'pz2gturret.png',
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.7, damage: 0.9, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],

    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: ["tankChassispz2g"],
        },
    ]
    
    
}





Class.tankChassisbt7 = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'bt7chassis.png',
    SIZE: 20,
}






Class.bt7 = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 45,
        HEALTH: 510,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "BT-7",
    SHAPE: 'bt7turret.png',
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 2.09, damage: 3, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: ["tankChassisbt7"],
        },
    ]
}






Class.tankChassist28 = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 't28chassis.png',
    SIZE: 20,
}






Class.t28 = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 28,
        HEALTH: 600,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "T-28",
    SHAPE: 't28turret.png',
    SIZE: 100,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 5.52, damage: 6, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: ["tankChassist28"],
        },
    ]
}



Class.tankChassisb1 = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'b1chassis.png',
    SIZE: 20,
}






Class.b1 = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 28,
        HEALTH: 510,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "B1",
    SHAPE: 'b1turret.png',
    SIZE: 100,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 6.52, damage: 5.5, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: ["tankChassisb1"],
        },
    ]
}




Class.tankChassisamx40 = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'amx40chassis.png',
    SIZE: 20,
}






Class.amx40 = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 30,
        HEALTH: 600,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "AMX-40",
    SHAPE: 'amx40turret.png',
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 5.06, damage: 6.9, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: ["tankChassisamx40"],
        },
    ]
}






Class.tankChassispz4d = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'pz4dchassis.png',
    SIZE: 20,
}






Class.pz4d = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 36,
        HEALTH: 600,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "Pz. IV (D)",
    SHAPE: 'pz4dturret.png',
    SIZE: 90,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 4, damage: 7, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],
    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: ["tankChassispz4d"],
        },
    ]
}







Class.tankChassisluchs = {
    PARENT: 'genericTank',
    CONTROLLERS: ["turretWithMotion"],
    SHAPE: 'luchschassis.png',
    SIZE: 20,
}






Class.luchs = {
    PARENT: "genericWorldOfTanks",
    DANGER: 6,
	BODY: {
        ACCELERATION: 3,
        SPEED: 36,
        HEALTH: 580,
        
        SHIELD: 0,
        REGEN: 0,
        FOV: 0.6,
    },
    LABEL: "Luchs",
    SHAPE: 'luchsturret.png',
    SIZE: 70,
    GUNS: [
        
        {
            POSITION: [1, 1, 1, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 2.4, damage: 2.25, shudder: 0.5, speed: 2 }, g.power]),
                TYPE: "developerBullet",
                ALPHA: 0,
            }
        },
        
    ],

    TURRETS: [
        {
            POSITION: [20,0, 0, 0, 360, 0],
            TYPE: ["tankChassisluchs"],
        },
    ]
    
    
}





Class.tankPicker = menu("Tanks")
Class.tankPicker.REROOT_UPGRADE_TREE = "tankPicker"


Class.germanTanks = menu("German Tanks")
Class.americaTanks = menu("American Tanks")
Class.russianTanks = menu("Russian Tanks")
Class.frenchTanks = menu("French Tanks")

Class.tankPicker.UPGRADES_TIER_0 = ["germanTanks", "americaTanks", "russianTanks", "frenchTanks"]

Class.germanTanks.UPGRADES_TIER_0 = ["LTR"]
    Class.LTR.UPGRADES_TIER_5 = ["panzer2"]
        Class.panzer2.UPGRADES_TIER_6 = ["pz2g", "panzer3"]
            Class.panzer3.UPGRADES_TIER_7 = ["pz4d"]
            Class.pz2g.UPGRADES_TIER_7 = ["luchs"]


Class.americaTanks.UPGRADES_TIER_0 = ["T1"]
    Class.T1.UPGRADES_TIER_5 = ["m2light"]
            Class.m2light.UPGRADES_TIER_6 = ["m3stuart"]
                Class.m3stuart.UPGRADES_TIER_7 = ["t6medium", "m5stuart"]

Class.russianTanks.UPGRADES_TIER_0 = ["MS1"]
    Class.MS1.UPGRADES_TIER_5 = ["t26"]
        Class.t26.UPGRADES_TIER_6 = ["bt2"]
            Class.bt2.UPGRADES_TIER_7 = ["bt7", "t28"]

Class.frenchTanks.UPGRADES_TIER_0 = ["renaultft"]
    Class.renaultft.UPGRADES_TIER_5 = ["d1"]
        Class.d1.UPGRADES_TIER_6 = ["d2"]
            Class.d2.UPGRADES_TIER_7 = ["b1", "amx40"]





Class.premiumTanks = menu("Premium Tanks")

Class.germanPremiumTanks = menu("German Premium Tanks")
Class.americaPremiumTanks = menu("American Premium Tanks")
Class.russianPremiumTanks = menu("Russian Premium Tanks")
Class.frenchPremiumTanks = menu("French Premium Tanks")


Class.premiumTanks.UPGRADES_TIER_0 = ["germanPremiumTanks", "americaPremiumTanks", "russianPremiumTanks", "frenchPremiumTanks"]
    Class.germanPremiumTanks.UPGRADES_TIER_0 = ["pz38t", "pz35t"]