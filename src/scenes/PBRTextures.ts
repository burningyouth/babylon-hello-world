import { CubeTexture, Mesh, MeshBuilder, PBRMaterial } from "@babylonjs/core";
import { SceneWithTextures } from "./sceneWithTextures";

export class PBRTexturesScene extends SceneWithTextures {
    createEnvironment(): void {
        const envTex = CubeTexture.CreateFromPrefilteredData(
            "./textures/env/environment.env",
            this.scene
        );

        this.scene.environmentTexture = envTex;

        this.scene.createDefaultSkybox(envTex, true);
    }

    createScene(): void {
        this.createCamera();
        this.createBall();
        this.createGround();
        this.createEnvironment();
    }

    createBall(): Mesh {
        const ballMat = new PBRMaterial("ballMat", this.scene);

        ballMat.environmentIntensity = 1.5;

        ballMat.albedoTexture = this.getTexture("rock-2/rock-2-diffuse.jpg");

        ballMat.bumpTexture = this.getTexture("rock-2/rock-2-normal.jpg");
        ballMat.invertNormalMapX = true;
        ballMat.invertNormalMapY = true;

        ballMat.metallicTexture = this.getTexture("rock-2/rock-2-arm.jpg");
        ballMat.useAmbientOcclusionFromMetallicTextureRed = true;
        ballMat.useRoughnessFromMetallicTextureGreen = true;
        ballMat.useMetallnessFromMetallicTextureBlue = true;

        const ball = super.createBall();

        ball.material = ballMat;

        return ball;
    }

    createGround(): Mesh {
        const groundMat = new PBRMaterial("groundMat", this.scene);
        const uvScale = 1;

        groundMat.environmentIntensity = 1.25;

        groundMat.albedoTexture = this.getTexture(
            "asphalt/asphalt-diffuse.jpg",
            uvScale
        );

        groundMat.bumpTexture = this.getTexture(
            "asphalt/asphalt-normal.jpg",
            uvScale
        );
        groundMat.invertNormalMapX = true;
        groundMat.invertNormalMapY = true;

        groundMat.metallicTexture = this.getTexture(
            "asphalt/asphalt-arm.jpg",
            uvScale
        );
        groundMat.useAmbientOcclusionFromMetallicTextureRed = true;
        groundMat.useRoughnessFromMetallicTextureGreen = true;
        groundMat.useMetallnessFromMetallicTextureBlue = true;

        const ground = MeshBuilder.CreateGround(
            "ground",
            {
                width: 10,
                height: 10,
            },
            this.scene
        );

        ground.material = groundMat;

        return ground;
    }
}
