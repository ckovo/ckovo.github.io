/**
 * 樱花飘落效果类
 */
class Sakura {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'sakura-container';
        document.body.appendChild(this.container);
        
        // 樱花数量
        this.petalsCount = 50;
        // 存储所有樱花元素
        this.petals = [];
        // 樱花的颜色变化
        this.colors = [
            'rgba(255, 183, 197, 0.9)',
            'rgba(255, 197, 208, 0.9)',
            'rgba(255, 209, 220, 0.9)',
            'rgba(255, 223, 232, 0.9)'
        ];
        
        this.init();
    }

    /**
     * 初始化樱花
     */
    init() {
        for (let i = 0; i < this.petalsCount; i++) {
            setTimeout(() => {
                this.createPetal();
            }, i * 300); // 错开创建时间
        }
    }

    /**
     * 获取随机值
     */
    random(min, max) {
        return min + Math.random() * (max - min);
    }

    /**
     * 创建单个樱花
     */
    createPetal() {
        const petal = document.createElement('div');
        petal.className = 'sakura-petal';
        
        // 随机大小
        const size = this.random(10, 20);
        // 随机颜色
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        // 随机起始位置
        const startLeft = Math.random() * window.innerWidth;
        // 随机动画时间
        const animationDuration = this.random(10, 20);
        // 随机延迟
        const animationDelay = Math.random() * 5;
        // 随机旋转角度
        const rotation = Math.random() * 360;
        // 随机摇摆幅度
        const swayRange = this.random(100, 200);
        
        petal.style.cssText = `
            left: ${startLeft}px;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            animation: sakuraFall ${animationDuration}s linear ${animationDelay}s infinite;
            transform: rotate(${rotation}deg);
        `;

        // 添加自定义属性用于动画
        petal.dataset.swayRange = swayRange;
        
        this.container.appendChild(petal);
        this.petals.push(petal);
        
        // 监听动画结束,重新开始动画
        petal.addEventListener('animationend', () => {
            petal.remove();
            this.createPetal();
        });
    }
} 