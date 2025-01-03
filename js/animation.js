class ParticleAnimation {
    constructor() {
        this.canvas = document.getElementById('heroCanvas');
        this.setup();
        this.createParticles();
        this.animate();
        this.addMouseInteraction();
    }

    setup() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.position.z = 5;
        this.mouse = new THREE.Vector2();
    }

    addMouseInteraction() {
        document.addEventListener('mousemove', (event) => {
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        });
    }

    createParticles() {
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1500;
        const posArray = new Float32Array(particlesCount * 3);

        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.005,
            color: 0x6366f1
        });

        this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
        this.scene.add(this.particles);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.particles.rotation.y += 0.0005;
        this.particles.rotation.x += 0.0005;

        const targetX = this.mouse.x * 0.2;
        const targetY = this.mouse.y * 0.2;
        this.particles.rotation.x += (targetY - this.particles.rotation.x) * 0.05;
        this.particles.rotation.y += (targetX - this.particles.rotation.y) * 0.05;

        this.renderer.render(this.scene, this.camera);
    }
}

// ヒーローセクションのアニメーション
document.addEventListener('DOMContentLoaded', () => {
    new ParticleAnimation();

    // テキストアニメーション
    gsap.to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5
    });

    gsap.to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.8
    });

    gsap.to('.cta-button', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.1
    });

    gsap.to('.scroll-indicator', {
        opacity: 1,
        duration: 1,
        delay: 1.4
    });
});
