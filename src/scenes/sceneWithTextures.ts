import { Mesh, StandardMaterial, Texture } from "@babylonjs/core";
import { SimpleScene } from "./simpleScene";

export class SceneWithTextures extends SimpleScene {
    createBall(): Mesh {
        const ballMat = new StandardMaterial("ballMat", this.scene);

        ballMat.diffuseTexture = new Texture(
            "./textures/rock/rock-diffuse.jpg",
            this.scene
        );

        const ball = super.createBall();

        ball.material = ballMat;

        return ball;
    }

    createGround(): Mesh {
        const groundMat = new StandardMaterial("groundMat", this.scene);
        const uvScale = 4;
        const textureArray: Texture[] = [];

        const diffTex = new Texture(
            "./textures/rock/floor-diffuse.jpg",
            this.scene
        );
        textureArray.push(diffTex);
        groundMat.diffuseTexture = diffTex;

        const normalTex = new Texture(
            "./textures/rock/floor-normal.jpg",
            this.scene
        );
        textureArray.push(normalTex);
        groundMat.bumpTexture = normalTex;

        const aoTex = new Texture("./textures/rock/floor-ao.jpg", this.scene);
        textureArray.push(aoTex);
        groundMat.ambientTexture = aoTex;

        textureArray.forEach((item) => {
            item.uScale = uvScale;
            item.vScale = uvScale;
        });

        const ground = super.createGround();

        ground.material = groundMat;

        return ground;
    }
}
