import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import { useMemo, useCallback } from "react";
import particlesConfig from "./particlesConfig";

export default function Background(){
    const options = useMemo(()=>{
        return particlesConfig
    },[])

    const particlesInit = useCallback((engine)=>{
        loadSlim(engine);
        // loadFull(engine);
    },[]);
    return <Particles init={particlesInit} options={options} />
};