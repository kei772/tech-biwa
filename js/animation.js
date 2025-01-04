// Three.jsのセットアップ
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('heroCanvas'),
    alpha: true,
    antialias: true
});

// レンダラーの設定
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// パーティクルの設定
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 1000;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 5;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

// パーティクルのマテリアル
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.005,
    color: '#7c3aed',
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
});

// パーティクルメッシュの作成
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// カメラの位置設定
camera.position.z = 3;

// マウス座標の取得
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX / window.innerWidth - 0.5;
    mouseY = event.clientY / window.innerHeight - 0.5;
});

// アニメーションループ
function animate() {
    requestAnimationFrame(animate);

    // パーティクルの回転
    particlesMesh.rotation.y += 0.001;
    particlesMesh.rotation.x += 0.001;

    // マウス位置に応じたカメラの動き
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;

    renderer.render(scene, camera);
}

// ウィンドウリサイズ対応
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// アニメーション開始
animate();

// ヒーロータイトルのアニメーション
gsap.from('.hero-title', {
    duration: 1.2,
    y: 100,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.5
});

gsap.from('.hero-subtitle', {
    duration: 1.2,
    y: 50,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.8
});

gsap.from('.cta-button', {
    duration: 1.2,
    y: 30,
    opacity: 0,
    ease: 'power4.out',
    delay: 1.1
});

gsap.to('.scroll-indicator', {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: 'power2.out',
    delay: 2
});
