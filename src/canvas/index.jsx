import {Canvas} from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'



import Backdrop from './Backdrop'
import Shirt from './Shirt'
import CameraRig from './CameraRig'
const CanvasModel = () => {
  return (
    <Canvas>
       <ambientLight intensity={0.5} />
       <Center>
          <Shirt />
        </Center>
    </Canvas>
  )
}

export default CanvasModel
