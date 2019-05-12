import Reactotron from "reactotron-react-native";

const tron = Reactotron.configure({ host: "192.168.2.106" }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

console.tron = tron;