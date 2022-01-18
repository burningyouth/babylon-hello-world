import {
    Engine,
    FreeCamera,
    HemisphericLight,
    Mesh,
    MeshBuilder,
    Scene,
    Vector3,
} from "@babylonjs/core";

export class SimpleScene {
    engine: Engine;
    scene: Scene;

    constructor(canvas: HTMLCanvasElement) {
        this.engine = new Engine(canvas, true);
        this.scene = new Scene(this.engine);

        this.engine.runRenderLoop(() => {
            this.scene.render();
        });

        window.addEventListener("resize", this.engine.resize);
    }

    createCamera(px = 0, py = -1, pz = 3): FreeCamera {
        const camera = new FreeCamera(
            "camera",
            new Vector3(px, py, pz),
            this.scene
        );
        camera.attachControl();
        camera.speed = 0.25;

        return camera;
    }

    createHemisphericLight(): HemisphericLight {
        const light = new HemisphericLight(
            "light",
            new Vector3(0, 1, 0),
            this.scene
        );

        light.intensity = 0.5;

        return light;
    }

    createGround(): Mesh {
        return MeshBuilder.CreateGround(
            "ground",
            {
                width: 10,
                height: 10,
            },
            this.scene
        );
    }

    createBall(): Mesh {
        const ball = MeshBuilder.CreateSphere(
            "ball",
            {
                diameter: 1,
            },
            this.scene
        );

        ball.position = new Vector3(0, 1, 0);

        return ball;
    }

    createScene(): void {
        this.createCamera();
        this.createHemisphericLight();
        this.createBall();
        this.createGround();
    }
}
