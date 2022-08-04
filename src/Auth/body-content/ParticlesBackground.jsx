import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleContent from "./ParticleConfig";

export default function ParticlesBackground(){
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
    };
    return (
          <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={ParticleContent}/>
    );
}