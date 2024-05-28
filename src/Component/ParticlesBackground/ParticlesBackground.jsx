import Particles from "react-tsparticles";
import ParticlesConfig from "../ParticlesConfig/ParticlesConfig";


const ParticlesBackground = () => {
    return (
        <Particles params={ParticlesConfig}></Particles>
    );
};

export default ParticlesBackground;