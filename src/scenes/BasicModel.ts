import { PBRTexturesScene } from "./PBRTextures";
import {
    AbstractMesh,
    Color3,
    DirectionalLight,
    GizmoManager,
    HemisphericLight,
    IShadowLight,
    Light,
    LightGizmo,
    PointLight,
    Scene,
    SceneLoader,
    ShadowGenerator,
    SpotLight,
    Vector3,
} from "@babylonjs/core";
import "@babylonjs/loaders";

export class BasicModelScene extends PBRTexturesScene {
    models!: AbstractMesh[];
    campfire!: AbstractMesh;

    createScene(): void {
        this.engine.displayLoadingUI();
        this.createCamera(-1.5, 2, -7, 0.19, 0.3, 0);
        this.scene.ambientColor = new Color3(0.3, 0.3, 0.3);
        this.scene.fogMode = Scene.FOGMODE_EXP;
        this.scene.fogDensity = 0.08;
        this.createCampfireScene().then(() => {
            this.createDirectionalLight();
            this.createPointLight();
            this.createSpotLight();
            this.engine.hideLoadingUI();
            this.engine.runRenderLoop(() => {
                this.scene.render();
            });
        });
    }

    async createCampfireScene(): Promise<void> {
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

        return light;
    }

    createDirectionalLight(): DirectionalLight {
        const light = new DirectionalLight(
            "dirlight",
            new Vector3(5, -8, 3),
            this.scene
        );

        light.radius = 2;
        light.intensity = 0.05;
        light.diffuse = new Color3(0.8, 0.8, 1);
        light.specular = new Color3(0.5, 0.3, 0.3);

        this.createShadows(light);

        //this.createGizmos(light);

        return light;
    }

    createSpotLight(): SpotLight {
        const light = new SpotLight(
            "spotLight",
            new Vector3(0, 0.2, 0),
            new Vector3(0, 1, 0),
            Math.PI / 2,
            10,
            this.scene
        );

        light.parent = this.campfire;
        light.intensity = 2;
        light.diffuse = new Color3(1, 0.6, 0);
        this.createShadows(light);

        return light;
    }

    createPointLight(): PointLight {
        const light = new PointLight(
            "pointLight",
            new Vector3(0, 0.2, 0),
            this.scene
        );

        light.radius = 20;
        light.parent = this.campfire;
        light.intensity = 0.8;
        light.diffuse = new Color3(1, 0.6, 0);

        this.createShadows(light);

        return light;
    }

    createShadows(light: IShadowLight): void {
        light.shadowMinZ = 1;
        light.shadowMaxZ = 20;

        const shadowGen = new ShadowGenerator(1024, light);

        shadowGen.usePercentageCloserFiltering = true;

        this.models.forEach((mesh) => {
            mesh.receiveShadows = true;
            shadowGen.addShadowCaster(mesh);
        });
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
