import { PBRTexturesScene } from "./PBRTextures";
import {
    AbstractMesh,
    Color3,
    DirectionalLight,
    GizmoManager,
    HemisphericLight,
    Light,
    LightGizmo,
    Scene,
    SceneLoader,
    Vector3,
} from "@babylonjs/core";
import "@babylonjs/loaders";

export class BasicModelScene extends PBRTexturesScene {
    models!: AbstractMesh[];
    campfire!: AbstractMesh;

    createScene(): void {
        this.createCamera(1, 1, -10);
        this.createCampfire();
        this.createDirectionalLight();

        this.scene.ambientColor = new Color3(0.3, 0.3, 0.3);
        this.scene.fogMode = Scene.FOGMODE_EXP;
        this.scene.fogDensity = 0.08;
    }

    async createCampfire(): Promise<void> {
        const { meshes } = await SceneLoader.ImportMeshAsync(
            "",
            "./models/",
            "campfire.glb",
            this.scene
        );

        this.models = meshes;

        this.campfire = meshes.find((item) => item.name === "campfire");
    }

    createHemisphericLight(): HemisphericLight {
        const light = new HemisphericLight(
            "light",
            new Vector3(0, 1, 0),
            this.scene
        );

        light.intensity = 0.3;
        light.diffuse = new Color3(0.8, 0.8, 1);
        light.groundColor = new Color3(0.3, 0.1, 0.1);
        light.specular = new Color3(0.5, 0.3, 0.3);

        this.createGizmos(light);

        return light;
    }

    createDirectionalLight(): DirectionalLight {
        const light = new DirectionalLight(
            "dirlight",
            new Vector3(0, -10, 3),
            this.scene
        );

        light.radius = 10;

        light.intensity = 0.3;
        light.diffuse = new Color3(0.8, 0.8, 1);
        light.specular = new Color3(0.5, 0.3, 0.3);

        this.createGizmos(light);

        return light;
    }

    createGizmos(light: Light): void {
        const lightGizmo = new LightGizmo();
        lightGizmo.scaleRatio = 2;
        lightGizmo.light = light;

        const gizmoManager = new GizmoManager(this.scene);
        gizmoManager.positionGizmoEnabled = true;
        gizmoManager.rotationGizmoEnabled = true;
        gizmoManager.usePointerToAttachGizmos = false;
        gizmoManager.attachToMesh(lightGizmo.attachedMesh);
    }
}
