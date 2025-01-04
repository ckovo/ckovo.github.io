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
            ["AE86", "AE86的简介"],
            ["狂小禹", "该人物的简介"],
            ["古见哨子", "该人物的简介"],
            ["吾王剑锋所指", "该人物的简介"],
            ["小樱", "该人物的简介"],
            ["枕石漱流", "该人物的简介"],
            ["浮生有梦三千场", "该人物的简介"],
            ["淮北也生橘", "该人物的简介"],
            ["喜欢不笑", "该人物的简介"],
            ["情系泰格", "该人物的简介"],
            ["BlackMasker", "该人物的简介"],
            ["SuperMax", "该人物的简介"],
            ["被鷄奸的狗蛋", "该人物的简介"],
            ["幻想做个人生赢家", "该人物的简介"],
            ["不破爱花", "该人物的简介"],
            ["GENJISHUI", "该人物的简介"],
            ["稻香我也没忘过", "该人物的简介"],
            ["又菜又爱玩的瞄准", "该人物的简介"],
            ["真是不怕被我笑", "该人物的简介"],
            ["拾叁", "该人物的简介"],
            ["由山野到书房", "该人物的简介"],
            ["我花开后百花杀", "该人物的简介"],
            ["SIENNA", "该人物的简介"],
            ["东尼大大", "该人物的简介"],
            ["DEAD", "该人物的简介"],
            ["Crazydouzi", "该人物的简介"],
            ["白昼幽梦", "该人物的简介"],
            ["小亓最帅气哟", "该人物的简介"],
            ["曲终人散", "该人物的简介"],
            ["彼岸花", "该人物的简介"],
            ["你们不配拥有奶妈", "该人物的简介"],
            ["教 授", "该人物的简介"],
            ["水晶兰", "该人物的简介"],
            ["叫我资源怪", "该人物的简介"],
            ["老子让你在这停顿", "该人物的简介"],
            ["断背山牧羊人", "该人物的简介"],
            ["流浪记", "该人物的简介"],
            ["HUNTERE", "该人物的简介"],
            ["五里雾中", "该人物的简介"],
            ["FATHER", "该人物的简介"],
            ["小仙儿", "该人物的简介"],
            ["太阳的黑子", "该人物的简介"],
            ["不跳小苹果", "该人物的简介"],
            ["念念", "该人物的简介"],
            ["LIAOZEHAO", "该人物的简介"],
            ["PISWEREFOUND", "该人物的简介"],
            ["大北", "该人物的简介"],
            ["天才美少女桃花", "该人物的简介"],
            ["打得赢就退出", "该人物的简介"],
            ["绀野木棉季", "该人物的简介"],
            ["萤火巷里的老屋", "该人物的简介"],
            ["苭幼稚的柚子", "该人物的简介"],
            ["秋木苏", "该人物的简介"],
            ["网恋被骗300块", "该人物的简介"],
            ["深海鱼", "该人物的简介"],
            ["食色性也", "该人物的简介"],
            ["夜叉", "该人物的简介"],
            ["上衫佐助", "该人物的简介"],
            ["TEA", "该人物的简介"],
            ["泽重北北", "该人物的简介"],
            ["恶鬼缠身", "该人物的简介"],
            ["雪中悍刀行", "该人物的简介"],
            ["乌鸦有罪论", "该人物的简介"],
            ["生人勿进", "该人物的简介"],
            ["鸦雀无声", "该人物的简介"],
            ["香蕉味大叔", "该人物的简介"],
            ["想赢我只能去赌", "该人物的简介"],
            ["爱意", "该人物的简介"],
            ["衍涩", "该人物的简介"],
            ["风华绝代小十七", "该人物的简介"],
            ["鹤见柔一", "该人物的简介"],
            ["苏子远", "该人物的简介"],
            ["曦岚君", "该人物的简介"],
            ["麦月十四", "该人物的简介"],
            ["XIAOYU", "该人物的简介"],
            ["灵林", "该人物的简介"],
            ["AMNESIA", "该人物的简介"],
            ["一蓑烟雨任平生", "该人物的简介"],
            ["眼底春秋也不及你", "该人物的简介"],
            ["半糖去冰", "该人物的简介"],
            ["黄选", "该人物的简介"],
            ["旧梦", "该人物的简介"],
            ["MARSHMELLO", "该人物的简介"],
            ["慵懒之龟", "该人物的简介"],
            ["将喜欢藏在今晚", "该人物的简介"],
            ["PHOENIX", "该人物的简介"],
            ["带铁头娃", "该人物的简介"],
            ["雾月屿枝", "该人物的简介"],
            ["衾岚喵", "该人物的简介"],
            ["滱墨", "该人物的简介"],
            ["七里香", "该人物的简介"],
            ["既不淡薄也不浓重", "该人物的简介"],
            ["Goku", "该人物的简介"],
            ["雕瓴不腐", "该人物的简介"],
            ["萌新", "该人物的简介"],
            ["派大星", "该人物的简介"],
            ["朝如青丝目成雪", "该人物的简介"],
            ["写给黄淮", "该人物的简介"],
            ["樱与祈", "该人物的简介"],
            ["澜城", "该人物的简介"],
            ["雪之下雪乃", "该人物的简介"],
            ["MMPTYAREL", "该人物的简介"],
            ["风雪依稀白发尾", "该人物的简介"],
            ["夏姬八上", "该人物的简介"],
            ["天野灯", "该人物的简介"],
            ["执念", "该人物的简介"],
            ["八碗茶", "该人物的简介"],
            ["旷兮其若谷", "该人物的简介"],
            ["最肯忘却古人诗", "该人物的简介"],
            ["阿箸", "该人物的简介"],
            ["小露露", "该人物的简介"],
            ["心斋", "该人物的简介"],
            ["退时红雨", "该人物的简介"],
            ["难拥拥", "该人物的简介"],
            ["大鹏小菜", "该人物的简介"],
            ["别撸我的猫", "该人物的简介"],
            ["清水", "该人物的简介"],
            ["我亦未败", "该人物的简介"],
            ["你好烧鸭", "该人物的简介"],
            ["江晓晓同学", "该人物的简介"],
            ["世界变模糊了", "该人物的简介"],
            ["LUXET", "该人物的简介"],
            ["绪方理奈", "该人物的简介"],
            ["古德奈先生", "该人物的简介"],
            ["钟情", "该人物的简介"],
            ["云深不知处", "该人物的简介"],
            ["牧濑红莉栖", "该人物的简介"],
            ["满船清梦压星河", "该人物的简介"],
            ["shabi", "该人物的简介"],
            ["伴着黎明东升", "该人物的简介"],
            ["欧 拉", "该人物的简介"],
            ["活有余罪", "该人物的简介"],
            ["激情澎湃的狗哼哼", "该人物的简介"],
            ["听暖", "该人物的简介"],
            ["五三", "该人物的简介"],
            ["火锅", "该人物的简介"],
            ["相被你睡", "该人物的简介"],
            ["上课后的咸猪手", "该人物的简介"],
            ["ERIS", "该人物的简介"],
            ["三川", "该人物的简介"],
            ["CAINIAO", "该人物的简介"],
            ["柠萌", "该人物的简介"],
            ["低价出租单身汪", "该人物的简介"],
            ["薛定谔的猫", "该人物的简介"],
            ["酒后单杀丈母娘", "该人物的简介"],
            ["翩跹跹跹跹", "该人物的简介"],
            ["LOST", "该人物的简介"],
            ["一季烟雨凉", "该人物的简介"],
            ["蔷薇", "该人物的简介"],
            ["郑风流倜傥", "该人物的简介"],
            ["LAKER", "该人物的简介"],
            ["糖三岁", "该人物的简介"],
            ["惯看秋月春风", "该人物的简介"],
            ["羽然", "该人物的简介"],
            ["胜天半子祁同伟", "该人物的简介"],
            ["我买几个香蕉去", "该人物的简介"],
            ["西伯利亚熊", "该人物的简介"],
            ["一本瞎本木棉", "该人物的简介"],
            ["夏末末至已觉秋", "该人物的简介"],
            ["夕木", "该人物的简介"],
            ["乐师", "该人物的简介"],
            ["硅胶爷爷", "该人物的简介"],
            ["生而为人我很抱歉", "该人物的简介"],
            ["喵喵酱", "该人物的简介"],
            ["屎里有毒", "该人物的简介"],
            ["我就玩蛇莫哔哔", "该人物的简介"],
            ["上饶烤鸡腿", "该人物的简介"],
            ["媛大头", "该人物的简介"],
            ["言和总是很帅气", "该人物的简介"],
            ["DEADPOOL", "该人物的简介"],
            ["少女强则少年平躺", "该人物的简介"],
            ["寻明", "该人物的简介"],
            ["佐眼血色", "该人物的简介"],
            ["萝莉的原味胖次", "该人物的简介"],
            ["残梦", "该人物的简介"],
            ["犬来八荒", "该人物的简介"],
            ["神明塌下眠", "该人物的简介"],
            ["EiddlePeng", "该人物的简介"],
            ["趴着别动", "该人物的简介"],
            ["清茶", "该人物的简介"],
            ["DAVID", "该人物的简介"],
            ["渡边", "该人物的简介"],
            ["漫天星斗", "该人物的简介"],
            ["Shadder2k", "该人物的简介"],
            ["枯树", "该人物的简介"],
            ["路霸", "该人物的简介"],
            ["八二年的巫毒", "该人物的简介"],
            ["艾莉丝", "该人物的简介"],
            ["我妻由乃", "该人物的简介"],
            ["试试火候来", "该人物的简介"],
            ["我寄人间雪满头", "该人物的简介"],
            ["青椒肉丝", "该人物的简介"],
            ["鬼九", "该人物的简介"],
            ["鱼长毛就会死", "该人物的简介"],
            ["人菜爱哔哔", "该人物的简介"],
            ["EVENEAGLE", "该人物的简介"],
            ["挤挤更健康", "该人物的简介"],
            ["九菜合子", "该人物的简介"],
            ["樱岛麻衣", "该人物的简介"],
            ["NEKO2108", "该人物的简介"],
            ["魂魄妖梦", "该人物的简介"],
            ["YEAH", "该人物的简介"],
            ["泪雨翠青山", "该人物的简介"],
            ["李小璐的假艿亮了", "该人物的简介"],
            ["RUBY", "该人物的简介"],
            ["今游昔", "该人物的简介"],
            ["青红造了个白", "该人物的简介"],
            ["青芯灯冷", "该人物的简介"],
            ["MAYDAY", "该人物的简介"],
            ["LUCKYOWL", "该人物的简介"],
            ["MAPLE", "该人物的简介"],
            ["全场最弱就是我", "该人物的简介"],
            ["是刀锋鸭", "该人物的简介"],
            ["希望德芙永远开心", "该人物的简介"],
            ["秋下清斋西月明", "该人物的简介"],
            ["花了末年妆", "该人物的简介"],
            ["YUUKI", "该人物的简介"],
            ["惊魂之蛙", "该人物的简介"],
            ["三眼兔子", "该人物的简介"],
            ["自由之翼", "该人物的简介"],
            ["Paris", "该人物的简介"],
            ["艾莉", "该人物的简介"],
            ["笪民", "该人物的简介"],
            ["猴赛雷", "该人物的简介"],
            ["局外人", "该人物的简介"],
            ["神的大脑皮层", "该人物的简介"],
            ["糖甜兔", "该人物的简介"],
            ["Apricity", "该人物的简介"],
            ["Bnetplayer", "该人物的简介"],
            ["JellyKing", "该人物的简介"],
            ["寒蝉", "该人物的简介"],
            ["雷蝉", "该人物的简介"],
            ["ZAQ2321", "该人物的简介"],
            ["IvanML", "该人物的简介"],
            ["初秦", "该人物的简介"],
            ["DragonBall", "该人物的简介"],
            ["太二真人", "该人物的简介"],
            ["盐盐盐盐盐盐", "该人物的简介"],
            ["西行寺幽幽子", "该人物的简介"],
            ["就叫古董吧", "该人物的简介"],
            ["北城", "该人物的简介"],
            ["锺淀", "该人物的简介"],
            ["今天有月亮吗", "该人物的简介"],
            ["天使庇护", "该人物的简介"],
            ["SYOUVA", "该人物的简介"],
            ["清风挽", "该人物的简介"],
            ["为所欲为异灵牧", "该人物的简介"],
            ["遥望夏安", "该人物的简介"],
            ["萌尊", "该人物的简介"],
            ["古河渚", "该人物的简介"],
            ["山有扶苏", "该人物的简介"],
            ["请打我队友", "该人物的简介"],
            ["夜未央", "该人物的简介"],
            ["何必要欺骗自己", "该人物的简介"],
            ["叙利亚独狼", "该人物的简介"],
            ["DEPRAVATION", "该人物的简介"],
            ["逍遥肆", "该人物的简介"],
            ["锐", "该人物的简介"],
            ["玩个锤子", "该人物的简介"],
            ["凉忧", "该人物的简介"],
            ["狂野之狼", "该人物的简介"],
            ["她说万幸得以相识", "该人物的简介"],
            ["青童", "该人物的简介"],
            ["桃子味汽水", "该人物的简介"],
            ["奂寒", "该人物的简介"],
            ["SuperActor", "该人物的简介"],
            ["时雨诗", "该人物的简介"],
            ["林空鹿饮溪", "该人物的简介"],
            ["踏风白驹", "该人物的简介"],
            ["脱氧核糖也是糖", "该人物的简介"],
            ["魔法之裤天上星", "该人物的简介"],
            ["春卷", "该人物的简介"],
            ["一源二次不等式", "该人物的简介"],
            ["源稚生", "该人物的简介"],
            ["暴躁的武僧", "该人物的简介"],
            ["冰露星星糖", "该人物的简介"],
            ["芸舒", "该人物的简介"],
            ["琉璃", "该人物的简介"],
            ["煜煜", "该人物的简介"],
            ["颜逸", "该人物的简介"],
            ["TSO", "该人物的简介"],
            ["YASSUO", "该人物的简介"],
            ["对眼", "该人物的简介"],
            ["超级铁拳大王", "该人物的简介"],
            ["超级炮台大王", "该人物的简介"],
            ["凕使", "该人物的简介"],
            ["时茗", "该人物的简介"],
            ["冷血炸弹客", "该人物的简介"],
            ["璐璐", "该人物的简介"],
            ["魔法少女吴彦祖", "该人物的简介"],
            ["你不开心我哄你啊", "该人物的简介"],
            ["小苏", "该人物的简介"],
            ["忙里油多", "该人物的简介"],
            ["木子火青", "该人物的简介"],
            ["土拨鼠", "该人物的简介"],
            ["翎马", "该人物的简介"],
            ["郁楠", "该人物的简介"],
            ["月亮两块五", "该人物的简介"],
            ["蚊纸", "该人物的简介"],
            ["梦想拥有猫猫子", "该人物的简介"],
            ["剑剑超可爱", "该人物的简介"],
            ["朦朦胧胧的月光下", "该人物的简介"],
            ["欲念似火般焦灼", "该人物的简介"],
            ["LOUISK", "该人物的简介"],
            ["夏雪冬花", "该人物的简介"],
            ["大佩", "该人物的简介"],
            ["腻歪", "该人物的简介"],
            ["橙色阳光暖如你", "该人物的简介"],
            ["FLOWERSDANCE", "该人物的简介"],
            ["第十二夜", "该人物的简介"],
            ["一夜十三郎", "该人物的简介"],
            ["李达康", "该人物的简介"],
            ["COLORFULDOG", "该人物的简介"],
            ["汐落帝伦幻", "该人物的简介"],
            ["刀与她皆无情", "该人物的简介"],
            ["无界", "该人物的简介"],
            ["菊花开了", "该人物的简介"],
            ["机智的小黄人", "该人物的简介"],
            ["九薿", "该人物的简介"],
            ["见面记得送花", "该人物的简介"],
            ["Jackherer", "该人物的简介"],
            ["情系瑶瑶", "该人物的简介"],
            ["海水不及我意深", "该人物的简介"],
            ["双子星耶尔斯", "该人物的简介"],
            ["有幸此生不独奏", "该人物的简介"],
            ["TCC", "该人物的简介"],
            ["月下枫", "该人物的简介"],
            ["请务必把胖次给我", "该人物的简介"],
            ["路过的卡面来打", "该人物的简介"],
            ["日记写了吗", "该人物的简介"],
            ["YAZI", "该人物的简介"],
            ["KNIFE", "该人物的简介"],
            ["好色且卑鄙的小甲", "该人物的简介"],
            ["HELLFIRE", "该人物的简介"],
            ["才不是爱哭鬼", "该人物的简介"],
            ["WAN", "该人物的简介"],
            ["P1ZZA", "该人物的简介"],
            ["SHANGLI", "该人物的简介"],
            ["SHESE", "该人物的简介"],
            ["s1mple", "该人物的简介"],
            ["KININEE", "该人物的简介"],
            ["雪飘人间", "该人物的简介"],
            ["人就像海里漂的船", "该人物的简介"],
            ["HUGINZZZ", "该人物的简介"],
            ["乜一", "该人物的简介"],
            ["数码暴龙肥怪蛇", "该人物的简介"],
            ["LSKOTORI", "该人物的简介"],
            ["仔仔", "该人物的简介"],
            ["追风赶月别留情", "该人物的简介"],
            ["一具无头白尸", "该人物的简介"],
            ["世界上最爱我的人", "该人物的简介"],
            ["特殊你旭", "该人物的简介"],
            ["BOOMBOOM", "该人物的简介"]

            
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

        // 修改显示间隔时间
        const intervalTime = 800; // 增加间隔时间，从500改为800

        // 显示名字
        columns.forEach((column, index) => {
            setTimeout(() => {
                const nameIndex = (this.currentIndex + index) % this.persons.length;
                const nameElement = this.createNameElement(nameIndex, column);
                this.container.appendChild(nameElement);
                
                requestAnimationFrame(() => {
                    nameElement.classList.add('moving');
                });
            }, index * intervalTime); // 使用新的间隔时间
        });

        this.currentIndex += this.displayCount;
        // 修改下一组显示的延迟时间
        this.animationTimer = setTimeout(
            () => this.showNextGroup(), 
            this.displayCount * intervalTime + 1000 // 增加额外延迟
        );
    }
}

// 页面加载完成后初始化展示效果
document.addEventListener('DOMContentLoaded', () => {
    const nameDisplay = new NameDisplay();
    nameDisplay.initialize();
}); 