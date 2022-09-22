import React from 'react';

import { ChromaticAberration, EffectComposer } from '@react-three/postprocessing';

export const Effects = () => {
    return <EffectComposer>
        <ChromaticAberration offset={0.2} />
    </EffectComposer>;
};
