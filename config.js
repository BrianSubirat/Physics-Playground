// Configuration options that users might want to modify
export const PHYSICS_CONFIG = {
    gravity: 1.5,
    gravityScale: 0.002,
    timeScale: 1.0,
    constraintIterations: 2,
    positionIterations: 6,
    velocityIterations: 4
};

export const PARTICLE_CONFIG = {
    PARTICLE_SIZE: 6,
    LIQUID_DENSITY: 0.01,
    LIQUID_FRICTION: 0.1,
    LIQUID_FRICTION_AIR: 0.0001,
    LIQUID_RESTITUTION: 0.2,
    STIFFNESS: 0.5,
    DAMPING: 0.1
};

export const COLORS = {
    dark: {
        background: '#1a1a1a',
        primary: '#4CAF50',
        secondary: '#388E3C',
        text: '#ffffff',
        accent: '#ff8800'
    },
    light: {
        background: '#f5f5f5',
        primary: '#2E7D32',
        secondary: '#388E3C',
        text: '#333333',
        accent: '#ff6d00'
    }
};

