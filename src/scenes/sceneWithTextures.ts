import { Mesh, StandardMaterial, Texture } from "@babylonjs/core";
import { SimpleScene } from "./simpleScene";

export class SceneWithTextures extends SimpleScene {
    getTexture(textureSrc: string, scale = 1): Texture {
        const texture = new Texture(`./textures/${textureSrc}`, this.scene);
        texture.uScale = scale;
        texture.vScale = scale;

        return texture;
    }

    createBall(): Mesh {
        const ballMat = new StandardMaterial("ballMat", this.scene);

        ballMat.diffuseTexture = this.getTexture("rock/rock-diffuse.jpg");

        ballMat.bumpTexture = this.getTexture("rock/rock-normal.jpg");
        ballMat.invertNormalMapX = true;
        ballMat.invertNormalMapY = true;

        ballMat.ambientTexture = this.getTexture("rock/rock-ao.jpg");

        const ball = super.createBall();

        ball.material = ballMat;

        return ball;
    }

    createGround(): Mesh {
        const groundMat = new StandardMaterial("groundMat", this.scene);
        const uvScale = 10;

        groundMat.diffuseTexture = this.getTexture(
            "floor/floor-diffuse.jpg",
            uvScale
        );

        groundMat.bumpTexture = this.getTexture(
            "floor/floor-normal.jpg",
            uvScale
        );
        groundMat.invertNormalMapX = true;
        groundMat.invertNormalMapY = true;

        groundMat.ambientTexture = this.getTexture(
            "floor/floor-ao.jpg",
            uvScale
        );

        const ground = super.createGround();

        ground.material = groundMat;

        return ground;
    }
}
