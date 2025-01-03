/**
 * 名称展示类 - 控制名字的动画展示效果
 */
class NameDisplay {
    /**
     * 初始化展示所需的属性
     */
    constructor() {
        // 获取容器元素
        this.container = document.querySelector('.container');
        
        // 使用二维数组存储人物信息 [名字, 描述]
        this.persons = [
            ["寻龙", "来自发霉的披萨，永远的闷骚型男"],
            ["Blast", "Blast的简介"],
            ["南烟吹北枳", "南烟吹北枳的简介"],
            ["Fvhitmitil", "Fvhitmitil的简介"],
            ["TITANXPASCAL", "TITANXPASCAL的简介"],
            ["枕书", "枕书的简介"],
            ["幻想狂奏曲", "幻想狂奏曲的简介"],
            ["迷之小肥羊", "迷之小肥羊的简介"],
            ["special", "special的简介"],
            ["裝逼造脸一顿踢", "裝逼造脸一顿踢的简介"],
            ["岛田镖师", "岛田镖师的简介"],
            ["淡风盈晓", "淡风盈晓的简介"],
            ["SHE", "SHE的简介"],
            ["想念还在等待救援", "想念还在等待救援的简介"],
            ["只想做个洒脱的人", "只想做个洒脱的人的简介"],
            ["腹黑猫", "腹黑猫的简介"],
            ["从未手软", "从未手软的简介"],
            ["梦里是艾什", "梦里是艾什的简介"],
            ["逗斯咏", "逗斯咏的简介"],
            ["寡言", "寡言的简介"],
            ["易忘", "易忘的简介"],
            ["济南屁屁王", "济南屁屁王的简介"],
            ["吾", "吾的简介"],
            ["这是我家的圆圆呀", "这是我家的圆圆呀的简介"],
            ["宁就是地上这滩水", "宁就是地上这滩水的简介"],
            ["没有梦想不想说话", "没有梦想不想说话的简介"],
            ["家里有妖怪", "家里有妖怪的简介"],
            ["神明也曾遗憾", "神明也曾遗憾的简介"],
            ["AE86", "AE86的简介"]
        ];

        // 当前展示到的索引位置
        this.currentIndex = 0;
        // 每组显示的名字数量
        this.displayCount = 5;
        // 名字方块的宽度
        this.boxWidth = 200;
        // 名字方块之间的边距
        this.boxMargin = 20;

        // 背景图片数组
        this.backgroundImages = [
            'img/1.webp',
            'img/2.webp'
        ];

        // 新增列数配置
        this.columns = 5; // 屏幕分为5列
        this.columnOffsets = []; // 存储每列的垂直偏移量
        this.lastNameInColumn = []; // 记录每列最后一个名字的位置
        
        // 初始化列偏移量
        for(let i = 0; i < this.columns; i++) {
            this.columnOffsets[i] = 0;
            this.lastNameInColumn[i] = -200; // 初始偏移
        }

        // 添加一个标志来追踪是否正在显示
        this.isDisplaying = false;
        
        // 添加计时器引用
        this.animationTimer = null;
        
        // 修改页面可见性监听器
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.isDisplaying = false;
                // 清除计时器
                if (this.animationTimer) {
                    clearTimeout(this.animationTimer);
                    this.animationTimer = null;
                }
                // 页面隐藏时清除所有名字元素
                const nameBoxes = document.querySelectorAll('.name-box');
                nameBoxes.forEach(box => {
                    if (box && box.parentNode) {
                        box.parentNode.removeChild(box);
                    }
                });
                
                // 重置所有状态
                this.currentIndex = 0;
                this.columnOffsets.fill(0);
                this.lastNameInColumn.fill(-200);
            } else {
                // 页面重新可见时，重新开始显示
                if (!this.isDisplaying) {
                    this.shuffleNames();
                    this.showNextGroup();
                    this.isDisplaying = true;
                }
            }
        });
    }

    /**
     * 初始化展示效果
     */
    initialize() {
        // 设置随机背景
        this.setRandomBackground();
        // 首次打乱名字顺序
        this.shuffleNames();
        // 开始展示第一组名字
        this.showNextGroup();
    }

    /**
     * 设置随机背景图片
     */
    setRandomBackground() {
        // 创建背景容器
        const bgContainer = document.createElement('div');
        bgContainer.className = 'bg-container';
        
        // 随机选择一张图片
        const randomIndex = Math.floor(Math.random() * this.backgroundImages.length);
        const imgPath = this.backgroundImages[randomIndex];
        
        // 创建图片元素
        const img = document.createElement('img');
        img.src = imgPath;
        
        // 图片加载完成后显示
        img.onload = () => {
            bgContainer.classList.add('show');
        };
        
        bgContainer.appendChild(img);
        document.body.insertBefore(bgContainer, document.body.firstChild);
    }

    /**
     * 随机打乱名字数组顺序
     */
    shuffleNames() {
        // Fisher-Yates 洗牌算法，直接打乱 persons 数组
        for (let i = this.persons.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.persons[i], this.persons[j]] = [this.persons[j], this.persons[i]];
        }
    }

    /**
     * 获取名字方块的随机位置和动画延迟
     * @param {number} index - 当前名字在组中的索引
     * @returns {Object} 包含位置和延迟信息的对象
     */
    getRandomPosition(index) {
        // 距离浏览器边缘的最小距离
        const margin = 100;
        // 计算可用的宽度空间
        const availableWidth = window.innerWidth - (2 * margin);
        // 将空间分成几个区域（比显示数量多1，确保有足够间距）
        const sections = this.displayCount + 1;
        const sectionWidth = availableWidth / sections;
        
        // 计算基础位置
        const baseLeft = margin + (sectionWidth * (index + 0.5));
        // 计算最大随机偏移量
        const maxOffset = Math.min(sectionWidth * 0.3, 50);
        // 生成随机偏移
        const randomOffset = (Math.random() - 0.5) * maxOffset;
        
        return {
            // 确保方块完全在视口内
            left: Math.min(Math.max(margin, baseLeft + randomOffset), window.innerWidth - margin - this.boxWidth),
            // 随机延迟时间 0-1.5秒
            delay: Math.random() * 1.5,
            // 随机起始垂直偏移 0-200像素
            startOffset: Math.random() * 200
        };
    }

    /**
     * 创建单个名字的DOM元素
     * @param {number} index - 名字在数组中的索引
     * @param {number} column - 列位置
     * @returns {HTMLElement} 创建的名字元素
     */
    createNameElement(index, column) {
        const nameElement = document.createElement('div');
        nameElement.className = 'name-box';
        
        // 存储完整的人物信息，而不是仅存储索引
        const person = this.persons[index];
        nameElement.dataset.name = person[0];
        nameElement.dataset.description = person[1];
        nameElement.textContent = person[0];

        // 计算水平位置
        const containerWidth = this.container.clientWidth - 100;
        const columnWidth = containerWidth / this.columns;
        
        // 创建临时元素计算文字宽度
        const tempSpan = document.createElement('span');
        tempSpan.style.visibility = 'hidden';
        tempSpan.style.position = 'absolute';
        tempSpan.style.fontSize = '24px'; // 与 name-box 相同的字体大小
        tempSpan.textContent = this.persons[index][0];
        document.body.appendChild(tempSpan);
        
        // 获取文字宽度并添加左右各20px的内边距
        const textWidth = tempSpan.offsetWidth + 40; // 40 = 左右各20px内边距
        document.body.removeChild(tempSpan);
        
        // 设置基础z-index
        const baseZIndex = 1;
        
        // 设置样式
        nameElement.style.cssText = `
            left: ${100 + column * columnWidth + columnWidth * 0.1}px; 
            right: ${100 + column * columnWidth + columnWidth * 0.1}px; 
            top: ${-100}px;
            width: ${textWidth}px;
            opacity: 0;
            z-index: ${baseZIndex};
            transform: translateY(${this.getVerticalOffset(column)}px);
        `;

        // 修改鼠标事件处理
        nameElement.addEventListener('mouseenter', (e) => {
            nameElement.classList.add('paused');
            nameElement.style.zIndex = '1000';
            
            const descriptionBox = document.createElement('div');
            descriptionBox.className = 'description-box';
            // 直接使用存储在 dataset 中的描述
            descriptionBox.textContent = nameElement.dataset.description;
            document.body.appendChild(descriptionBox);

            // 计算描述框位置
            const rect = nameElement.getBoundingClientRect();
            const boxLeft = rect.right + 10;
            const boxTop = rect.top;

            // 检查是否超出右边界
            if (boxLeft + descriptionBox.offsetWidth > window.innerWidth) {
                descriptionBox.style.left = (rect.left - descriptionBox.offsetWidth - 10) + 'px';
            } else {
                descriptionBox.style.left = boxLeft + 'px';
            }
            descriptionBox.style.top = boxTop + 'px';

            // 显示描述框
            requestAnimationFrame(() => {
                descriptionBox.classList.add('show');
            });

            // 存储描述框引用
            nameElement.descriptionBox = descriptionBox;
        });

        nameElement.addEventListener('mouseleave', () => {
            // 恢复动画
            nameElement.classList.remove('paused');
            nameElement.style.zIndex = baseZIndex;
            
            // 移除描述框
            if (nameElement.descriptionBox) {
                nameElement.descriptionBox.remove();
                nameElement.descriptionBox = null;
            }
        });

        // 移除之前重复的事件监听
        nameElement.addEventListener('animationend', () => {
            nameElement.remove();
        });

        return nameElement;
    }

    /**
     * 获取垂直偏移量
     * @param {number} column - 列位置
     * @returns {number} 垂直偏移量
     */
    getVerticalOffset(column) {
        const minVerticalGap = 150;
        const lastNamePosition = this.lastNameInColumn[column];
        const verticalOffset = Math.max(
            this.columnOffsets[column],
            lastNamePosition + minVerticalGap
        );

        this.columnOffsets[column] = verticalOffset;
        this.lastNameInColumn[column] = verticalOffset;

        return verticalOffset;
    }

    /**
     * 显示下一组名字
     */
    showNextGroup() {
        if (!this.isDisplaying) {
            this.isDisplaying = true;
        }

        if (this.currentIndex + this.displayCount > this.persons.length) {
            this.currentIndex = 0;
            this.shuffleNames();
            this.columnOffsets.fill(0);
            this.lastNameInColumn.fill(-200);
        }

        // 为每个名字分配一个列
        const columns = Array.from(
            { length: this.displayCount }, 
            (_, i) => i % this.columns
        );
        
        // 打乱列的顺序
        for (let i = columns.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [columns[i], columns[j]] = [columns[j], columns[i]];
        }

        // 显示名字
        columns.forEach((column, index) => {
            setTimeout(() => {
                const nameIndex = (this.currentIndex + index) % this.persons.length;
                const nameElement = this.createNameElement(nameIndex, column);
                this.container.appendChild(nameElement);
                
                requestAnimationFrame(() => {
                    nameElement.classList.add('moving');
                });
            }, index * 500);
        });

        this.currentIndex += this.displayCount;
        // 存储计时器引用
        this.animationTimer = setTimeout(() => this.showNextGroup(), this.displayCount * 500 + 500);
    }
}

// 页面加载完成后初始化展示效果
document.addEventListener('DOMContentLoaded', () => {
    const nameDisplay = new NameDisplay();
    nameDisplay.initialize();
}); 