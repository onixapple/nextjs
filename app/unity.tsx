import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function UnityProvider() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "/assets/Mell.loader.js",
    dataUrl: "/assets/Mell.data",
    frameworkUrl: "/assets/Mell.framework.js",
    codeUrl: "/assets/Mell.wasm",
  });

  return (
    <Fragment>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity className="sm: w-full h-full justify-center items-center"
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden", width: "300px", height: "400px" }}

      />
    </Fragment>
  );
}